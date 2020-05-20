$(function() {
  /*$("pre").addClass("prettyprint");
  
  $("pre").html(function(index,currentcontent) {
    return escapeHTMLEncode(currentcontent);
  });*/ 
});


function escapeHTMLEncode(str) {
  var div = document.createElement('div');
  var text = document.createTextNode(str);
  div.appendChild(text);
  return div.innerHTML;
}
