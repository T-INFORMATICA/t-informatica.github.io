
function addUsersToMenu() {
    document.documentElement.addEventListener("managedUsersCollectionFinished", e => {
        let managedUsers = e.detail;
        for ([userId, userData] of Object.entries(managedUsers)) {
            let userSelect = document.querySelector('#userSelect>select');
            document.querySelectorAll('.forAdmin').forEach(el => el.style.display = "");
            if (firebase.auth().currentUser.uid === userId || userSelect == null)
                return;

            let tmpl = `<option value="${userId}">${userData.naam} - ${userData.klas}</option>`;
            document.querySelector('#userSelect>select').innerHTML += tmpl;
        }
    });
    CollectAllManagedUsers();
}

function authUser(user) {
    if (user) {
        _user = user;
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('#firebaseui-auth-container').style.display = 'none';
        document.querySelectorAll('.forUser').forEach(el => el.style.display = '');
    } else {
        var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    return true;
                },
                uiShown: function () {
                    // The widget is rendered. Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: '/',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
        };

        ui.start('#firebaseui-auth-container', uiConfig);
    }
}


function signOut() {
    firebase.auth()
        .signOut()
        .then(function () {
            window.location.href = './';
            window.location.reload();
        });
}