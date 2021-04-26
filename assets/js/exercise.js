let form = document.querySelector("#exercise");
form.addEventListener("submit", submitExercise);


function generateExercise() {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/definitionsCategories.json");
    request.addEventListener("load", definitionsLoaded);
    request.send();
}

function definitionsLoaded(e) {
    let response = JSON.parse(e.currentTarget.response);

    let exerciseid = new URLSearchParams(window.location.search).get('exerciseid');
    exerciseid = "qsfduhzfdopjipqs";

    let database = firebase.database();
    let exerciseref = database.ref(`exercises/${_user.uid}/${exerciseid}`);
    exerciseref
        .once('value')
        .then(
            snapshot => {
                let exercise = snapshot.val();
                let subject = exercise.subject;
                let definitions = response[subject];
                let shuffledDefinitions = definitions
                    .map((a) => ({ sort: Math.random(), value: a }))
                    .sort((a, b) => a.sort - b.sort)
                    .map((a) => a.value);
                definitions = shuffledDefinitions.slice(0, 4);
                ShowQuestion(definitions);
            });
}

function ShowQuestion(definitions) {
    let random = Math.random();
    let questionKey = random < .5 ? "term" : "definition";
    let answerKey = random < .5 ? "definition" : "term";
    let randomId = Math.floor(Math.random() * definitions.length);

    document.querySelector("#question").innerHTML = definitions[randomId][questionKey];

    for (let i = 0; i < definitions.length; i++) {
        document.querySelector(`#answer${i + 1}`).value = definitions[i][answerKey];
        document.querySelector(`[for="answer${i + 1}"]`).innerHTML = definitions[i][answerKey];
    }

}
/*
function submitExercise() { 
    let question = form.elements["question"].value;
    let answer = form.elements["answer"].value;
    let questioncount = form.elements["questioncount"].value;

    
    let database = firebase.database();
    let exerciseref = database.ref(`exercises/${_user.uid}`);
    let definitionref = database.ref(`definitions/${question}/correct`);
    definitionref
        .once('value')
        .then(snapshot => {
            let correctAnswer = snapshot.val();
            exerciseref
                .set({
                    myAnswer: answer,
                    correctAnswer: correctAnswer,
                    index: questioncount + 1
                }); // set the current exercice values
        });
}*/