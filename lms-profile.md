---
layout: lms
---

<header class="full-bleed bg-accent-B">
    <h1>Profiel</h1>
</header>

<table class="styledTable">
    <tbody>
        <tr>
            <th width="150px">naam</th>
            <td id="profileName"></td>
        </tr>
        <tr>
            <th>url</th>
            <td id="profileUrl"></td>
        </tr>
        <tr>
            <th>username</th>
            <td id="profileUsername"></td>
        </tr>
        <tr>
            <th>password</th>
            <td id="profilePassword"></td>
        </tr>
    </tbody>
</table>


<script src="/assets/js/lms-profile.js"></script>
<script>
    firebase.auth().onAuthStateChanged(function (user) {
        FillInProfileData();
    });
</script>