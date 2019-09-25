var s = document.createElement("script");
s.src = "http://code.jquery.com/jquery-1.11.0.min.js";
s.onload = function(e){ 
    console.log( "ready!" );
    alert("funciona :D");
 }; 
document.head.appendChild(s); 