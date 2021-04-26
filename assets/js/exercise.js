let form = document.querySelector("#exercise");
form.addEventListener("submit", submitExercise);

let request = new XMLHttpRequest();
function generateExercise(exerciseid) {

    request.open("GET", "/assets/data/definitionsCategories.json");
    request.addEventListener("load", definitionsLoaded);

    let exerciseref = database.ref(`exercises/${_user.uid}/${exerciseid}`);
    exerciseref
        .once('value')
        .then(
            snapshot => {
                let exercise = snapshot.val();
                let subject = exercise.subject;
                
            });
}

function definitionsLoaded() {
    let response = JSON.parse(request.response);
    console.log(response);
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