var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(function () {
    var lang = localStorage.getItem('lang');
    //var lang = getCookie("lang");
    // console.log(lang);
    if (lang) {
        document.querySelector(`option.${lang}`).setAttribute("selected", "selected");
        showCode(lang);
    }
    else {
        let id = document.querySelector('select.lang-select').value;
        localStorage.setItem('lang', id);
        showCode(id);
    }
});


document.querySelector('select.lang-select').addEventListener("change", (e) => {
    // console.log(e.target.value);
    let id = e.target.value;
    localStorage.setItem('lang', id);
    //setCookie("lang", id, 900);
    showCode(id);
});

function showCode(lang) {
    document.querySelectorAll(`div.highlighter-rouge:not(.${lang})`).forEach(box => { box.style.display = "none"; });
    document.querySelectorAll(`div.highlighter-rouge.${lang}`).forEach(box => { box.style.display = ""; });
}
/*
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    var x = document.cookie;
    console.log(x);
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
} */