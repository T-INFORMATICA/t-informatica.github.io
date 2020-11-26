---
layout: lms
---

<script>

firebase.auth().onAuthStateChanged(function(user) {
    authUser(user);
    createMenu();
    createProfile();
    createResults();
    createEvals();
    readUser(user.uid);
});

</script>