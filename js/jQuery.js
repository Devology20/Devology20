$(document).ready(function(){


    $("#select").click(function(){

        $("#hide").toggle();
    });

    //FADEIN,FADEOUT,FADETOGGLE

    $(".select-btn").click(function(){

        $(".p-hidden").fadeIn(5000);
    });

    $(".select-btn1").dblclick(function(){

        $(".p-fadeout").fadeOut(3000);
    });

    $(".select-btn2").click(function(){

        $("#img-toggle").fadeToggle();
    });

    
});

// click 

// dblclick

//mouseeneter

//mouseleave

//hover

