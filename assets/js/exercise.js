let form = document.querySelector("#exercise");
form.addEventListener("submit", submitExercise);

let questionKey;

function submitExercise(submitEvent) {
    submitEvent.preventDefault();
    
    let exerciseid = new URLSearchParams(window.location.search).get('exerciseid');
    exerciseid = "qsfduhzfdopjipqs";

    let answer = document.querySelector(`[name="answer"]:checked`).value;
    let database = firebase.database();
    database.ref(`exercises/${_user.uid}/${exerciseid}/questions/${questionKey}/answer`).set(answer);
}

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
                let question = definitions[Math.floor(Math.random() * definitions.length)];
                ShowQuestion(definitions, question, Object.keys(exercise.questions).length);
                questionKey = database.ref(`exercises/${_user.uid}/${exerciseid}/questions`).push(question).key;
            });
}

function ShowQuestion(definitions, question, questionNumber) {
    let random = Math.random();
    let questionKey = random < .5 ? "term" : "definition";
    let answerKey = random < .5 ? "definition" : "term";

    document.querySelector("#questionTitle").innerHTML = questionNumber;
    document.querySelector("#question").innerHTML = question[questionKey];

    for (let i = 0; i < definitions.length; i++) {
        document.querySelector(`#answer${i + 1}`).value = definitions[i][answerKey];
        document.querySelector(`[for="answer${i + 1}"]`).innerHTML = definitions[i][answerKey];
    }

}