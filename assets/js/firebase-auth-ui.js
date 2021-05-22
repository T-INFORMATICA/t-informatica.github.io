function authUser(user) {
    if (user) {
        console.log('succes - already logged in');
        _user = user;
        document.getElementById('loader').style.display = 'none';
        document.querySelector('#firebaseui-auth-container').style.display = 'none';
        document.querySelector('#usermenu>nav').style.display = '';
        //initialize();
    } else {

        var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    console.log("succes - logged in");
                    return false;
                },
                uiShown: function () {
                    // The widget is rendered. Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: '<url-to-redirect-to-on-success>',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>',
            // Privacy policy url.
            privacyPolicyUrl: '<your-privacy-policy-url>'
        };

        ui.start('#firebaseui-auth-container', uiConfig);
    }
}

firebase.auth().onAuthStateChanged(user => {
    let database = firebase.database();
    let newUsersRef = database.ref(`newUsers/${_user.uid}`);
    newUserData = {
        email: user.email
    };
    newUsersRef.set(newUserData).then(() => console.log("new user registered!"));
});

function signOut() {
    firebase.auth()
        .signOut()
        .then(function () {
            // Sign-out successful.
            window.location.href = './';
            window.location.reload();
        })
        .catch(function (error) {
            // An error happened.
        });
}