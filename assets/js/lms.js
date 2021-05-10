function changeUser() {
    let userid = document.querySelector("#userSelect>select").value;

    let url = `?userid=${userid}`;
    window.location.replace(url);
}

function getUserId() {
    let userid = new URLSearchParams(window.location.search).get('userid');
    userid = userid === null ? _user.uid : userid;
    return userid;
}

function selectUser() {
    let userid = getUserId();

    document.querySelector("#userSelect>select").value = userid;
}

function toCssSafeId(text) {
    text = text.replace(/[!\s\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
    return text;
}

function calculateResult(resultsArr) {
    let evalProgress = {
        "A": {
            "A": 0, "B": -0.5, "C": -1.5, "D": -1.5, "E": -1.5
        },
        "B": {
            "A": 1, "B": 0, "C": -1, "D": -1.5, "E": -1.5
        },
        "C": {
            "A": 1.5, "B": 0.5, "C": 0, "D": -1, "E": -1.5
        },
        "D": {
            "A": 2, "B": 1, "C": 0.5, "D": 0, "E": -1.5
        },
        "E": {
            "A": 2, "B": 1.5, "C": 1, "D": 0, "E": 0
        },
    }

    // convert letter to number
    let letters = ["E", "D", "C", "B", "A"];
    let result = resultsArr[0];
    let resultNumber = letters.indexOf(result) - 2; // -2 to offset the index between -2 and 2, instead of 0 and 5

    for (let i = 1; i < resultsArr.length; ++i) {

        let resultLetter = letters[Math.round(resultNumber + 2)];
        let behaaldeLetter = resultsArr[i];
        let resultDelta = evalProgress[resultLetter][behaaldeLetter];

        resultNumber += resultDelta;
    }

    let resultLetter = letters[Math.round(resultNumber + 2)];
    return resultLetter;
}

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

function addUsersToMenu() {
    let database = firebase.database();
    let managedUsersref = database.ref(`users`);

    managedUsersref.once('value')
        .then(snapshot => {
            // document.querySelector('#userSelect').style.display = "";
            document.querySelectorAll('.forAdmin').forEach(el => el.style.display = "");
            snapshot.forEach(snapshot => {
                addFirebaseUserdataToMenu(snapshot.key, snapshot.val());
            });
        })
        .then(() => selectUser());
}

function addFirebaseUserdataToMenu(userid, userdata) {
    if (firebase.auth().currentUser.uid === userid)
        return;

    tmpl = `<option value="${userid}">${userdata.naam}</option>`;
    document.querySelector('#userSelect>select').innerHTML += tmpl;
}

function addUserEvalsToPage(userid) {
    let database = firebase.database();
    let evalsref = database.ref(`evaluaties/${userid}`).orderByChild("date");
    let resultsref = database.ref(`resultaten/${userid}`);

    evalsref
        .once('value')
        .then(snapshot => snapshot.forEach(evalsnapshot => {
            addEvalToTimeline(evalsnapshot.key, evalsnapshot.val());
            resultsref
                .once('value')
                .then(snapshot => snapshot.forEach(resultsnapshot => {
                    if (resultsnapshot.val().evaluatie === evalsnapshot.key) {
                        addEvalResultToTimeline(evalsnapshot.key, resultsnapshot.val());
                    }
                }));
        }));
}

function addEvalToTimeline(evalid, evaldata) {
    let tmpl = tmpl_timelineItem(evalid, evaldata.date, evaldata.name);
    document.querySelector("#evaluatiesTimeline").innerHTML = tmpl + document.querySelector("#evaluatiesTimeline").innerHTML;
}

function addEvalResultToTimeline(evalid, resultdata) {
    let tmpl = tmpl_timelineResult(resultdata.result, resultdata.subject, resultdata.commentaar);
    document.querySelector(`#${evalid}>ul`).innerHTML += tmpl;
}

function addUserdataToProfileTable() {
    let userid = getUserId();
    let database = firebase.database();
    let userref = database.ref(`users/${userid}`);

    userref.once('value').then(snapshot =>
        snapshot.forEach(userdata => {
            switch (userdata.key) {
                case "username":
                    document.querySelector('#profileUsername').innerHTML = userdata.val();
                    break;
                case "naam":
                    document.querySelector('#profileName').innerHTML = userdata.val();
                    break;
                case "password":
                    document.querySelector('#profilePassword').innerHTML = userdata.val();
                    break;
                case "url":
                    document.querySelector('#profileUrl').innerHTML = userdata.val();
                    break;
            }
        })
    );
}

function addResultsToPage() {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/subjectCategories.json");
    request.addEventListener("load", resultCategoriesLoaded);
    request.send();
}

function resultCategoriesLoaded(e) {
    let response = JSON.parse(e.currentTarget.response);

    for (const [subject, category] of Object.entries(response)) {
        addCategoryElement(category);
        addSubjectElementToCategoryElement(subject, category);
    }

    let userid = getUserId();

    let database = firebase.database();
    let resultsref = database.ref(`resultaten/${userid}`);
    let evalsref = database.ref(`evaluaties/${userid}`).orderByChild("date");

    let results;
    let evals;

    // 1: load the results
    resultsref.once('value')
        .then(snapshot => results = snapshot.toJSON())
        // 2: load the evaluations
        .then(() => {
            return evalsref.once('value')
                .then(snapshot => evals = snapshot.toJSON())
        })
        // 3: combine results and evaluations
        .then(() => {
            // add the results to the evaluations
            for (const [evalName, evalData] of Object.entries(evals)) {
                evalData["results"] = [];
                evalData["name"] = evalName;
                for (const [resultId, resultData] of Object.entries(results)) {
                    if (resultData.evaluatie == evalName) {
                        evalData.results.push(resultData);
                        delete results[resultId];
                    }
                }
            }

            // sort the evaluations by evaluation date
            evals = Object.values(evals).sort((a, b) => new Date(a.date) - new Date(b.date));

            // convert the evaluations (ordered by date) to results (ordered by date) by subjects
            subjects = {};
            evals.forEach(eval => {
                eval.results.forEach(res => {
                    // create an entry for the subject if it doesn't exist yet
                    subjects[res.subject] = res.subject in subjects ? subjects[res.subject] : [];
                    // add an evaluation to the subject
                    subjects[res.subject].push({
                        date: new Date(eval.date),
                        result: res.result
                    });
                });
            });

            // calculate the current result for each subject and show it on the page
            for (const [sub, results] of Object.entries(subjects)) {
                let result = calculateResult(results.map(x => x.result));
                showResultInSubjectElement(sub, result);
            }
        });
}

function showResultInSubjectElement(subject, result) {
    let subjectId = toCssSafeId(subject);

    let subjectEl = document.querySelector(`#${subjectId}`);
    subjectEl.style.display = "";
    subjectEl.parentElement.parentElement.style.display = "";
    subjectEl.style.opacity = "1";

    let letterEl = subjectEl.querySelector(`.${result}`);
    letterEl.className += " selected";
}

function addCategoryElement(category) {
    let categoryId = toCssSafeId(category);
    let categoryEl = document.querySelector(`#${categoryId}`);

    if (categoryEl === null) {
        let tmpl = tmpl_rapportCategory(categoryId, category);
        document.querySelector("main").innerHTML += tmpl;
    }
}

function addSubjectElementToCategoryElement(subject, category) {
    let categoryId = toCssSafeId(category);
    let subjectId = toCssSafeId(subject);

    categoryEl = document.querySelector(`#${categoryId}`);
    categoryEl.style.display = "none";

    let tmpl = tmpl_rapportSubject(subjectId, subject, 0, 0);
    categoryEl.querySelector(".grades").innerHTML += tmpl;
}
