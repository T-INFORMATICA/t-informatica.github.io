function documentReady(callback) {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

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

    let userSelectEl = document.querySelector("#userSelect>select");
    if (userSelectEl) {
        userSelectEl.value = userid;
    }
}

function toCssSafeId(text) {
    text = text.replace(/[!\s\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
    return text.toLowerCase();
}

function getResultLevelText(result) {
    switch (result) {
        case 'A': return "Expert";
        case 'B': return "Kenner";
        case 'C': return "Gevorderd";
        case 'D': return "Beginner";
        case 'E': return "Leek";
    }
    return "";
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
        .then(() => selectUser())
        .catch(error => console.log(`Not logged in as Admin. ${error}`));
}

function addFirebaseUserdataToMenu(userid, userdata) {
    let userselect = document.querySelector('#userSelect>select');
    if (firebase.auth().currentUser.uid === userid || userselect == null)
        return;

    tmpl = `<option value="${userid}">${userdata.naam} - ${userdata.klas}</option>`;
    document.querySelector('#userSelect>select').innerHTML += tmpl;
}

function addUserEvalsToPage() {
    let userid = getUserId();
    let database = firebase.database();
    let evalsref = database.ref(`evaluaties`).orderByChild("date");
    let resultsref = database.ref(`resultaten/${userid}`);

    evalsref
        .once('value')
        .then(snapshot => snapshot.forEach(evalsnapshot => {
            addEvalToTimeline(evalsnapshot.key, evalsnapshot.val());
            resultsref
                .once('value')
                .then(snapshot => {
                    snapshot.forEach(resultsnapshot => {
                        if (resultsnapshot.val().evaluatie === evalsnapshot.key) {
                            addEvalResultToTimeline(evalsnapshot.key, resultsnapshot.val());
                        }
                    });
                });
        }));
}

function addEvalToTimeline(evalid, evaldata) {
    let tmpl = tmpl_timelineItem(evalid, evaldata.date, evaldata.name);
    document.querySelector("#evaluatiesTimeline").innerHTML = tmpl + document.querySelector("#evaluatiesTimeline").innerHTML;
}

function addEvalResultToTimeline(evalid, resultdata) {
    let tmpl = tmpl_timelineResult(resultdata.result, resultdata.subject, resultdata.commentaar);
    document.querySelector(`#${evalid}`).parentElement.style.display = "";
    document.querySelector(`#${evalid}`).innerHTML += tmpl;
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

function addCounterForKnownTermsToPage() {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/definitionsCategories.json");
    request.addEventListener("load", definitionsLoaded);
    request.send();
}

function definitionsLoaded(e) {
    let definitions = JSON.parse(e.currentTarget.response);

    let database = firebase.database();
    let termsref = database.ref(`knownTerms/${getUserId()}`);
    termsref
        .once('value')
        .then(snapshot => {
            let knownSubjectWords = snapshot.val();

            for (const [subject, words] of Object.entries(definitions)) {
                let knownWords = knownSubjectWords[subject];
                let wordsLearned = 0;

                for (const index in definitions[subject]) {
                    let termdef = definitions[subject][index];
                    let term = termdef["term"];
                    if (knownWords && term in knownWords) {
                        let timestamps = knownWords[term];

                        // filter out all entries that were posted more than 2 weeks (14 days) ago
                        let firstDate = new Date();
                        firstDate.setDate(firstDate.getDate() - 14);
                        const filteredTimestamps = Object.keys(timestamps)
                            .filter(key => firstDate <= (new Date(key)))
                            .reduce((obj, key) => {
                                obj[key] = timestamps[key];
                                return obj;
                            }, {});

                        let sum = Object.values(filteredTimestamps).reduce((a, b) => a + b, 0);
                        let amount = parseFloat(Object.entries(filteredTimestamps).length);
                        let avg = Math.round(10 * sum / amount) / 10.0; // round it to 1 decimal

                        // Only count words that are known for 90% or more
                        wordsLearned += avg < .9 ? 0 : 1;
                    }
                }

                if (wordsLearned <= 0) {
                    return;
                }
                console.log(subject);
                console.log(subjectId);
                console.log(subjectEl);
                console.log(wordsLearned);

                let subjectId = toCssSafeId(subject);
                let subjectEl = document.querySelector(`#${subjectId}`);
                if (subjectEl.querySelector(".numWordsLearned") == null) {
                    return;
                }
                subjectEl.querySelector(".numWordsLearned").innerHTML = wordsLearned;
                let max = parseFloat(subjectEl.querySelector(".maxWordsLearned").innerHTML);
                let progress = (wordsLearned / max) * 100;
                subjectEl.querySelector(".progressbar-progress").style.width = `${progress}%`;
            }
        });
}

function addResultsToPage() {
    let userid = getUserId();

    let database = firebase.database();
    let resultsref = database.ref(`resultaten/${userid}`);
    let evalsref = database.ref(`evaluaties`).orderByChild("date");

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

    let resultEl = subjectEl.querySelector(`.result`);
    resultEl.classList.add(`result${result}`);
    resultEl.classList.remove("unknownGrade");

    subjectEl.querySelector(`.subtitle`).innerHTML = getResultLevelText(result);

    let letterEl = subjectEl.querySelector(`.grade`);
    letterEl.innerHTML = result;

    let commentsEl = subjectEl.querySelector('.comments');
    commentsEl.innerHTML = "";
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
