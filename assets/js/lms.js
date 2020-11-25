function initialize(user) {
    readUser(user.uid);
}

function addUserToMenu(uid, user) {
    console.log(user);
    if (document.querySelector(`#${uid}`)) {
        return;
    }

    let tmpl = `
            <h2 id="${uid}"><a href="{{baseurl}}/profiel.html?leerling=${uid}">${user.naam}</a></h2>
            <a href="{{baseurl}}/rapport.html?leerling=${uid}">Rapport</a>
            <a href="{{baseurl}}/evaluaties.html?leerling=${uid}">Evaluaties</a>
    `;

    document.querySelector('#leftMenu>hr').insertAdjacentHTML('beforebegin', tmpl);
}