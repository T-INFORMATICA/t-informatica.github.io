function toCssSafeId(text) {
    text = text.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
    return text;
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

function createResults(userId) {
    return firebase.database().ref(`subjectCategories`).once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            let subject = childSnapshot.key;

            let category = childSnapshot.val();
            let categoryId = toCssSafeId(category);
            let categoryEl = document.querySelector(`#${categoryId}`);

            if (categoryEl !== null) {
                let tmpl = `
                    <div id="${categoryId}">
                        ${category}
                    </div>
                `;
                document.querySelector("main").innerHTML += tmpl;
            }

            categoryEl = document.querySelector(`#${categoryId}`);


        });
    });
}

function createEvals(userId) {
    let db = firebase.database().ref();
    let results = db.child(`resultaten/${userId}`);
    let evaluaties = db.child(`evaluaties/${userId}`).orderByChild("date");

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