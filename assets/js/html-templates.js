function tmpl_timelineItem(id, date, name) {
    return `
<div class="timeline-evaluation" id="timeline-evaluation-${id}">
    <header>
        <h2>${name}</h2>
        <time datetime="${date}">${date}</time>
    </header>
    <div class="results"></div>
</div>
    `;
}

function tmpl_timelineResult(result, subject, comment) {
    return `
<table class="timeline-evaluation__resultsTable">
    <colgroup>
        <col>
        <col>
    </colgroup>
    <tbody id="${ toCssSafeId(subject) }" class="timeline-subject">
    <tr>
        <td rowspan="2" class="timeline-subject__grade result${result}">
            ${result}
        </td>
        <td class="timeline-subject__title">
            <h3>${subject}</h3>
        </td>
    </tr>
    <tr>
        <td class="timeline-subject__levelText">
            ${getResultLevelText(result)}
        </td>
    </tr>
    <tr>
        <td colspan="2" class="timeline-subject__comment">
        ${comment}
        </td>
    </tr>
</tbody>
</table>
    `;
}


function tmpl_evalForm_subjectContainer(subjectId) {
    return `
    <div class="subjectContainer" id="subjectContainer-${subjectId}">
        <label for="subjectCollapsible-${subjectId}">
            <h3 class="subjectTitle" id="subjectTitle-${subjectId}">
                ${subjectId}
                <span class="material-icons-outlined">expand_more</span>
            </h3>
        </label>
        <input type="checkbox" id="subjectCollapsible-${subjectId}" class="collapse-trigger">
        <div class="subjectStudentContainers">
            <!-- INSERT STUDENT CONTAINERS HERE -->
        </div>
    </div>
    `;
}

function tmpl_evalForm_subjectStudentContainer(subjectId, studentId) {
    return `
    <div class="subjectStudentContainer studentContainer-${studentId}" id="${subjectId}-${studentId}" style="display: none">
        <!-- INSERT GRADES HERE -->
    </div>
    `;
}

function tmpl_evalForm_subjectStudentGrade(subjectId, studentId, grade, comment) {
    return `
        <input type="radio" value="${grade}" name="students[${subjectId}][${studentId}]" id="${subjectId}-${studentId}-${grade}">
        <label for="${subjectId}-${studentId}-${grade}" class="subjectStudentGrade">
            <h4 class="grade">${grade}</h4>
            <p contenteditable="true" class="comment">${comment}</p>
        </label>
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
        <div class="gradeform-subject | elevated-low">
            <label for="students-${studentId}-${subjectId}-evalShowGrades-${subjectId}">
                <h3 id="grades-${subjectId}">${subject} <span class="material-icons-outlined">expand_more</span></h3>
            </label>
            <input type="checkbox" id="students-${studentId}-${subjectId}-evalShowGrades-${subjectId}" data-subject="${subjectId}" class="evalShowGrades">
            <div class="gradeform-subject-student" id="students-${studentId}-${subjectId}">
            </div>
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
            <div class="normal-actions">
                    <button class="material-icons" type="submit" name="studentSubmit" value="save">save</button>
                </div>
                <div class="dangerous-actions">
                    <button class="material-icons" type="button" name="studentSubmit" value="remove">person_remove</button>
                </div>
            </div>
        </form>
    `;
}

function tmpl_registrationApprovalForm(studentId, studentEmail, studentName, klas, username, password, url) {
    return `
        <input type="checkbox" id="registration-${studentId}-collapse" class="student-management-collapse">
        <label for="registration-${studentId}-collapse">${studentEmail}</label>
        <form class="registration-approval-form">
            <input type="hidden" name="studentId" value="${studentId}">
            <label for="student-${studentId}-username">username</label><input type="text" name="studentUsername" id="student-${studentId}-username" value="${username}">
            <label for="student-${studentId}-password">password</label><input type="text" name="studentPassword" id="student-${studentId}-password" value="${password}">
            <label for="student-${studentId}-klas">klas</label><input type="text" name="studentKlas" id="student-${studentId}-klas" value="${klas}">
            <label for="student-${studentId}-url">url</label><input type="text" name="studentUrl" id="student-${studentId}-url" value="${url}">
            <label for="student-${studentId}-naam">naam</label><input type="text" name="studentNaam" id="student-${studentId}-naam" value="${studentName}">
            <span></span>
            <div class="student-management-buttons">
                <div class="normal-actions">
                    <button type="submit" class="material-icons" name="studentSubmit" value="save">person_add</button>
                </div>
                <div class="dangerous-actions">
                    <button type="button" class="material-icons" name="studentSubmit" value="remove">person_remove</button>
                </div>
            </div>
        </form>
    `;
}