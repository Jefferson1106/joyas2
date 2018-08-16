
var cabecera ='';
 var derecha = '';
 f_titulos(); 

$("#txtNota").html("0");
$("#n_pagina").html("6");

var testimg = [
    ["1", "triste"],
    ["2", "feliz"],
    ["3", "aburrido"],
    ["4", "alegre"], 
    ["5", "asustado"],
    ["6", "enojado"],
    ["7", "asombrado"],
]

var CorrectasP = [
    ["1", "alegre"],
    ["2", "feliz"],
    ["3", "asombrado"],
]

finitimg();


function finitimg() {
    var cajasImg = document.getElementsByClassName('imagen');

    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<span class="" id="' + testimg[i][1] + '">' + testimg[i][1] + '</span>');
    }
}

var respr=0;
var respri=0;


$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});


function calculoR() {
    var caja1 = $("div[id=caja_img1]").find('span')[0].id;
    if ($("#caja_img1").hasClass("seleccionCaja")) {

        if ((caja1 == "alegre") || (caja1 == "feliz") || (caja1 == "asombrado")) {
            respr = respr+1;
            $("#caja_img1").addClass('correcto')
        } else {
            respri=respri+1;
            $("#caja_img1").removeClass('correcto')
            $("#caja_img1").addClass('incorrecto')

        }

    } else {
        respr= 0;

    }

    var caja2 = $("div[id=caja_img2]").find('span')[0].id;
    if ($("#caja_img2").hasClass("seleccionCaja")) {

        if ((caja2 == "alegre") || (caja2 == "feliz") || (caja2 == "asombrado")) {
            respr = respr+1;
            $("#caja_img2").addClass('correcto')

        } else {
            respri = respri+1;
            $("#caja_img2").removeClass('correcto')
            $("#caja_img2").addClass('incorrecto')


        }

    } else {
        respr2 = 0;

    }

    var caja3 = $("div[id=caja_img3]").find('span')[0].id;
    if ($("#caja_img3").hasClass("seleccionCaja")) {

        if ((caja3 == "alegre") || (caja3 == "feliz") || (caja3 == "asombrado")) {
            respr = respr+1;
            $("#caja_img3").addClass('correcto')


        } else {
            respri = respri+1;
            $("#caja_img3").removeClass('correcto')
            $("#caja_img3").addClass('incorrecto')


        }

    } else {
        respr3 = 0;

    }
    var caja4 = $("div[id=caja_img4]").find('span')[0].id;
    if ($("#caja_img4").hasClass("seleccionCaja")) {

        if ((caja4 == "alegre") || (caja4 == "feliz") || (caja4 == "asombrado")) {
            respr = respr+1;
            $("#caja_img4").addClass('correcto')


        } else {
            respri = respri+1;
            $("#caja_img4").removeClass('correcto')
            $("#caja_img4").addClass('incorrecto')


        }

    } else {
        respr4 = 0;

    }

    var caja5 = $("div[id=caja_img5]").find('span')[0].id;
    if ($("#caja_img5").hasClass("seleccionCaja")) {

        if ((caja5 == "alegre") || (caja5 == "feliz") || (caja5 == "asombrado")) {
            respr = respr+1;

            $("#caja_img5").addClass('correcto')


        } else {
            respri = respri+1;
            $("#caja_img5").removeClass('correcto')
            $("#caja_img5").addClass('incorrecto')


        }

    } else {
        respr5 = 0;

    }

    var caja6 = $("div[id=caja_img6]").find('span')[0].id;
    if ($("#caja_img6").hasClass("seleccionCaja")) {

        if ((caja6 == "alegre") || (caja6 == "feliz") || (caja6 == "asombrado")) {
            respr = respr+1;

            $("#caja_img6").addClass('correcto')


        } else {
            respri = respri+1;
            $("#caja_img6").removeClass('correcto')
            $("#caja_img6").addClass('incorrecto')


        }

    } else {
        respr6 = 0;

    }

    var caja7 = $("div[id=caja_img7]").find('span')[0].id;
    if ($("#caja_img7").hasClass("seleccionCaja")) {

        if ((caja7 == "alegre") || (caja7 == "feliz") || (caja7 == "asombrado")) {
            respr = respr+1;

            $("#caja_img7").addClass('correcto')


        } else {
            respri = respri+1;
            $("#caja_img7").removeClass('correcto')
            $("#caja_img7").addClass('incorrecto')


        }

    } else {
        respr7 = 0;

    }

    if(respr < 1 && respri< 1 ){
        alert("Debe escoger al menos 1 respuesta a la pregunta");
        
    }else{

    var suma = (respr - respri) ;
    var NotaF = (suma * 10) / 3
    if( NotaF<0)
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
}
