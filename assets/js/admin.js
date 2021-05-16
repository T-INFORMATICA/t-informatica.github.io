
const form = document.querySelector('#gradeform');
form.addEventListener('submit', submitEvaluation);

let rubrics;
let students = {};

function submitEvaluation(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(data);
    // const value = Object.fromEntries(data.entries());
    // console.log(value);

    let json = {
        name: data.get('evalName'),
        date: data.get('evalDate'),
        students: {}
    };

    for (const [studentId, studentName] of Object.entries(students)) {
        for (const [subject, grades] of Object.entries(rubrics)) {
            let subjectId = toCssSafeId(subject);
            let grade1 = document.querySelector(`input[name="students[${studentId}][${subjectId}]"]`).value;
            let grade2 = document.forms.gradeform[`${studentId}][${subjectId}]"]`].value;
            console.log(grade1);
            console.log(grade2);
            let studentGradeData = data.getAll(`students[${studentId}][${subjectId}]`);
            if (studentId in json.students == false) {
                json.students[studentId] = {};
            }
            json.students[studentId][subjectId] = studentGradeData;
        }
    }

    console.log(json);
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
    rubrics = rubricsJson;

    let database = firebase.database();
    let managedUsersref = database.ref(`users`).orderByChild("klas");

    managedUsersref.once('value')
        .then(snapshot => {
            snapshot.forEach(snapshot => {
                let studentId = toCssSafeId(snapshot.key);
                let studentData = snapshot.val();
                let studentName = studentData.naam;
                let studentKlas = studentData.klas;

                students[studentId] = studentName;

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