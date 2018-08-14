var cabecera ='A descubrir letras: t, T';
var derecha = 'A jugar con las palabras';
f_titulos();

var titulos = "marco";
$("#txtNota").html("0");
$("#n_pagina").html("41");

var testimg = [
    ["1", "casa"],
    ["2", "Tomás"],
    ["3", "corbata"],
    ["4", "bajo"],
    ["5", "tubo"],
    ["6", "ratón"],
    ["7", "dado"],
    ["8", "toro"],
    ["9", "gato"],
    ["10", "llamó"],
    ["11", "pera"],
    ["12", "botas"],
]

var CorrectasP = [
    ["1", "casa"],
    ["2", "bajo"],
    ["3", "dado"],
    ["4", "llamó"],
    ["5", "pera"],
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
var respr1, respr2,respr3,respr4,respr5,respr6,respr7,respr8,respr9,respr10,respr11,respr12;

function calculoR() {
    var caja1 = $("div[id=caja_img1]").find('span')[0].id;
    if ($("#caja_img1").hasClass("seleccionCaja")) {

        if ((caja1 == "casa") || (caja1 == "bajo") || (caja1 == "dado")|| (caja1 == "llamó")|| (caja1 == "pera")) {
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

        if ((caja2 == "casa") || (caja2 == "bajo") || (caja2 == "dado")|| (caja2 == "llamó")|| (caja2 == "pera")) {
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

        if ((caja3 == "casa") || (caja3 == "bajo") || (caja3 == "dado")|| (caja3 == "llamó")|| (caja3 == "pera")) {
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

        if ((caja4 == "casa") || (caja4 == "bajo") || (caja4 == "dado")|| (caja4 == "llamó")|| (caja4 == "pera")) {
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

        if ((caja5 == "casa") || (caja5 == "bajo") || (caja5 == "dado")|| (caja5 == "llamó")|| (caja5 == "pera")) {
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

        if ((caja6 == "casa") || (caja6 == "bajo") || (caja6 == "dado")|| (caja6 == "llamó")|| (caja6 == "pera")) {
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

        if ((caja7 == "casa") || (caja7 == "bajo") || (caja7 == "dado")|| (caja7 == "llamó")|| (caja7 == "pera")) {
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

        if ((caja8 == "casa") || (caja8 == "bajo") || (caja8 == "dado")|| (caja8 == "llamó")|| (caja8 == "pera")) {
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

        if ((caja9 == "casa") || (caja9 == "bajo") || (caja9 == "dado")|| (caja9 == "llamó")|| (caja9 == "pera")) {
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
    var caja10 = $("div[id=caja_img10]").find('span')[0].id;
    if ($("#caja_img10").hasClass("seleccionCaja")) {

        if ((caja10 == "casa") || (caja10 == "bajo") || (caja10 == "dado")|| (caja10 == "llamó")|| (caja10 == "pera")) {
            respr10 = 10;

            $("#caja_img10").addClass('correcto')


        } else {
            respr10 = -5;
            $("#caja_img10").removeClass('correcto')
            $("#caja_img10").addClass('incorrecto')


        }

    } else {
        respr10 = 0;

    }
    var caja11 = $("div[id=caja_img11]").find('span')[0].id;
    if ($("#caja_img11").hasClass("seleccionCaja")) {

        if ((caja11 == "casa") || (caja11 == "bajo") || (caja11 == "dado")|| (caja11 == "llamó")|| (caja11 == "pera")) {
            respr11 = 10;

            $("#caja_img11").addClass('correcto')


        } else {
            respr11 = -5;
            $("#caja_img11").removeClass('correcto')
            $("#caja_img11").addClass('incorrecto')


        }

    } else {
        respr11 = 0;

    }
    var caja12 = $("div[id=caja_img12]").find('span')[0].id;
    if ($("#caja_img12").hasClass("seleccionCaja")) {

        if ((caja12 == "casa") || (caja12 == "bajo") || (caja12 == "dado")|| (caja12 == "llamó")|| (caja12 == "pera")) {
            respr12 = 10;

            $("#caja_img12").addClass('correcto')


        } else {
            respr12 = -5;
            $("#caja_img12").removeClass('correcto')
            $("#caja_img12").addClass('incorrecto')


        }

    } else {
        respr12 = 0;

    }
    


    var suma = parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4) + parseInt(respr5) + parseInt(respr6) + parseInt(respr7) +parseInt(respr8) ;
    var totalR = suma / 10;
    var NotaF = (totalR * 10) / 4
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
