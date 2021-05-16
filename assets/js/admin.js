function createNewEvalForm() {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/rubrics.json");
    request.addEventListener("load", rubricsLoaded);
    request.send();
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
                let studentName = snapshot.val().naam;
                let tmpl_studentSection = tmpl_gradeForm_studentSection(studentId, studentName);
                document.querySelector("#evalStudentSelection").innerHTML += `<option value=${studentId}>${studentName}</option>`;
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