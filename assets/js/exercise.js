let questionKey;
let exerciseid;
let numQuestionsInExercise;

function loadExercise() {
    exerciseid = new URLSearchParams(window.location.search).get('exerciseid');
    if (exerciseid == null) {
        document.querySelector("#exerciseSelection").style.display = "";
    }
    else {
        generateQuestion();
    }
}

function confirmExit() {
    return "You have attempted to leave this page. Are you sure?";
}

function submitExercise(submitEvent) {
    submitEvent.preventDefault();

    let answer = document.querySelector(`[name="answer"]:checked`).value;
    let database = firebase.database();
    let exerciseref = database.ref(`exercises/${_user.uid}/${exerciseid}`);
    exerciseref.child(`questions/${questionKey}/answer`).set(answer);

    loadExercise();
}

function EvaluateExercise() {
    let database = firebase.database();
    let exerciseref = database.ref(`exercises/${_user.uid}/${exerciseid}`);
    exerciseref.child("finished").set(true);


    userid = getUserId();
    let userref = database.ref(`users/${userid}`);

    let terms = {};
    timestamp = (new Date()).getTime();

    exerciseref
        .child("questions")
        .once("value")
        .then(questions => {

            for (const [id, question] of Object.entries(questions)) {
                terms[question.term] = question.term in terms ? terms[question.terms] : 0;

                result = question.answer == question.term || question.answer == question.definition;
                terms[question.term] += result;
            }

            for (const [term, currentResult] of Object.entries(terms)) {
                termCount = questions.reduce((i, it) => it.term === term ? ++i : i, 0);

                userref
                    .child(`knownTerms/${term}/${timestamp}`)
                    .set(currentResult / termCount)
                    .then(
                        () => {
                            window.location.replace('https://t-informatica.github.io/exercise.html');
                        });
            }
        });
}

function CreateNewExercise(subject) {
    let database = firebase.database();

    let newExerciseData = {
        "subject": subject
    };

    database.ref(`exercises/${_user.uid}`)
        .push(newExerciseData)
        .then(
            snapshot => {
                let url = `https://t-informatica.github.io/exercise.html?exerciseid=${snapshot.key}`;
                window.location.replace(url);
            }
        );
}

function generateQuestion() {
    window.onbeforeunload = confirmExit;

    let form = document.querySelector("#exercise");
    form.addEventListener("submit", submitExercise);

    document.querySelector("#exercise").style.display = "";
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

                numQuestionsInExercise = exercise.questions ? Object.keys(exercise.questions).length + 1 : 1;
                if (numQuestionsInExercise > 10) {
                    window.onbeforeunload = null;
                    EvaluateExercise();
                    return;
                }

                let definitions = response[exercise.subject]
                    .map((a) => ({ sort: Math.random(), value: a }))
                    .sort((a, b) => a.sort - b.sort)
                    .map((a) => a.value)
                    .slice(0, 4);
                let randomQuestion = definitions[Math.floor(Math.random() * definitions.length)];

                ShowQuestion(definitions, randomQuestion, numQuestionsInExercise);
                questionKey = database.ref(`exercises/${_user.uid}/${exerciseid}/questions`).push(randomQuestion).key;
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