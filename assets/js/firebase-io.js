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

        leerlingen[userdata.key] = userdata.val();
        if (userdata.val().admin) {
            adminReadUsers();
        }
        console.log(leerlingen);
        return leerlingen;
    });
}

function adminReadUsers() {
    return firebase.database().ref(`users`).once('value').then(function (snapshot) {
        userdata = snapshot;

        let valueFound = snapshot.forEach(function (childSnapshot) {
            userdata = childSnapshot;
            leerlingen[userdata.key] = userdata.val();
        });
        return leerlingen;
    });
}