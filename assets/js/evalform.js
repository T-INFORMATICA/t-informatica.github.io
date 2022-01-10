let rubrics;
let students = {};

function submitEvaluation(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    let evaluatie = {
        name: data.get('evalName'),
        date: data.get('evalDate')
    };

    let database = firebase.database();
    evalKey = database.ref(`evaluaties`).push(evaluatie).key;

    for (const [studentId, studentName] of Object.entries(students)) {
        for (const [subject, grades] of Object.entries(rubrics)) {
            let subjectId = toCssSafeId(subject);
            let grade = data.get(`students[${subjectId}][${studentId}]`);
            if (!grade) {
                continue;
            }
            let commentEl = document.querySelector(`input[name="students[${subjectId}][${studentId}]"]:checked+label>.comment`);
            let comment = commentEl ? commentEl.innerHTML : null;

            let resultaat = {
                commentaar: comment,
                evaluatie: evalKey,
                result: grade,
                subject: subject
            };
            database.ref(`resultaten/${studentId}`).push(resultaat);
        }
    }

    document.querySelectorAll("#gradeform input").forEach(i => i.disabled = true);
}

function createNewEvalForm() {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/rubrics2.json");
    request.addEventListener("load", rubricsLoaded);
    request.send();
}

function evalChangeStudent(offset) {
    let currentIndex = parseInt(document.querySelector("#evalStudentSelection").selectedIndex, 10);
    let max = document.querySelectorAll("#evalStudentSelection>option").length;
    let newIndex = Math.min(max, Math.max(0, currentIndex + offset));
    document.querySelector("#evalStudentSelection").selectedIndex = newIndex;

    let studentId = document.querySelector("#evalStudentSelection").value;
    document.querySelectorAll(".subjectStudentContainer").forEach(el => el.style.display = "none");
    document.querySelectorAll(`.studentContainer-${studentId}`).forEach(el => el.style.display = "");
}

function rubricsLoaded(e) {
    let rubricsJson = JSON.parse(e.currentTarget.response);
    rubrics = rubricsJson;

    let database = firebase.database();
    let managedUsersref = database.ref(`users`).orderByChild("klas");

    managedUsersref.on('value', snapshot => {
        snapshot.forEach(snapshot => {
            let studentId = snapshot.key;

            let studentData = snapshot.val();
            let studentName = studentData.naam;
            let studentKlas = studentData.klas;

            students[studentId] = {
                "name": studentName,
                "klas": studentKlas
            };
        });

        // reset form
        document.querySelector("#student-evals").innerHTML = "";
        document.querySelector("#evalStudentSelection").innerHTML = "";


        for (const [studentId, studentData] of Object.entries(students)) {
            document.querySelector("#evalStudentSelection").innerHTML += `<option value=${studentId}>${studentData.klas} - ${studentData.name}</option>`;
        }

        for (const [subject, grades] of Object.entries(rubricsJson)) {
            let subjectId = toCssSafeId(subject);

            let tmpl_subjectContainer = tmpl_evalForm_subjectContainer(subjectId);
            document.querySelector("#student-evals").innerHTML += tmpl_subjectContainer;

            for (const [studentId, studentData] of Object.entries(students)) {

                let tmpl_subjectStudentContainer = tmpl_evalForm_subjectStudentContainer(subjectId, studentId);
                document.querySelector(`#subjectContainer-${subjectId} .subjectStudentContainers`).innerHTML += tmpl_subjectStudentContainer;

                for (const [grade, comment] of Object.entries(grades)) {
                    let tmpl_subjectStudentGrade = tmpl_evalForm_subjectStudentGrade(subjectId, studentId, grade, comment);
                    document.querySelector(`#${subjectId}-${studentId}`).innerHTML += tmpl_subjectStudentGrade;
                }
            }
        }
        evalChangeStudent(0);
    });

}