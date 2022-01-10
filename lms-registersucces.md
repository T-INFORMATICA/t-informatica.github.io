---
layout: lms
---

<h1>Registration succesful!</h1>

<script>
    firebase.auth().onAuthStateChanged(user => {
        let database = firebase.database();
        let newUsersRef = database.ref(`newUsers/${user.uid}`);
        newUserData = {
            email: user.email
        };
        newUsersRef
            .set(newUserData)
            .then(() => console.log("new user registered!"))
            .catch(() => console.log("user already registered"));
    });
</script>