/* 
    What's jQuery ?
*/

/*
    Diference Between Javascript and jQuery 
*/

//JavaScript 
var d = document.getElementsByClassName("goodbye"); 
var i; 
for (i = 0; i < d.length; i++) {
   d[i].className = d[i].className + " selected"; 
}
//jQuery
$(".goodbye").addClass("selected");

/*
    Syntax
*/

$(document).ready(function(){

    $("element1").click(function(){

        $("element").effect();
    });

  

});


//$("element").effect();

//$("p").slideDown();



