function tmpl_timelineItem(id, date, name) {
    return `
    <h2 id="eval-${id}">
        <span>${date}</span>
        ${name}
    </h2>
    <div class="courseResults" id="${id}">
    </div>
    `;
}

function tmpl_timelineResult(result, subject, comment) {
    return `
    <div class="subjectResultCard-v2" id="${toCssSafeId(subject)}">
    <div class="result" title="${subject}">
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

function tmpl_rapportCategory(id, category) {
    return `
        <div id="${id}" class="gradeCategory">
            <div>
                <h3>${category}</h3>
                <h4>Resultaat</h4>
                <h4>Theorie</h4>
            </div>
            <div class="grades">
            </div>
        </div>
    `;
}

function tmpl_rapportSubject(id, subject, progress, progressTotal) {
    return `
        <div id="${id}" data-results="" data-resultdates="" style="opacity: 0.2;">
            <h3>${subject}</h3>
            <ul>
                <li class="A">A</li>
                <li class="B">B</li>
                <li class="C">C</li>
                <li class="D">D</li>
                <li class="E">E</li>
            </ul>
            <div class="progressbar-bg">
                <div class="progressbar-progress" style="width: 0%"></div>
                <p class="progressbar-label">${progress} / ${progressTotal}</p>
            </div>
        </div>
    `;
}