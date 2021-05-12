function tmpl_timelineItem(id, date, name) {
    return `
    <div class="timelineItem">
        <div class="marker">
            <span class="material-icons-outlined">
                schedule
            </span>
        </div>
        <h2 id="eval-${id}">
            <span>${date}</span>
            ${name}
        </h2>
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