function saveToFirebase(userid, userdata) {
    firebase.database().ref('recipes').child(JSONrecipe.id).set(JSONrecipe)
        .then(function (snapshot) {
            //success(); // some success method
        }, function (error) {
            console.log('error' + error);
            //error(); // some error method
        });
}

var leerlingen = {};

function readUser(uid) {
    return firebase.database().ref(`users/${uid}`).once('value').then(function (snapshot) {
        userdata = snapshot;

        const urlParams = new URLSearchParams(window.location.search);
        let recipeId = urlParams.get('leerling');
        console.log(userdata.key);

        leerlingen = {...leerlingen, ...userdata};
        if (userdata.val().admin) {
            adminReadUsers();
        }
        console.log(leerlingen);
    });
}

function adminReadUsers() {
    return firebase.database().ref(`users`).once('value').then(function (snapshot) {
        userdata = snapshot;

        console.log(userdata.val());
        leerlingen = {...leerlingen, ...userdata.val()};

        const urlParams = new URLSearchParams(window.location.search);
        let recipeId = urlParams.get('select');
    });
}