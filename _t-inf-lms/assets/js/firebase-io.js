

function saveToFirebase(userid, userdata) {
    firebase.database().ref('recipes').child(JSONrecipe.id).set(JSONrecipe)
        .then(function(snapshot) {
            //success(); // some success method
        }, function(error) {
            console.log('error' + error);
            //error(); // some error method
        });
}

function readUserDataFromFirebase() {
    return firebase.database().ref('users').once('value').then(function(snapshot) {
        users = snapshot;

        const urlParams = new URLSearchParams(window.location.search);
        let recipeId = urlParams.get('select');

        let valueFound = snapshot.forEach(function(childSnapshot) {
            user = childSnapshot.val();
            console.log(user);
        });
    });
}