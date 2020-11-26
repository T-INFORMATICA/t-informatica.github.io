---
layout: lms
---

<script>

firebase.auth().onAuthStateChanged(function(user) {
    authUser(user);
    readUser(user.uid);
});

</script>