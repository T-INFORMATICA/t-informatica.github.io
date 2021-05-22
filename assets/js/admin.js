let rubrics;
let students = {};

function submitEvaluation(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    let json = {
        name: data.get('evalName'),
        date: data.get('evalDate'),
        students: {}
    };

    let evaluatie = {
        name: data.get('evalName'),
        date: data.get('evalDate')
    };

    let database = firebase.database();
    evalKey = database.ref(`evaluaties`).push(evaluatie).key;

    for (const [studentId, studentName] of Object.entries(students)) {
        for (const [subject, grades] of Object.entries(rubrics)) {

            let subjectId = toCssSafeId(subject);
            let grade = data.get(`students[${studentId}][${subjectId}]`);
            if (grade) {
                let commentEl = document.querySelector(`input[name="students[${studentId}][${subjectId}]"]:checked+label>.gradeform-subject-option-comment`);
                let comment = commentEl ? commentEl.innerHTML : null;
                if (studentId in json.students == false) {
                    json.students[studentId] = {};
                }
                json.students[studentId][subjectId] = {
                    grade: grade,
                    comment: comment
                };

                let resultaat = {
                    commentaar: comment,
                    evaluatie: evalKey,
                    result: grade,
                    subject: subject
                };
                database.ref(`resultaten/${studentId}`).push(resultaat);
            }
        }
    }

    form.reset();
}

function createNewEvalForm() {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/rubrics.json");
    request.addEventListener("load", rubricsLoaded);
    request.send();
}

function evalChangeStudent(offset) {
    let currentIndex = parseInt(document.querySelector("#evalStudentSelection").selectedIndex, 10);
    let max = document.querySelectorAll("#evalStudentSelection>option").length;
    let newIndex = Math.min(max, Math.max(0, currentIndex + offset));
    document.querySelector("#evalStudentSelection").selectedIndex = newIndex;

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
                let studentId = snapshot.key;
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

                evalChangeStudent(0);
            });
        });
}

function createUserManagementForms() {
    let database = firebase.database();
    let managedUsersref = database.ref(`users`).orderByChild("klas");

    managedUsersref.once('value')
        .then(snapshot => {
            snapshot.forEach(snapshot => {
                let studentId = snapshot.key;

                let studentData = snapshot.val();
                let studentName = studentData.naam;
                let studentKlas = studentData.klas;
                let studentUsername = studentData.username;
                let studentUrl = studentData.url;
                let studentPassword = studentData.password;

                let tmpl = tmpl_managementForm_student(studentId, studentName, studentKlas, studentUsername, studentPassword, studentUrl);
                document.querySelector("#student-management-forms").innerHTML += tmpl;
            });
            document.querySelectorAll(".student-management-form").forEach(form => form.addEventListener("submit", manageStudent));
        });
}

function manageStudent(e) {
    e.preventDefault();
    let form = e.submitter.parentElement;

    let studentId = form.elements["studentId"].value;
    let studentName = form.elements["studentNaam"].value;
    let studentKlas = form.elements["studentKlas"].value;
    let studentUsername = form.elements["studentUsername"].value;
    let studentUrl = form.elements["studentUrl"].value;
    let studentPassword = form.elements["studentPassword"].value;

    let database = firebase.database();
    database.ref(`users/${studentId}/klas`).set(studentKlas);
    database.ref(`users/${studentId}/naam`).set(studentName);
    database.ref(`users/${studentId}/username`).set(studentUsername);
    database.ref(`users/${studentId}/password`).set(studentPassword);
    database.ref(`users/${studentId}/url`).set(studentUrl);
}

function createRegistrationApprovalForms() {

    let database = firebase.database();
    let newUsersRef = database.ref(`newUsers`);


    newUsersRef.once('value')
        .then(snapshot => {
            snapshot.forEach(snapshot => {
                let studentId = snapshot.key;
                let studentEmail = snapshot.val().email;

                let studentName = "tbt";
                let studentKlas = "tbt";
                let studentUsername = "tbt";
                let studentUrl = "tbt";
                let studentPassword = "tbt";

                let tmpl = tmpl_registrationApprovalForm(studentId, studentEmail, studentName, studentKlas, studentUsername, studentPassword, studentUrl);
                document.querySelector("#registration-approval-forms").innerHTML += tmpl;
            });
            document.querySelectorAll(".registration-approval-form").forEach(form => form.addEventListener("submit", approveRegistration));
        });
}

function approveRegistration(e) {
    e.preventDefault();
    let form = e.submitter.parentElement;

    let studentId = form.elements["studentId"].value;
    let studentName = form.elements["studentNaam"].value;
    let studentKlas = form.elements["studentKlas"].value;
    let studentUsername = form.elements["studentUsername"].value;
    let studentUrl = form.elements["studentUrl"].value;
    let studentPassword = form.elements["studentPassword"].value;

    let database = firebase.database();
    database.ref(`users/${studentId}/klas`).set(studentKlas);
    database.ref(`users/${studentId}/naam`).set(studentName);
    database.ref(`users/${studentId}/username`).set(studentUsername);
    database.ref(`users/${studentId}/password`).set(studentPassword);
    database.ref(`users/${studentId}/url`).set(studentUrl);
}