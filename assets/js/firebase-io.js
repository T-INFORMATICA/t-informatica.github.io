function saveToFirebase(userid, userdata) {
    firebase.database().ref('recipes').child(JSONrecipe.id).set(JSONrecipe)
        .then(function (snapshot) {
            //success(); // some success method
        }, function (error) {
            console.log('error' + error);
            //error(); // some error method
        });
}

function readUser(uid) {
    return firebase.database().ref(`users/${uid}`).once('value').then(function (snapshot) {
        userdata = snapshot;

        const urlParams = new URLSearchParams(window.location.search);
        let recipeId = urlParams.get('leerling');

        if (userdata.val().admin) {
            adminReadUsers();
        }
    });
}

function adminReadUsers() {
    return firebase.database().ref(`users`).once('value').then(function (snapshot) {
        userdata = snapshot;

        console.log(userdata.val());

        const urlParams = new URLSearchParams(window.location.search);
        let recipeId = urlParams.get('select');

        let valueFound = snapshot.forEach(function (childSnapshot) {
            user = childSnapshot.val();
            console.log(user);
        });
    });
}