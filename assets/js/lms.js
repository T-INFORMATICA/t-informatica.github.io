

function addAdmincontrolsToMenu() {
    let user = firebase.auth().currentUser;
    return firebase.database().ref(`users/${user.uid}`).once('value').then(function (snapshot) {
        userdata = snapshot.val();

        if (userdata.admin === false) {
            return null;
        }

        let tmpl = `
                <h2>Admin</h2>
                <a href="./nieuweEval.html">Nieuwe Evaluatie</a>
                <hr>
        `;
        document.querySelector('#leftMenu>h1').insertAdjacentHTML('afterend', tmpl);

        addOtherUsersToMenu();
    });
}

function addCurrentUserToMenu() {
    let user = firebase.auth().currentUser;
    return firebase.database().ref(`users/${user.uid}`).once('value').then(function (snapshot) {
        userdata = snapshot.val();

        let tmpl = `
            <h2 id="${uid}"><a href="./?leerling=${uid}#profiel">${userdata.naam}</a></h2>
            <a href="./?leerling=${user.uid}#rapport">Rapport</a>
            <a href="./?leerling=${user.uid}#evaluaties">Evaluaties</a>
        `;

        document.querySelector('#leftMenu>hr:last-of-type').insertAdjacentHTML('beforebegin', tmpl);
    });
}

function addOtherUsersToMenu() {
    return firebase.database().ref(`users`).once('value').then(function (snapshot) {
        document.querySelector('#leftMenu-logout').insertAdjacentHTML('afterend', '<hr>');

        snapshot.forEach(function (childSnapshot) {
            userdata = childSnapshot;

            let tmpl = `
                <h2 id="${uid}"><a href="./?leerling=${uid}#profiel">${userdata.naam}</a></h2>
                <a href="./?leerling=${user.uid}#rapport">Rapport</a>
                <a href="./?leerling=${user.uid}#evaluaties">Evaluaties</a>
            `;
    
            document.querySelector('#leftMenu-logout+hr').insertAdjacentHTML('afterend', tmpl);
        });
    });
}



function createMenu() {
    addAdmincontrolsToMenu();
    addCurrentUserToMenu();
}

function createProfile() {

}

function createResults() {

}

function createEvals() {

}
