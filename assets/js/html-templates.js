function tmpl_timelineItem(id, date, name) {
    return `
    <div class="timelineItem">
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