documentReady(function () {
    var darkmode = localStorage.getItem('darkmode');
    //var lang = getCookie("lang");
    // console.log(lang);
    if (darkmode == "light") {
        ChangeDarkMode();
    }
});

function ChangeDarkMode() {
    
    if (document.querySelector("body").classList.contains("light-theme")) {
        document.querySelector("body").classList.remove("light-theme");
        localStorage.setItem('darkmode', 'dark');

    }
    else {
        document.querySelector("body").classList.add("light-theme");
        localStorage.setItem('darkmode', 'light');
    }
}