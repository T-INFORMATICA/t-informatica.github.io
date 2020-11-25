function initialize(user) {
    readUser(user.uid);
}

function addUserToMenu(user) {
    let user = users[i];
    let tmpl = `
            <h2><a href="{{baseurl}}/profiel.html?leerling=${user.uid}">Profiel</a></h2>
            <a href="{{baseurl}}/rapport.html?leerling=${user.uid}">Rapport</a>
            <a href="{{baseurl}}/evaluaties.html?leerling=${user.uid}">Evaluaties</a>
    `;

    document.querySelector('#leftMenu>hr').insertAdjacentHTML('beforebegin', tmpl);
}