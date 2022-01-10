function FillInTimeline() {
    document.documentElement.addEventListener("evaluationsCollectionFinished", e => {
        let evaluations = e.detail;

        for ([evaluationId, evaluationData] of Object.entries(evaluations)) {
            if (!evaluationData.results || Object.keys(evaluationData.results).length === 0) {
                continue;
            }
            let tmpl = tmpl_timelineItem(evaluationId, evaluationData.date, evaluationData.name);
            document.querySelector("#timeline").innerHTML = tmpl + document.querySelector("#timeline").innerHTML;

            for ([resultId, resultData] of Object.entries(evaluationData.results)) {
                let tmpl = tmpl_timelineResult(resultData.result, resultData.subject, resultData.commentaar);
                document.querySelector(`#timeline-evaluation-${evaluationId}>.results`).parentElement.style.display = "";
                document.querySelector(`#timeline-evaluation-${evaluationId}>.results`).innerHTML += tmpl;
            }
        }
    });
    CollectAllEvaluations();
}