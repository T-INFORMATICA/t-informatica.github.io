function tmpl_timelineItem(id, date, name) {
    return `
    <div class="timelineItem" style="display: none">
        <div class="marker">
            <span class="material-icons-outlined">
                schedule
            </span>
        </div>
        <span class="subtitle">${date}</span>
        <h2 class="title" id="eval-${id}">${name}</h2>
        <div class="courseResults" id="${id}">
        </div>
    </div>
    `;
}

function tmpl_timelineResult(result, subject, comment) {
    return `
    <div class="subjectResultCard-v2 timelineItem-result" id="${toCssSafeId(subject)}">
    <div class="result result${result}" title="${subject}">
        <div class="grade">
            ${result}
        </div>
        <div class="subject">
            <span class="subtitle">${getResultLevelText(result)}</span>
            <h3 class="title" id="title-${toCssSafeId(subject)}">${subject}</h3>
        </div>
    </div>
    <div class="comments">
        ${comment}
    </div>
</div>
    `;
}

function tmpl_gradeForm_studentSection(studentId, studentName) {
    return `
        <div id="gradeform-${studentId}" class="evalStudentSection" style="display: none;">
            <h2>${studentName}</h2>
        </div>
    `;
}

function tmpl_gradeForm_subject(studentId, subjectId, subject) {
    return `
        <label for="students-${studentId}-${subjectId}-evalShowGrades-${subjectId}">
            <h3 id="grades-${subjectId}">${subject}</h3>
        </label>
        <input type="checkbox" id="students-${studentId}-${subjectId}-evalShowGrades-${subjectId}" class="evalShowGrades">
        <div class="gradeform-subject" id="students-${studentId}-${subjectId}">
        </div>
    `;
}

function tmpl_gradeForm_gradeOption(studentId, subjectId, grade, comment) {
    return `
        <input type="radio" value="${grade}" name="students[${studentId}][${subjectId}]" id="students-${studentId}-${subjectId}-grade-${grade}">
        <label for="students-${studentId}-${subjectId}-grade-${grade}" class="gradeform-subject-option">
            <h4 class="gradeform-subject-option-grade">${grade}</h4>
            <p contenteditable="true" class="gradeform-subject-option-comment">${comment}</p>
        </label>
    `;
}

function tmpl_managementForm_student(studentId, studentName, klas, username, password, url) {
    return `
        <input type="checkbox" id="student-${studentId}-collapse" class="student-management-collapse">
        <label for="student-${studentId}-collapse">${studentName}</label>
        <form class="student-management-form">
            <input type="hidden" name="studentId" value="${studentId}">
            <label for="student-${studentId}-username">username</label><input type="text" name="studentUsername" id="student-${studentId}-username" value="${username}">
            <label for="student-${studentId}-password">password</label><input type="text" name="studentPassword" id="student-${studentId}-password" value="${password}">
            <label for="student-${studentId}-klas">klas</label><input type="text" name="studentKlas" id="student-${studentId}-klas" value="${klas}">
            <label for="student-${studentId}-url">url</label><input type="text" name="studentUrl" id="student-${studentId}-url" value="${url}">
            <label for="student-${studentId}-naam">naam</label><input type="text" name="studentNaam" id="student-${studentId}-naam" value="${studentName}">
            <span></span>
            <div class="student-management-buttons">
                <button class="material-icons" type="submit" name="studentSubmit" value="save">save</button>
                <button class="material-icons" type="submit" name="studentSubmit" value="remove">person_remove</button>
            </div>
        </form>
    `;
}

function tmpl_registrationApprovalForm(studentId, studentEmail, studentName, klas, username, password, url) {
    return `
        <input type="checkbox" id="registration-${studentId}-collapse" class="student-management-collapse">
        <label for="registration-${studentId}-collapse">${studentEmail}</label>
        <form class="student-management-form">
            <input type="hidden" name="studentId" value="${studentId}">
            <label for="student-${studentId}-username">username</label><input type="text" name="studentUsername" id="student-${studentId}-username" value="${username}">
            <label for="student-${studentId}-password">password</label><input type="text" name="studentPassword" id="student-${studentId}-password" value="${password}">
            <label for="student-${studentId}-klas">klas</label><input type="text" name="studentKlas" id="student-${studentId}-klas" value="${klas}">
            <label for="student-${studentId}-url">url</label><input type="text" name="studentUrl" id="student-${studentId}-url" value="${url}">
            <label for="student-${studentId}-naam">naam</label><input type="text" name="studentNaam" id="student-${studentId}-naam" value="${studentName}">
            <span></span>
            <div class="student-management-buttons">
                <button type="submit" class="material-icons" name="studentSubmit" value="save">person_add</button>
            </div>
        </form>
    `;
}