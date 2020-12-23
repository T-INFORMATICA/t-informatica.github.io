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

    evalsref.once('value')
        .then(snapshot => snapshot.forEach(evalsnapshot => console.log(evalsnapshot)));

    resultsref.once('value')
        .then(snapshot => console.log(snapshot.val()));
}

function addEvalToTimeline(evalid, evaldata) {
    console.log(evaldata);
    let tmpl = `
        <details class="timeline-item" id="${evalid}" data-date="${evaldata.date}" open>
            <summary>${evaldata.name}</summary>
            <ul>
            </ul>
        </details>`;
    document.querySelector("#evaluatiesTimeline").prepend(tmpl);
}

/*function createEvals(userId) {
    let db = firebase.database().ref();
    let evaluaties = db.child(`evaluaties/${userId}`).orderByChild("date");
    let results = db.child(`resultaten/${userId}`);

    // first create a container for each evaluation
    evaluaties.on('child_added', snap => {
        document.querySelector("#evaluatiesTimeline").innerHTML = `
            <details class="timeline-item" id="${snap.key}" data-date="${snap.val().date}" open>
                <summary>${snap.val().name}</summary>
                <ul>
                </ul>
            </details>
        ` + document.querySelector("#evaluatiesTimeline").innerHTML;
    });

    // then fill each container with results
    results.on('child_added', snap => {
        let evaluaties = db.child(`evaluaties/${userId}/${snap.val().evaluatie}`);
        evaluaties.once('value').then(snapshot => {
            let tmpl = `
                <li>
                    <b class="result">${snap.val().result}</b>
                    ${snap.val().subject}<br>
                    ${snap.val().commentaar}
                </li>
            `;
            document.querySelector(`#${snapshot.key}>ul`).innerHTML += tmpl;
        });
    });
}*/

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

        let resultLetter = letters[Math.round(resultNumber+2)];
        let behaaldeLetter = resultsArr[i];
        let resultDelta = evalProgress[resultLetter][behaaldeLetter];

        resultNumber += resultDelta;
    }
    
    let resultLetter = letters[Math.round(resultNumber+2)];
    return resultLetter;
}

function addAdmincontrolsToMenu() {
    let user = firebase.auth().currentUser;
    return firebase.database().ref(`users/${user.uid}`).once('value').then(function (snapshot) {
        userdata = snapshot.val();

        if (userdata.admin === false) {
            return null;
        }

        let tmpl = `
                <hr>
                <h2>Admin</h2>
                <a href="./nieuweEval.html">Nieuwe Evaluatie</a>
                <hr>
        `;
        document.querySelector('#leftMenu>#leftMenu-logout').insertAdjacentHTML('afterend', tmpl);

        addManagedUsersToMenu();
    });
}

function addCurrentUserToMenu() {
    let user = firebase.auth().currentUser;
    return firebase.database().ref(`users/${user.uid}`).once('value').then(function (snapshot) {
        userdata = snapshot.val();

        let tmpl = `
            <h2>Profiel</h2>
            <a href="./index.html" id="${user.uid}">${userdata.naam}</a>
        `;
        if (!userdata.admin) {
            tmpl += `
            <a href="./rapport.html">Rapport</a>
            <a href="./eval.html">Evaluaties</a>
            `;
        }

        document.querySelector('#leftMenu>h1').insertAdjacentHTML('afterend', tmpl);
    });
}

function addManagedUsersToMenu() {
    return firebase.database().ref(`users`).once('value').then(function (snapshot) {
        let tmpl = `
            <h2>Manage Users</h2>
        `;
        document.querySelector('#leftMenu').innerHTML += tmpl;

        snapshot.forEach(function (childSnapshot) {
            userdata = childSnapshot;
            if (userdata.val().admin) {
                return;
            }
            uid = childSnapshot.key;

            let tmpl = `
                <a href="./profile.html?userid=${uid}">${userdata.val().naam}</a>
                <a href="./rapport.html?userid=${uid}">Rapport</a>
                <a href="./eval.html?userid=${uid}">Evaluaties</a>
            `;

            document.querySelector('#leftMenu').innerHTML += tmpl;
        });
    });
}



function createMenu() {
    addCurrentUserToMenu();
    addAdmincontrolsToMenu();
}

function createProfile(userId) {
    return firebase.database().ref(`users/${userId}`).once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            userdata = childSnapshot;
            switch (userdata.key) {
                case "username": 
                    document.querySelector('#profileUsername').innerHTML += userdata.val();
                    break;
                case "naam":
                    document.querySelector('#profileName').innerHTML += userdata.val();
                    break;
                case "password":
                    document.querySelector('#profilePassword').innerHTML += userdata.val();
                    break;
                case "url":
                    document.querySelector('#profileUrl').innerHTML += userdata.val();
                    break;
            }
        });
        
    });
}

function createEvals(userId) {
    let db = firebase.database().ref();
    let evaluaties = db.child(`evaluaties/${userId}`).orderByChild("date");
    let results = db.child(`resultaten/${userId}`);

    // first create a container for each evaluation
    evaluaties.on('child_added', snap => {
        document.querySelector("#evaluatiesTimeline").innerHTML = `
            <details class="timeline-item" id="${snap.key}" data-date="${snap.val().date}" open>
                <summary>${snap.val().name}</summary>
                <ul>
                </ul>
            </details>
        ` + document.querySelector("#evaluatiesTimeline").innerHTML;
    });

    // then fill each container with results
    results.on('child_added', snap => {
        let evaluaties = db.child(`evaluaties/${userId}/${snap.val().evaluatie}`);
        evaluaties.once('value').then(snapshot => {
            let tmpl = `
                <li>
                    <b class="result">${snap.val().result}</b>
                    ${snap.val().subject}<br>
                    ${snap.val().commentaar}
                </li>
            `;
            document.querySelector(`#${snapshot.key}>ul`).innerHTML += tmpl;
        });
    });
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
                    resultsArr = resultsArr.filter(function(value, index, arr){ 
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
