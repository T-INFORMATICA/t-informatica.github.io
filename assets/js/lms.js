function initialize(user) {
    readUser(user.uid);
}

function addAdmincontrolsToMenu() {

    let tmpl = `
            <h2>Admin Controls</h2>
            <a href="./nieuweEval.html">Nieuwe Evaluatie</a>
            <hr>
    `;

    document.querySelector('#leftMenu>h1').insertAdjacentHTML('afterend', tmpl);
}

function addUserToMenu(uid, user) {
    console.log(user);
    if (user.admin || document.querySelector(`#${uid}`)) {
        return;
    }

    let tmpl = `
            <h2 id="${uid}"><a href="./profiel.html?leerling=${uid}">${user.naam}</a></h2>
            <a href="./rapport.html?leerling=${uid}">Rapport</a>
            <a href="./evaluaties.html?leerling=${uid}">Evaluaties</a>
    `;

    document.querySelector('#leftMenu>hr:last-of-type').insertAdjacentHTML('beforebegin', tmpl);
}