$(function(){
  var lang =  localStorage.getItem( 'lang' );
    //var lang = getCookie("lang");
    if (lang) {
        $(`option.${lang}`).attr("selected", "selected");
        showCode(lang);
    }
    else {
      let id = $('select.lang-select').val();
      localStorage.setItem( 'lang', id );
      showCode(id);
    }
});


$('select.lang-select').change(function() {
    let id = $(this).val();
    localStorage.setItem( 'lang', id );
    //setCookie("lang", id, 900);
    showCode(id);
});

function showCode(lang) {
    $(`div.highlighter-rouge:not(.${lang})`).css("display", "none");
    $(`div.highlighter-rouge.${lang}`).css("display", "");
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