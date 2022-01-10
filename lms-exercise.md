---
layout: lms
---

<header class="full-bleed bg-accent-B">
    <h3 id="questionTitle"></h3>
    <h2 id="question">Loading...</h2>
</header>

<form method="get" id="exercise" style="display: none">
    <input type="hidden" name="question" value="%QUESTION%">
    <input type="hidden" name="questioncount" value="1">

    <div id="exerciseAnswers">
        <input type="radio" name="answer" id="answer1" value="%ANSWER 1%">
        <label for="answer1">Loading...</label>
        <input type="radio" name="answer" id="answer2" value="%ANSWER 2%">
        <label for="answer2">Loading...</label>
        <input type="radio" name="answer" id="answer3" value="%ANSWER 3%">
        <label for="answer3">Loading...</label>
        <input type="radio" name="answer" id="answer4" value="%ANSWER 4%">
        <label for="answer4">Loading...</label>
    </div>
</form>

<script src="{{site.baseurl}}/assets/js/exercise.js"></script>
<script>
    firebase.auth().onAuthStateChanged(function (user) {
        addUsersToMenu();
        loadExercise();
    });
</script>