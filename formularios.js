window.onload = function(){
    var a = document.getElementById("link1");
    a.href = a.href + "?prevurl=" + escape(document.location.href);
  }