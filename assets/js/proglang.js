documentReady(function () {
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