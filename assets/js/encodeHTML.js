$(function() {
  $("pre.prettyprint").html(function(index,currentcontent) {
    return currentcontent;
  });
});

/*
function escapeHTMLEncode(str) {
  var div = document.createElement(‘div’);
  var text = document.createTextNode(str);
  div.appendChild(text);
  return div.innerHTML;
}*/
