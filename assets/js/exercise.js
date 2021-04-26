let form = document.querySelector("#exercise");
form.addEventListener("submit", submitExercise);

let questionKey;
let exerciseid;

function submitExercise(submitEvent) {
    submitEvent.preventDefault();

    let answer = document.querySelector(`[name="answer"]:checked`).value;
    let database = firebase.database();
    database.ref(`exercises/${_user.uid}/${exerciseid}/questions/${questionKey}/answer`).set(answer);

    generateExercise();
}

function generateExercise() {
    exerciseid = new URLSearchParams(window.location.search).get('exerciseid');
    if (document.querySelector(`[name="answer"]:checked`)) {
        document.querySelector(`[name="answer"]:checked`).checked = false;
    }

    let request = new XMLHttpRequest();
    request.open("GET", "/assets/data/definitionsCategories.json");
    request.addEventListener("load", definitionsLoaded);
    request.send();
}

function definitionsLoaded(e) {
    let response = JSON.parse(e.currentTarget.response);

    let database = firebase.database();
    let exerciseref = database.ref(`exercises/${_user.uid}/${exerciseid}`);
    exerciseref
        .once('value')
        .then(
            snapshot => {
                let exercise = snapshot.val();
                
                let definitions = response[exercise.subject]
                    .map((a) => ({ sort: Math.random(), value: a }))
                    .sort((a, b) => a.sort - b.sort)
                    .map((a) => a.value)
                    .slice(0, 4);
                let question = definitions[Math.floor(Math.random() * definitions.length)];
                let numQuestions = exercise.questions ? Object.keys(exercise.questions).length + 1 : 1;

                ShowQuestion(definitions, question, numQuestions);
                questionKey = database.ref(`exercises/${_user.uid}/${exerciseid}/questions`).push(question).key;
            });
}

function ShowQuestion(definitions, question, questionNumber) {
    let random = Math.random();
    let questionType = random < .5 ? "term" : "definition";
    let answerType = random < .5 ? "definition" : "term";

    document.querySelector("#questionTitle").innerHTML = `Vraag ${questionNumber}`;
    document.querySelector("#question").innerHTML = question[questionType];

    for (let i = 0; i < definitions.length; i++) {
        document.querySelector(`#answer${i + 1}`).value = definitions[i][answerType];
        document.querySelector(`[for="answer${i + 1}"]`).innerHTML = definitions[i][answerType];
    }
}