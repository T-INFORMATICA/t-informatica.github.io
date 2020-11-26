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
});

</script>

<script>
    (async () => {
    const response = await fetch('https://api.github.com/repos/t-informatica/_cursus/contents/');
    const data = await response.json();
    let htmlString = '<ul>';
    for (let file of data) {
        htmlString += `<li><a href="${file.path}">${file.name}</a></li>`;
    }
    htmlString += '</ul>';
    document.getElementsByTagName('body')[0].innerHTML = htmlString;
    })()
</script>