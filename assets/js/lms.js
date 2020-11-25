function initialize(user) {
    readUser(user.uid);
}

function addUserToMenu(uid, user) {
    console.log(user);
    if (document.querySelector(`#${uid}`)) {
        return;
    }

    let tmpl = `
            <h2 id="${uid}"><a href="./profiel.html?leerling=${uid}">${user.naam}</a></h2>
            <a href="./rapport.html?leerling=${uid}">Rapport</a>
            <a href="./evaluaties.html?leerling=${uid}">Evaluaties</a>
    `;

    document.querySelector('#leftMenu>hr').insertAdjacentHTML('beforebegin', tmpl);
}