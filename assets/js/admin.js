
const form = document.querySelector('#gradeform');
form.addEventListener('submit', submitEvaluation);

function submitEvaluation(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    const value = Object.fromEntries(data.entries());
    console.log(value);
}

function createNewEvalForm() {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/rubrics.json");
    request.addEventListener("load", rubricsLoaded);
    request.send();
}

function evalChangeSelectedStudent(offset) {
    let currentIndex = parseInt(document.querySelector("#evalStudentSelection").selectedIndex, 10);
    let max = document.querySelectorAll("#evalStudentSelection>option").length;
    let newIndex = Math.min(max, Math.max(0, currentIndex + offset));
    document.querySelector("#evalStudentSelection").selectedIndex = newIndex;

    // if (newIndex === max) {
    //     document.querySelector("#evalSelectNextStudent").disabled = true;
    // }
    // if (newIndex === 0) {
    //     document.querySelector("#evalSelectPrevStudent").disabled = true;
    // }

    evalChangeStudent();
}

function evalChangeStudent() {
    let studentId = document.querySelector("#evalStudentSelection").value;
    document.querySelectorAll(".evalStudentSection").forEach(el => el.style.display = "none");
    document.querySelector(`#gradeform-${studentId}`).style.display = "";
}

function rubricsLoaded(e) {
    let rubricsJson = JSON.parse(e.currentTarget.response);


    let database = firebase.database();
    let managedUsersref = database.ref(`users`).orderByChild("klas");

    managedUsersref.once('value')
        .then(snapshot => {
            snapshot.forEach(snapshot => {
                let studentId = toCssSafeId(snapshot.key);
                let studentData = snapshot.val();
                let studentName = studentData.naam;
                let studentKlas = studentData.klas;
                let tmpl_studentSection = tmpl_gradeForm_studentSection(studentId, studentName);
                document.querySelector("#evalStudentSelection").innerHTML += `<option value=${studentId}>${studentKlas} - ${studentName}</option>`;
                document.querySelector("#gradeform-students").innerHTML += tmpl_studentSection;

                for (const [subject, grades] of Object.entries(rubricsJson)) {
                    let subjectId = toCssSafeId(subject);
                    let tmpl_subject = tmpl_gradeForm_subject(studentId, subjectId, subject);
                    document.querySelector(`#gradeform-students>#gradeform-${studentId}`).innerHTML += tmpl_subject;
                    for (const [grade, comment] of Object.entries(grades)) {
                        let tmpl_gradeOption = tmpl_gradeForm_gradeOption(studentId, subjectId, grade, comment);
                        document.querySelector(`#gradeform-${studentId}>#students-${studentId}-${subjectId}`).innerHTML += tmpl_gradeOption;
                    }
                }
            });
        });

}