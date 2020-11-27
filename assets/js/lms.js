

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
            <h3 id="${user.uid}"><a href="./index.html?user=${user.uid}#profiel">${userdata.naam}</a></h3>
        `;
        if (!user.admin) {
            tmpl += `
                <a href="./?user=${user.uid}#rapport">Rapport</a>
                <a href="./?user=${user.uid}#evaluaties">Evaluaties</a>
            `;
        }

        document.querySelector('#leftMenu>h1').insertAdjacentHTML('afterend', tmpl);
    });
}

function addManagedUsersToMenu() {
    return firebase.database().ref(`users`).once('value').then(function (snapshot) {
        let tmpl = `
            <hr>
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
                <h3><a href="./managedprofile.html?userid=${uid}">${userdata.val().naam}</a></h3>
                <a href="./managedrapport.html?userid=${uid}">Rapport</a>
                <a href="./managedeval.html?userid=${uid}">Evaluaties</a>
            `;

            document.querySelector('#leftMenu').innerHTML += tmpl;
        });
    });
}



function createMenu() {
    addCurrentUserToMenu();
    addAdmincontrolsToMenu();
}

function createManagedUserProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get('userid');
    createProfile(userId);
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
    return firebase.database().ref(`resultaten/${userId}`).once('value').then(function (snapshot) {
    });
}

function createManagedUserEvals() {
    const urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get('userid');
    createEvals(userId);
}

function createEvals(userId) {
    let db = firebase.database().ref();
    let results = db.child(`resultaten/${userId}`);
    let evaluaties = db.child(`evaluaties/${userId}`).orderByChild("date");

    // first create a container for each evaluation
    evaluaties.on('child_added', snap => {
        document.querySelector("#evaluatiesTimeline").innerHTML = `
            <details class="timeline-item" id="${snap.key}" data-date="${snap.val().date}">
                <summary><h3>${snap.val().name}</h3></summary>
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