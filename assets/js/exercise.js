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

    document.querySelectorAll(`[name="answer"]`).forEach(el => el.disabled = true);

    let answer = document.querySelector(`[name="answer"]:checked`).value;
    let database = firebase.database();
    let exerciseref = database.ref(`exercises/${_user.uid}/${exerciseid}`);
    exerciseref.child(`questions/${questionKey}/answer`).set(answer);

    setTimeout(() => loadExercise(), 1000);


}

function EvaluateExercise(subject) {
    let database = firebase.database();
    let exerciseref = database.ref(`exercises/${_user.uid}/${exerciseid}`);
    let termsref = database.ref(`knownTerms/${_user.uid}`);

    let terms = {};
    timestamp = (new Date()).getTime();

    exerciseref
        .child("questions")
        .once("value")
        .then(snapshot => {
            questions = snapshot.val();
            for (const [id, question] of Object.entries(questions)) {
                terms[question.term] = question.term in terms ? terms[question.term] : 0;

                result = question.answer == question.term || question.answer == question.definition;
                terms[question.term] += result;
            }

            questions = Object.entries(questions);

            for (const [term, currentResult] of Object.entries(terms)) {
                let termCount = questions.reduce((i, it) => it[1].term === term ? ++i : i, 0);
                termsref
                    .child(`${subject}/${term}/${timestamp}`)
                    .set(currentResult / termCount)
                    .then(() => exerciseref.child("finished").set(true))
                    .then(() => window.location.replace('/lms-exercise.html'));
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
                let url = `/lms-exercise.html?exerciseid=${snapshot.key}`;
                window.location.replace(url);
            }
        );
}

function generateQuestion() {
    window.onbeforeunload = confirmExit;

    document.querySelectorAll(`[name="answer"]`).forEach(el => el.disabled = false);

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
                    EvaluateExercise(exercise.subject);
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