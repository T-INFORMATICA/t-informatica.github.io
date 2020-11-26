---
layout: lms
---

<script>

function initialize() {
    test();
    var user = firebase.auth().currentUser;
    readUser(user.uid);
}

</script>