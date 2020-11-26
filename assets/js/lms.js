

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
            <h2 id="${user.uid}"><a href="./?leerling=${user.uid}#profiel">${userdata.naam}</a></h2>
            <a href="./?leerling=${user.uid}#rapport">Rapport</a>
            <a href="./?leerling=${user.uid}#evaluaties">Evaluaties</a>
        `;

        document.querySelector('#leftMenu>hr:last-of-type').insertAdjacentHTML('beforebegin', tmpl);
    });
}

function addOtherUsersToMenu() {
    return firebase.database().ref(`users`).once('value').then(function (snapshot) {
        let tmpl = `
            <hr>
            <h3>Manage Users</h3>
        `;
        document.querySelector('#leftMenu-logout').insertAdjacentHTML('afterend', '<hr>');

        snapshot.forEach(function (childSnapshot) {
            userdata = childSnapshot;
            if (userdata.val().admin) {
                return;
            }
            uid = childSnapshot.key;

            let tmpl = `
                <h2><a href="./?leerling=${uid}#profiel">${userdata.val().naam}</a></h2>
                <a href="./?leerling=${uid}#rapport">Rapport</a>
                <a href="./?leerling=${uid}#evaluaties">Evaluaties</a>
            `;
    
            document.querySelector('#leftMenu-logout+hr').insertAdjacentHTML('afterend', tmpl);
        });
    });
}



function createMenu() {
    addCurrentUserToMenu();
    addAdmincontrolsToMenu();
}

function createProfile() {

}

function createResults() {

}

function createEvals() {

}
