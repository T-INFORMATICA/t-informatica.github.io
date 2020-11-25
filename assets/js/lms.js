function initialize(user) {
    readUser(user.uid);
}

function addUserToMenu(user) {
    if (document.querySelector(`#${user.uid}`)) {
        return;
    }

    let tmpl = `
            <h2 id="${user.uid}"><a href="{{baseurl}}/profiel.html?leerling=${user.uid}">${user.naam}</a></h2>
            <a href="{{baseurl}}/rapport.html?leerling=${user.uid}">Rapport</a>
            <a href="{{baseurl}}/evaluaties.html?leerling=${user.uid}">Evaluaties</a>
    `;

    document.querySelector('#leftMenu>hr').insertAdjacentHTML('beforebegin', tmpl);
}