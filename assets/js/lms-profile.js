function FillInProfileData() {
    document.documentElement.addEventListener("currentUserDataCollectionFinished", e => {
        const userdata = e.detail;
        for ([key, value] of Object.entries(userdata)) {
            switch (key) {
                case "username":
                    document.querySelector('#profileUsername').innerHTML = value;
                    break;
                case "naam":
                    document.querySelector('#profileName').innerHTML = value;
                    break;
                case "password":
                    document.querySelector('#profilePassword').innerHTML = value;
                    break;
                case "url":
                    document.querySelector('#profileUrl').innerHTML = value;
                    break;
                case "github":
                    document.querySelector('#profileGithub').innerHTML = value;
                    break;
            }
        }
    });
    CollectCurrentUserData();
}