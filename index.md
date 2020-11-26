---
layout: lms
---

<script>

function initialize() {
    var user = firebase.auth().currentUser;
    readUser(user.uid);
}


</script>