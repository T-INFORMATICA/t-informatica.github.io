function changeUser() {
    let userid = document.querySelector("#userSelect>select").value;

    let url = `?userid=${userid}`;
    window.location.replace(url);
}

function selectUser() {
    let userid = new URLSearchParams(window.location.search).get('userid');
    userid = userid === null ? _user.uid : userid;

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

function addUsersToMenu(userid) {
    let database = firebase.database();
    // let userref = database.ref(`users/${userid}`);
    let managedUsersref = database.ref(`users`);

    managedUsersref.once('value')
        .then(snapshot => {
            document.querySelector('#userSelect').style.display = "";
            snapshot.forEach(snapshot => {
                addFirebaseUserdataToMenu(snapshot.key, snapshot.val())
            });
        })
        .then(() => selectUser());
    // .catch(err => {
    //     userref.once('value')
    //         .then(snapshot => {
    //             addFirebaseUserdataToMenu(snapshot.key, snapshot.val())
    //         })
    //         .catch(err => console.log(err));
    // });
}

function addFirebaseUserdataToMenu(userid, userdata) {
    if (firebase.auth().currentUser.uid === userid)
        return;
    // let tmpl = `<a href="?userid=${userid}">${userdata.naam}</a>`;
    // document.querySelector('#leftMenu>hr:last-of-type').insertAdjacentHTML('afterend', tmpl);

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
    let tmpl = `
        <details class="timeline-item" id="${evalid}" data-date="${evaldata.date}" open>
            <summary>${evaldata.name}</summary>
            <ul>
            </ul>
        </details>`;
    document.querySelector("#evaluatiesTimeline").innerHTML = tmpl + document.querySelector("#evaluatiesTimeline").innerHTML;
}

function addEvalResultToTimeline(evalid, resultdata) {
    let tmpl = `
        <li>
            <b class="result">${resultdata.result}</b>
            ${resultdata.subject}<br>
            ${resultdata.commentaar}
        </li>
    `;
    document.querySelector(`#${evalid}>ul`).innerHTML += tmpl;
}

function addUserdataToProfileTable(userid) {
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

function addResultsToPage2() {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/subjectCategories.json");
    request.addEventListener("load", resultCategoriesLoaded);
    request.send();
}

function resultCategoriesLoaded(e) {
    let response = JSON.parse(e.currentTarget.response);

    for (const [subject, category] of Object.entries(response)) {
        console.log(`${subject}: ${category}`);
        addCategoryElement(category);
        addSubjectElementToCategoryElement(subject, category);
    }

    let userid = new URLSearchParams(window.location.search).get('userid');
    userid = userid === null ? _user.uid : userid;

    let database = firebase.database();
    let resultsref = database.ref(`resultaten/${userid}`);
    let evalsref = database.ref(`evaluaties/${userid}`).orderByChild("date");

    let results;
    let evals;

    let subjectResults = {};

    resultsref.once('value')
        .then(snapshot => results = snapshot.toJSON())
        .then(() => {
            return evalsref.once('value')
                .then(snapshot => evals = snapshot.toJSON())
        })
        .then(() => {
            // add the results to the evaluations
            for (const [evalName, evalData] of Object.entries(evals)) {
                evalData["results"] = [];
                for (const [resultId, resultData] of Object.entries(results)) {
                    if (resultData.evaluatie == evalName) {
                        evalData.results.push(resultData);
                        delete results[resultId];
                    }
                }
            }

            console.log(Object.values(evals));
            // convert the evaluations to
        });
    return;

    resultsref.once('value').then(resultssnapshot => {
        evalsref.once('value').then(evalssnapshot => {
            let subjectResults = {};

            resultssnapshot.forEach(resultsnapshot => {
                let result = resultsnapshot.toJSON();
                evalssnapshot.forEach(evalsnapshot => {
                    if (resultsnapshot.val().evaluatie === evalsnapshot.key) {
                        if (result.subject in subjectResults === false) {
                            subjectResults[result.subject] = [];
                        }
                        subjectResult = {
                            date: new Date(evalsnapshot.val().date),
                            result: result.result
                        };
                        subjectResults[result.subject].push(subjectResult);
                        subjectResults[result.subject].sort((a, b) => a.date - b.date);
                    }
                });
            });
            console.log(subjectResults.length);
            for (subject in subjectResults) {
                let results = subjectResults[subject].map(x => x.result);
                let result = calculateResult(results);
                showResultInSubjectElement(subject, result);
            }
        });
    });
}

function addResultsToPage(userid) {
    return;
    let database = firebase.database();
    let userref = database.ref(`users/${userid}`);
    let evalsref = database.ref(`evaluaties/${userid}`).orderByChild("date");
    let resultsref = database.ref(`resultaten/${userid}`);
    let categoriesref = database.ref(`subjectCategories`);


    categoriesref.once('value')
        .then(categoriessnapshot => {
            categoriessnapshot.forEach(
                categorysnapshot => {
                    let subject = categorysnapshot.key;
                    let category = categorysnapshot.val();

                    addCategoryElement(category);
                    addSubjectElementToCategoryElement(subject, category);
                }
            );

            resultsref.once('value').then(resultssnapshot => {
                evalsref.once('value').then(evalssnapshot => {
                    let subjectResults = {};

                    resultssnapshot.forEach(resultsnapshot => {
                        let result = resultsnapshot.toJSON();
                        evalssnapshot.forEach(evalsnapshot => {
                            if (resultsnapshot.val().evaluatie === evalsnapshot.key) {
                                if (result.subject in subjectResults === false) {
                                    subjectResults[result.subject] = [];
                                }
                                subjectResult = {
                                    date: new Date(evalsnapshot.val().date),
                                    result: result.result
                                };
                                subjectResults[result.subject].push(subjectResult);
                                subjectResults[result.subject].sort((a, b) => a.date - b.date);
                            }
                        });
                    });

                    for (subject in subjectResults) {
                        let results = subjectResults[subject].map(x => x.result);
                        let result = calculateResult(results);
                        showResultInSubjectElement(subject, result);
                    }
                });
            });
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
        let tmpl = `
            <div id="${categoryId}" class="gradeCategory">
                <div>
                    <h3>${category}</h3>
                    <h4>Resultaat</h4>
                    <h4>Theorie</h4>
                </div>
                <div class="grades">
                </div>
            </div>
        `;
        document.querySelector("main").innerHTML += tmpl;
    }
}

function addSubjectElementToCategoryElement(subject, category) {
    let categoryId = toCssSafeId(category);
    let subjectId = toCssSafeId(subject);

    categoryEl = document.querySelector(`#${categoryId}`);
    // categoryEl.style.display = "none";

    let tmpl = `
    <div id="${subjectId}" data-results="" data-resultdates="" style="opacity: 0.2;">
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
            <p class="progressbar-label">0 / 0</p>
        </div>
    </div>
    `;
    categoryEl.querySelector(".grades").innerHTML += tmpl;
}
