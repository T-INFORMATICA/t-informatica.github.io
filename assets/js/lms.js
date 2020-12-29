function toCssSafeId(text) {
    text = text.replace(/[!\s\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
    return text;
}

function calculateResults(resultsArr) {
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
    let userref = database.ref(`users/${userid}`);
    let managedUsersref = database.ref(`users`);

    managedUsersref.once('value')
        .then(snapshot => snapshot.forEach(snapshot => addFirebaseUserdataToMenu(snapshot.key, snapshot.val())))
        .catch(err => {
            userref.once('value')
                .then(snapshot => addFirebaseUserdataToMenu(snapshot.key, snapshot.val()))
                .catch(err => console.log(err));
        });
}

function addFirebaseUserdataToMenu(userid, userdata) {
    if (firebase.auth().currentUser.uid === userid)
        return;
    let tmpl = `<a href="?userid=${userid}">${userdata.naam}</a>`;
    document.querySelector('#leftMenu>hr:last-of-type').insertAdjacentHTML('afterend', tmpl);
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

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////// TODO - REWORK FUNCTION

function addResultsToPage(userid) {
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
                    let results = [];

                    resultssnapshot.forEach(resultsnapshot => {
                        let result = resultsnapshot.toJSON();
                        result["date"] = "";

                        evalssnapshot.forEach(evalsnapshot => {
                            if (resultsnapshot.val().evaluatie === evalsnapshot.key) {
                                result["date"] = new Date(evalsnapshot.val().date);
                                return;
                            }
                        });
                        results.push(result);
                    });

                    results.sort((a, b) => a.date - b.date);

                    let subjectResults = {};
                    categoriessnapshot.forEach(snapshot => subjectResults[snapshot.key] = []);
                    console.log(subjectResults);

                    results.forEach(result => {
                        subjectResults[result.subject].push(result.result);
                    });

                    console.log(results);
                    console.log(subjectResults);
                });
            });
        });
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
    categoryEl.style.display = "none";

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

function createResults(userId) {
    let db = firebase.database().ref();

    let evaluaties = db.child(`evaluaties/${userId}`).orderByChild("date");
    let results = db.child(`resultaten/${userId}`);
    let subjectCategories = db.child(`subjectCategories`);

    let evalsJSON = {};

    evaluaties.on('child_added', snap => {
        evalsJSON[snap.key] = snap.toJSON();
        evalsJSON[snap.key]['results'] = [];
    });

    results.on('child_added', snap => {
        let evaluaties = db.child(`evaluaties/${userId}/${snap.val().evaluatie}`);
        evaluaties.once('value').then(snapshot => {
            evalsJSON[snapshot.key]['results'].push(snap.toJSON());
        });
    });

    subjectCategories.once('value').then(snapshot => {
        snapshot.forEach(function (childSnapshot) {
            let subject = childSnapshot.key;
            let subjectId = toCssSafeId(subject);

            let category = childSnapshot.val();
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

            categoryEl = document.querySelector(`#${categoryId}`);
            categoryEl.style.display = "none";
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
        });

        for (let eval in evalsJSON) {
            let results = evalsJSON[eval]['results'];

            for (let i = 0; i < results.length; ++i) {
                let resultObj = results[i];

                let subject = resultObj['subject'];
                let subjectId = toCssSafeId(subject);
                let subjectEl = document.querySelector(`#${subjectId}`);

                if (resultObj['result'] != undefined && resultObj['result'] != undefined) {
                    let resultsArr = subjectEl.dataset.results.split(";");
                    resultsArr.push(resultObj['result']);
                    resultsArr = resultsArr.filter(function (value, index, arr) {
                        return value != "";
                    });
                    subjectEl.dataset.results = resultsArr.join(";");
                    subjectEl.dataset.resultdates += evalsJSON[eval]['date'] + ";";
                    let result = calculateResults(resultsArr);

                    subjectEl.querySelectorAll(`.selected`).forEach(element => {
                        let classnames = element.className;
                        classnames = classnames.replace("selected", "");
                        element.className = classnames;
                    });

                    subjectEl.querySelector(`.${result}`).className += " selected";
                    subjectEl.style.opacity = "1";
                    subjectEl.parentElement.parentElement.style.display = "";
                }
            }
        }
    });
}
