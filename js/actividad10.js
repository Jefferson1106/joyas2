var cabecera ='A descubrir letras: p, P';
 var derecha = 'A jugar con las palabras';
 f_titulos();

var titulos = "COLOREO";
$("#txtNota").html("0");
$("#n_pagina").html("17");

var testimg = [
    ["1", "pelota"],
    ["2", "nadar"],
    ["3", "Pinocho"],
    ["4", "ocho"],
    ["5", "pescado"],
    ["6", "tiene"],
    ["7", "llamaba"],
    ["8", "perrita"],
    ["9", "todo"],
]

var CorrectasP = [
    ["1", "nadar"],
    ["2", "ocho"],
    ["3", "tiene"],
    ["4", "llamaba"],
    ["5", "todo"],
]

finitimg();


function finitimg() {
    var cajasImg = document.getElementsByClassName('imagen');

    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<span class="" id="' + testimg[i][1] + '">' + testimg[i][1] + '</span>');
    }
}

//$("div[id=caja_img1]").click(function(){


$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});
var respr1, respr2,respr3,respr4,respr5,respr6,respr7,respr8,respr9;

function calculoR() {
    var caja1 = $("div[id=caja_img1]").find('span')[0].id;
    if ($("#caja_img1").hasClass("seleccionCaja")) {

        if ((caja1 == "nadar") || (caja1 == "ocho") || (caja1 == "tiene")|| (caja1 == "llamaba") || (caja1 == "todo")) {
            respr1 = 10;
            $("#caja_img1").addClass('correcto')
        } else {
            respr1 = -5;
            $("#caja_img1").removeClass('correcto')
            $("#caja_img1").addClass('incorrecto')

        }

    } else {
        respr1 = 0;

    }

    var caja2 = $("div[id=caja_img2]").find('span')[0].id;
    if ($("#caja_img2").hasClass("seleccionCaja")) {

        if ((caja2 == "nadar") || (caja2 == "ocho") || (caja2 == "tiene")|| (caja2 == "llamaba") || (caja2 == "todo")) {
            respr2 = 10;
            $("#caja_img2").addClass('correcto')

        } else {
            respr2 = -5;
            $("#caja_img2").removeClass('correcto')
            $("#caja_img2").addClass('incorrecto')


        }

    } else {
        respr2 = 0;

    }

    var caja3 = $("div[id=caja_img3]").find('span')[0].id;
    if ($("#caja_img3").hasClass("seleccionCaja")) {

        if ((caja3 == "nadar") || (caja3 == "ocho") || (caja3 == "tiene")|| (caja3 == "llamaba") || (caja3 == "todo")) {
            respr3 = 10;
            $("#caja_img3").addClass('correcto')


        } else {
            respr3 = -5;
            $("#caja_img3").removeClass('correcto')
            $("#caja_img3").addClass('incorrecto')


        }

    } else {
        respr3 = 0;

    }
    var caja4 = $("div[id=caja_img4]").find('span')[0].id;
    if ($("#caja_img4").hasClass("seleccionCaja")) {

        if ((caja4 == "nadar") || (caja4 == "ocho") || (caja4 == "tiene")|| (caja4 == "llamaba") || (caja4 == "todo")) {
            respr4 = 10;
            $("#caja_img4").addClass('correcto')


        } else {
            respr4 = -5;
            $("#caja_img4").removeClass('correcto')
            $("#caja_img4").addClass('incorrecto')


        }

    } else {
        respr4 = 0;

    }

    var caja5 = $("div[id=caja_img5]").find('span')[0].id;
    if ($("#caja_img5").hasClass("seleccionCaja")) {

        if ((caja5 == "nadar") || (caja5 == "ocho") || (caja5 == "tiene")|| (caja5 == "llamaba") || (caja5 == "todo")) {
            respr5 = 10;

            $("#caja_img5").addClass('correcto')


        } else {
            respr5 = -5;
            $("#caja_img5").removeClass('correcto')
            $("#caja_img5").addClass('incorrecto')


        }

    } else {
        respr5 = 0;

    }

    var caja6 = $("div[id=caja_img6]").find('span')[0].id;
    if ($("#caja_img6").hasClass("seleccionCaja")) {

        if ((caja6 == "nadar") || (caja6 == "ocho") || (caja6 == "tiene")|| (caja6 == "llamaba") || (caja6 == "todo")) {
            respr6 = 10;

            $("#caja_img6").addClass('correcto')


        } else {
            respr6 = -5;
            $("#caja_img6").removeClass('correcto')
            $("#caja_img6").addClass('incorrecto')


        }

    } else {
        respr6 = 0;

    }

    var caja7 = $("div[id=caja_img7]").find('span')[0].id;
    if ($("#caja_img7").hasClass("seleccionCaja")) {

        if ((caja7 == "nadar") || (caja7 == "ocho") || (caja7 == "tiene")|| (caja7 == "llamaba") || (caja7 == "todo")) {
            respr7 = 10;

            $("#caja_img7").addClass('correcto')


        } else {
            respr7 = -5;
            $("#caja_img7").removeClass('correcto')
            $("#caja_img7").addClass('incorrecto')


        }

    } else {
        respr7 = 0;

    }

    var caja8 = $("div[id=caja_img8]").find('span')[0].id;
    if ($("#caja_img8").hasClass("seleccionCaja")) {

        if ((caja8 == "nadar") || (caja8 == "ocho") || (caja8 == "tiene")|| (caja8 == "llamaba") || (caja8 == "todo")) {
            respr8 = 10;

            $("#caja_img8").addClass('correcto')


        } else {
            respr8 = -5;
            $("#caja_img8").removeClass('correcto')
            $("#caja_img8").addClass('incorrecto')


        }

    } else {
        respr8 = 0;

    }
    var caja9 = $("div[id=caja_img9]").find('span')[0].id;
    if ($("#caja_img9").hasClass("seleccionCaja")) {

        if ((caja9 == "nadar") || (caja9 == "ocho") || (caja9 == "tiene")|| (caja9 == "llamaba") || (caja9 == "todo")) {
            respr9 = 10;

            $("#caja_img9").addClass('correcto')


        } else {
            respr9 = -5;
            $("#caja_img9").removeClass('correcto')
            $("#caja_img9").addClass('incorrecto')


        }

    } else {
        respr9 = 0;

    }



    var suma = parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4) + parseInt(respr5) + parseInt(respr6) + parseInt(respr7) +parseInt(respr8)+ parseInt(respr9) ;
    var totalR = suma / 10;
    var NotaF = (totalR * 10) / 5

    if(NotaF<0)
    {
        NotaF=0;
        $('#txtNota').html(NotaF.toFixed(2) + ' ');
        document.getElementById('bt_comprobar').disabled = true;
    }
    else
    {
        $('#txtNota').html(NotaF.toFixed(2) + ' ');
        document.getElementById('bt_comprobar').disabled = true;
    
    }
    
}
