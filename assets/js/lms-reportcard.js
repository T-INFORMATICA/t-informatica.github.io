google.charts.load('current', {'packages':['line', 'corechart']});

function FillInReportcard() {
    document.documentElement.addEventListener("termsAndDefinitionsCollectionFinished", e => {
        const allTerms = e.detail;
        document.documentElement.addEventListener("knownTermsCollectionFinished", e => {
            const knownTerms = e.detail;

            for (const [subject, words] of Object.entries(allTerms)) {
                let score = getKnownWordsForSubjectOnDate(knownTerms, subject, new Date());

                let subjectId = toCssSafeId(subject);
                let subjectEl = document.querySelector(`#${subjectId}`);
                subjectEl.querySelector(".reportcard-subject__knownTerms").innerHTML = score;
            }

            GenerateTheoryPracticeGraph(allTerms, knownTerms);
        });
        CollectKnownTerms();
    });
    CollectTermsAndDefinitions();


    document.documentElement.addEventListener("evaluationsCollectionFinished", e => {
        let evaluations = e.detail;
        // sort the evaluations by evaluation date
        evaluations = Object.values(evaluations).sort((a, b) => new Date(a.date) - new Date(b.date));

        // convert the evaluations (ordered by date) to results (ordered by date) by subjects
        subjects = {};
        evaluations.forEach(eval => {
            for (const [resultId, res] of Object.entries(eval.results)) {
                // create an entry for the subject if it doesn't exist yet
                subjects[res.subject] = res.subject in subjects ? subjects[res.subject] : [];
                // add an evaluation to the subject
                subjects[res.subject].push({
                    date: new Date(eval.date),
                    result: res.result
                });
            };
        });

        // calculate the current result for each subject and show it on the page
        for (const [subject, results] of Object.entries(subjects)) {
            let result = calculateResult(results.map(x => x.result));

            let subjectId = toCssSafeId(subject);
            subjectId = subjectId.replace(/[!\d\s\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, ''); // HACK: currently, subjects are saved with a digit if there are multiple possible evals.

            let subjectEl = document.querySelector(`#${subjectId}`);
            subjectEl.classList.remove("resultUnknown");

            let gradeEl = subjectEl.querySelector(`.reportcard-subject__grade`);
            gradeEl.classList.remove("resultA");
            gradeEl.classList.remove("resultB");
            gradeEl.classList.remove("resultC");
            gradeEl.classList.remove("resultD");
            gradeEl.classList.remove("resultE");
            gradeEl.classList.add(`result${result}`);
            gradeEl.innerHTML = result;

            subjectEl.querySelector(`.reportcard-subject__levelText`).innerHTML = getResultLevelText(result);

        }
    });
    CollectAllEvaluations();
}

function GenerateTheoryPracticeGraph(allTerms, knownTerms) {
    let columnNames = ["date"];
    for (const [subject, words] of Object.entries(allTerms)) {
        columnNames.push(subject);
    }
    let scoresTable = [columnNames];

    let today = new Date();
    let schoolyear = today.getMonth() < 8 ? today.getFullYear() - 1 : today.getFullYear(); // the year in which sep 1st is for this schoolyear
    let date_dataPoint = new Date(schoolyear, 8, 1, 0, 0, 0, 0); // start at september 1st of this schoolyear

    while (date_dataPoint < today) {
        date_dataPoint.setDate(date_dataPoint.getDate() + 14);
        let row = [new Date(date_dataPoint.getTime())];
        for (const [subject, words] of Object.entries(allTerms)) {
            let score = getKnownWordsForSubjectOnDate(knownTerms, subject, new Date(date_dataPoint.getTime()));
            row.push(score);
        }
        scoresTable.push(row);
    }

    let data = google.visualization.arrayToDataTable(scoresTable);

    let chartEl = document.getElementById('myChart');

    var options = {
        chart: {
            title: 'Wanneer heb ik de theorie geoefend?',
        },
        width: "100%",
        height: "100%"
    };

    var chart = new google.charts.Line(chartEl);

    chart.draw(data, google.charts.Line.convertOptions(options));
}

function getKnownWordsForSubjectOnDate(knownSubjectTerms, subject, date) {
    let oldDate = new Date(date.getTime());
    oldDate.setDate(date.getDate() - 14);

    if (!knownSubjectTerms || !knownSubjectTerms[subject]) {
        return 0;
    }
    let knownTerms = knownSubjectTerms[subject];

    let totalScore = 0; // the score the student got on the current subject
    for (const [word, learningData] of Object.entries(knownTerms)) {
        let filteredLearningData = Object.keys(learningData)
            .filter(wordDate => oldDate <= (new Date(parseInt(wordDate))) && date >= (new Date(parseInt(wordDate))))
            .reduce((obj, key) => {
                obj[key] = learningData[key];
                return obj;
            }, {});

        let sum = Object.values(filteredLearningData).reduce((a, b) => a + b, 0);
        let amount = parseFloat(Object.entries(filteredLearningData).length);
        let avg = amount ? Math.round(10 * sum / amount) / 10.0 : 0; // round it to 1 decimal

        totalScore += avg < .9 ? 0 : 1;
    }
    return totalScore;
}