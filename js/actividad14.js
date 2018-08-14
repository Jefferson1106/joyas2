var cabecera ='A descubrir letras: r, R';
var derecha = 'A jugar con las palabras';
f_titulos();

var titulos = "marco";
$("#txtNota").html("0");
$("#n_pagina").html("37");

var testimg = [
    ["1", "arena"],
    ["2", "pala"],
    ["3", "mar"],
    ["4", "perico"],
    ["5", "moto"],
    ["6", "barco"],
    ["7", "teja"],
    ["8", "buque"],
]

var CorrectasP = [
    ["1", "arena"],
    ["2", "mar"],
    ["3", "perico"],
    ["4", "barco"],
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
var respr1, respr2,respr3,respr4,respr5,respr6,respr7,respr8;

function calculoR() {
    var caja1 = $("div[id=caja_img1]").find('span')[0].id;
    if ($("#caja_img1").hasClass("seleccionCaja")) {

        if ((caja1 == "arena") || (caja1 == "mar") || (caja1 == "perico")|| (caja1 == "barco")) {
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

        if ((caja2 == "arena") || (caja2 == "mar") || (caja2 == "perico")|| (caja2 == "barco")) {
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

        if ((caja3 == "arena") || (caja3 == "mar") || (caja3 == "perico")|| (caja3 == "barco")) {
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

        if ((caja4 == "arena") || (caja4 == "mar") || (caja4 == "perico")|| (caja4 == "barco")) {
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

        if ((caja5 == "arena") || (caja5 == "mar") || (caja5 == "perico")|| (caja5 == "barco")) {
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

        if ((caja6 == "arena") || (caja6 == "mar") || (caja6 == "perico")|| (caja6 == "barco")) {
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

        if ((caja7 == "arena") || (caja7 == "mar") || (caja7 == "perico")|| (caja7 == "barco")) {
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

        if ((caja8 == "arena") || (caja8 == "mar") || (caja8 == "perico")|| (caja8 == "barco")) {
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
