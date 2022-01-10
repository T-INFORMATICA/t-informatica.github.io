let lib_cache = {};

/** callback function that checks if the document has loaded completely */
function documentReady(callback) {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

/** change the user in the user URL param */
function changeUser() {
    let userid = document.querySelector("#userSelect>select").value;

    let url = `?userid=${userid}`;
    window.location.replace(url);
}

/** change the user in the Admin user select dropdown */
function selectUser() {
    let userid = getUserId();

    let userSelectEl = document.querySelector("#userSelect>select");
    if (userSelectEl) {
        userSelectEl.value = userid;
    }
}

/** get the user id, either from the URL (priority) or from the authenticated user */
function getUserId() {
    let userid = new URLSearchParams(window.location.search).get('userid');
    userid = userid === null ? _user.uid : userid;
    return userid;
}

/** creates a CSS safe ID from a given text */
function toCssSafeId(text) {
    text = text.replace(/[!\s\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
    // text = text.replace(/[!\d\s\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, ''); // HACK: currently, subjects are saved with a digit if there are multiple possible evals.
    return text.toLowerCase();
}

/** get the accompanying text for a given result letter */
function getResultLevelText(result) {
    switch (result) {
        case 'A': return "Expert";
        case 'B': return "Kenner";
        case 'C': return "Gevorderd";
        case 'D': return "Beginner";
        case 'E': return "Leek";
    }
    return "";
}

/** get the final result for a date-ordered list of results */
function calculateResult(resultsArr) {
    let evalProgress = {
        "A": {
            "A": 0, "B": -0.5, "C": -1.5, "D": -1.5, "E": -1.5
        },
        "B": {
            "A": 1, "B": 0, "C": -1, "D": -1.5, "E": -1.5
        },
        "C": {
            "A": 1.5, "B": 0.5, "C": 0, "D": -1, "E": -1.5
        },
        "D": {
            "A": 2, "B": 1, "C": 0.5, "D": 0, "E": -1.5
        },
        "E": {
            "A": 2, "B": 1.5, "C": 1, "D": 0, "E": 0
        },
    }

    // convert letter to number
    let letters = ["E", "D", "C", "B", "A"];
    let result = resultsArr[0];
    let resultNumber = letters.indexOf(result) - 2; // -2 to offset the index between -2 and 2, instead of 0 and 5

    for (let i = 1; i < resultsArr.length; ++i) {

        let resultLetter = letters[Math.round(resultNumber + 2)];
        let behaaldeLetter = resultsArr[i];
        let resultDelta = evalProgress[resultLetter][behaaldeLetter];

        resultNumber += resultDelta;
    }

    let resultLetter = letters[Math.round(resultNumber + 2)];
    return resultLetter;
}

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/** collect all managed users for the authenticated user.
 * Sends out a "managedUsersCollectionFinished" event, with an event.detail property containing all managed users:
 * - users{}
 *   - userId
 *     - name
 *     - class
 */
function CollectAllManagedUsers() {
    if (lib_cache["managedUsers"]) {
        document.documentElement.dispatchEvent(new CustomEvent("managedUsersCollectionFinished", { detail: lib_cache["managedUsers"] }));
        return;
    }

    let database = firebase.database();
    let managedUsersref = database.ref(`users`).orderByChild(`klas`);

    managedUsersref.once('value')
        .then(managedUsersCollection => {
            let managedUsers = {};
            managedUsersCollection.forEach(managedUserSnapshot => {
                managedUsers[managedUserSnapshot.key] = managedUserSnapshot.val();
            });
            lib_cache["managedUsers"] = managedUsers;
            document.documentElement.dispatchEvent(new CustomEvent("managedUsersCollectionFinished", { detail: managedUsers }));
        })
        .catch(error => console.log(`Not logged in as Admin. ${error}`));
}


/* Collects all evaluations for the currently selected user.
 * Sends out a "evaluationsCollectionFinished" event, with an event.detail property containing all evaluations:
  - evaluations{}
    - evaluationId
    - date
    - name
    - results{}
        - resultId
        - comment
        - evaluationId (can be left out)
        - result
        - subject
    */
function CollectAllEvaluations() {
    if (lib_cache["evaluations"]) {
        document.documentElement.dispatchEvent(new CustomEvent("evaluationsCollectionFinished", { detail: lib_cache["evaluations"] }));
        return;
    }

    let userid = getUserId();
    let database = firebase.database();
    let evalsref = database.ref(`evaluaties`).orderByChild("date");


    evalsref
        .once('value')
        .then(snapshot => {
            let evaluations = {};

            snapshot.forEach(evalsnapshot => {
                evaluations[evalsnapshot.key] = evalsnapshot.val();
                evaluations[evalsnapshot.key]["results"] = {};
            })

            let resultsref = database.ref(`resultaten/${userid}`);
            resultsref
                .once('value')
                .then(snapshot => {
                    snapshot.forEach(resultSnapshot => {
                        let resultId = resultSnapshot.key;
                        let resultData = resultSnapshot.val();
                        if (evaluations[resultData.evaluatie]) {
                            evaluations[resultData.evaluatie]["results"][resultId] = resultData;
                        }
                    });
                    lib_cache["evaluations"] = evaluations;
                    document.documentElement.dispatchEvent(new CustomEvent("evaluationsCollectionFinished", { detail: evaluations }));
                });

        });
}

/**
 * Sends out a "resultsCollectionFinished" event, with an event.detail property containing all results by subject:
 * - subjects{}
 *   - subject[]
 *     - index{}
 *       - date
 *       - resultLetter
 */
function CollectAllResultsBySubject() {
    if (lib_cache["resultsBySubject"]) {
        document.documentElement.dispatchEvent(new CustomEvent("resultsCollectionFinished", { detail: lib_cache["resultsBySubject"] }));
        return;
    }


    document.documentElement.addEventListener("evaluationsCollectionFinished", e => {
        let evaluations = e.detail;
        evaluations = Object.values(evaluations).sort((a, b) => new Date(a.date) - new Date(b.date));

        // convert the evaluations (ordered by date) to results (ordered by date) by subjects
        subjects = {};
        evals.forEach(eval => {
            eval.results.forEach(res => {
                // create an entry for the subject if it doesn't exist yet
                subjects[res.subject] = res.subject in subjects ? subjects[res.subject] : [];
                // add an evaluation to the subject
                subjects[res.subject].push({
                    date: new Date(eval.date),
                    result: res.result
                });
            });
        });

        lib_cache["resultsBySubject"] = subjects;
        document.documentElement.dispatchEvent(new CustomEvent("resultsCollectionFinished", { detail: subjects }));

    });
    CollectAllEvaluations();
}


/**
 * Sends out a "termsAndDefinitionsCollectionFinished" event, with an event.detail property containing all terms and definitions by subject:
 * - subjects{}
 *   - subject[]
 *     - index{}
 *       - term
 *       - definition
 */
function CollectTermsAndDefinitions() {
    if (lib_cache["termsAndDefinitions"]) {
        document.documentElement.dispatchEvent(new CustomEvent("termsAndDefinitionsCollectionFinished", { detail: lib_cache["termsAndDefinitions"] }));
        return;
    }

    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/definitionsCategories.json");
    request.addEventListener("load", e => {
        let definitions = JSON.parse(e.currentTarget.response);
        lib_cache["termsAndDefinitions"] = definitions;
        document.documentElement.dispatchEvent(new CustomEvent("termsAndDefinitionsCollectionFinished", { detail: definitions }));
    });
    request.send();
}

/**
 * - subjects{}
 *   - subject[]
 *     - index{}
 *       - term
 *       - definition
 */
function CollectKnownTerms() {
    if (lib_cache["knownTerms"]) {
        document.documentElement.dispatchEvent(new CustomEvent("knownTermsCollectionFinished", { detail: lib_cache["knownTerms"] }));
        return;
    }

    let database = firebase.database();
    let termsref = database.ref(`knownTerms/${getUserId()}`);
    termsref
        .once('value')
        .then(knownTermsSnapshot => {
            lib_cache["knownTerms"] = knownTermsSnapshot.val();
            document.documentElement.dispatchEvent(new CustomEvent("knownTermsCollectionFinished", { detail: knownTermsSnapshot.val() }));
        });
}

/**
 * - user
 *   - username
 *   - naam
 *   - password
 *   - url
 */
function CollectCurrentUserData() {
    if (lib_cache["currentUserData"]) {
        document.documentElement.dispatchEvent(new CustomEvent("currentUserDataCollectionFinished", { detail: lib_cache["currentUserData"] }));
        return;
    }

    let userid = getUserId();
    let database = firebase.database();
    let userref = database.ref(`users/${userid}`);

    userref.once('value')
        .then(userDataSnapshot => {
            let userdata = userDataSnapshot.val();
            lib_cache["knownTerms"] = userdata;
            document.documentElement.dispatchEvent(new CustomEvent("currentUserDataCollectionFinished", { detail: userdata }));
        });
}