function ChangeDarkMode() {
    
    if (document.querySelector("body").classList.contains("light-theme")) {
        document.querySelector("body").classList.remove("light-theme");
    }
    else {
        document.querySelector("body").classList.add("light-theme");
    }
}