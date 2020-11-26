function initialize(user) {
    
}

function addAdmincontrolsToMenu() {
    let tmpl = `
            <h2>Admin</h2>
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
            <h2 id="${uid}"><a href="./?leerling=${uid}#profiel">${user.naam}</a></h2>
            <a href="./?leerling=${uid}#rapport">Rapport</a>
            <a href="./?leerling=${uid}#evaluaties">Evaluaties</a>
    `;

    document.querySelector('#leftMenu>hr:last-of-type').insertAdjacentHTML('beforebegin', tmpl);
}

function loadProfielData(parentel) {}

function loadRapportData(parentel) {}

function loadEvalData(parentel) {}