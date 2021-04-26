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
    console.log(response);

    let exerciseid = new URLSearchParams(window.location.search).get('exerciseid');
    exerciseid = "qsfduhzfdopjipqs";

    let database = firebase.database();
    let exerciseref = database.ref(`exercises/${_user.uid}/${exerciseid}`);
    exerciseref
        .once('value')
        .then(
            snapshot => {
                let exercise = snapshot.val();
                console.log(exercise);
                let subject = exercise.subject;
                let possibleQuestions = response[subject];
                console.log(possibleQuestions);
            });
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