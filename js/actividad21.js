var cabecera ='Actividades de comprensión del texto';
var derecha = '';
f_titulos();
var titulos = "encuentro";
$("#txtNota").html("0");
$("#n_pagina").html("71");


var testimg = [
    ["1", "barco"],
    ["2", "velero"],
    ["3", "bote"],
    ["4", "balsa"],
    ["5", "carro"],
]
var CorrectasP = [
    ["1", "carro"],
]

var testimg1 = [
    ["1", "papaya"],
    ["2", "col"],
    ["3", "manzana"],
    ["4", "pera"],
    ["5", "piña"],
]
var CorrectasP1 = [
    ["1", "col"],
]
var testimg2 = [
    ["1", "mesa"],
    ["2", "cama"],
    ["3", "silla"],
    ["4", "borrador"],
    ["5", "armario"],
]
var CorrectasP2 = [
    ["1", "borrador"],
]

finitimg();


function finitimg() {
    var cajasImg = document.getElementsByClassName('imagen');

    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<span class="" id="' + testimg[i][1] + '">' + testimg[i][1] + '</span>');
    }

    var cajasImg1 = document.getElementsByClassName('imagen1');

    testimg1.sort(f_randomico);
    for (i = 0; i < cajasImg1.length; i++) {
        $('#' + cajasImg1[i].id).html('<span class="" id="' + testimg1[i][1] + '">' + testimg1[i][1] + '</span>');
    }

    var cajasImg2 = document.getElementsByClassName('imagen2');

    testimg2.sort(f_randomico);
    for (i = 0; i < cajasImg2.length; i++) {
        $('#' + cajasImg2[i].id).html('<span class="" id="' + testimg2[i][1] + '">' + testimg2[i][1] + '</span>');
    }
}


$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});
var respr1 =0;
var respr2=0;
var respr3=0;
var respr4=0;
var respr5=0;
var respr6=0;
var respr7=0;
var respr8=0;
var respr9=0;
var respr10=0;
var respr11=0;
var respr12=0;
var respr13=0;
var respr14=0;
var respr15=0;
var respri1=0;
var respri2 =0;
var respri3 =0;
var respri4=0;
var respri5=0;
var respri6=0;
var respri7=0;
var respri8=0;
var respri9=0;
var respri10=0;
var respri11=0;
var respri12=0;
var respri13=0;
var respri14=0;
var respri15=0;


function calculoR() {
    var caja1 = $("div[id=caja_img1]").find('span')[0].id;
    if ($("#caja_img1").hasClass("seleccionCaja")) {

        if ((caja1 == "carro")) {
            respr1 = 1;
            $("#caja_img1").addClass('correcto')
        } else {
            respri1 = 1;
            $("#caja_img1").removeClass('correcto')
            $("#caja_img1").addClass('incorrecto')

        }

    } else {
        respr1 = 0;

    }

    var caja2 = $("div[id=caja_img2]").find('span')[0].id;
    if ($("#caja_img2").hasClass("seleccionCaja")) {

        if ((caja2 == "carro")) {
            respr2 = 1;
            $("#caja_img2").addClass('correcto')

        } else {
            respri2 = 1;
            $("#caja_img2").removeClass('correcto')
            $("#caja_img2").addClass('incorrecto')


        }

    } else {
        respr2 = 0;

    }

    var caja3 = $("div[id=caja_img3]").find('span')[0].id;
    if ($("#caja_img3").hasClass("seleccionCaja")) {

        if ((caja3 == "carro") ) {
            respr3 = 1;
            $("#caja_img3").addClass('correcto')


        } else {
            respri3 = 1;
            $("#caja_img3").removeClass('correcto')
            $("#caja_img3").addClass('incorrecto')


        }

    } else {
        respr3 = 0;

    }
    var caja4 = $("div[id=caja_img4]").find('span')[0].id;
    if ($("#caja_img4").hasClass("seleccionCaja")) {

        if ((caja4 == "carro") ) {
            respr4 = 1;
            $("#caja_img4").addClass('correcto')


        } else {
            respri4 = 1;
            $("#caja_img4").removeClass('correcto')
            $("#caja_img4").addClass('incorrecto')


        }

    } else {
        respr4 = 0;

    }

    var caja5 = $("div[id=caja_img5]").find('span')[0].id;
    if ($("#caja_img5").hasClass("seleccionCaja")) {

        if ((caja5 == "carro")) {
            respr5 = 1;

            $("#caja_img5").addClass('correcto')


        } else {
            respri5 = 1;
            $("#caja_img5").removeClass('correcto')
            $("#caja_img5").addClass('incorrecto')


        }

    } else {
        respr5 = 0;

    }

    var caja6 = $("div[id=caja_img6]").find('span')[0].id;
    if ($("#caja_img6").hasClass("seleccionCaja")) {

        if ((caja6 == "col")) {
            respr6 = 1;

            $("#caja_img6").addClass('correcto')


        } else {
            respri6 = 1;
            $("#caja_img6").removeClass('correcto')
            $("#caja_img6").addClass('incorrecto')


        }

    } else {
        respr6 = 0;

    }

    var caja7 = $("div[id=caja_img7]").find('span')[0].id;
    if ($("#caja_img7").hasClass("seleccionCaja")) {

        if ((caja7 == "col")) {
            respr7 = 1;

            $("#caja_img7").addClass('correcto')


        } else {
            respri7 = 1;
            $("#caja_img7").removeClass('correcto')
            $("#caja_img7").addClass('incorrecto')


        }

    } else {
        respr7 = 0;

    }
    var caja8 = $("div[id=caja_img8]").find('span')[0].id;
    if ($("#caja_img8").hasClass("seleccionCaja")) {

        if ((caja8 == "col")) {
            respr8 = 1;

            $("#caja_img8").addClass('correcto')


        } else {
            respri8 = 1;
            $("#caja_img8").removeClass('correcto')
            $("#caja_img8").addClass('incorrecto')


        }

    } else {
        respr8 = 0;

    }
    var caja9 = $("div[id=caja_img9]").find('span')[0].id;
    if ($("#caja_img9").hasClass("seleccionCaja")) {

        if ((caja9 == "col")) {
            respr9 = 1;

            $("#caja_img9").addClass('correcto')


        } else {
            respri9 = 1;
            $("#caja_img9").removeClass('correcto')
            $("#caja_img9").addClass('incorrecto')


        }

    } else {
        respr9 = 0;

    }
    var caja10 = $("div[id=caja_img10]").find('span')[0].id;
    if ($("#caja_img10").hasClass("seleccionCaja")) {

        if ((caja10 == "col")) {
            respr10 = 1;

            $("#caja_img10").addClass('correcto')


        } else {
            respri10 = 1;
            $("#caja_img10").removeClass('correcto')
            $("#caja_img10").addClass('incorrecto')


        }

    } else {
        respr10 = 0;

    }
    var caja11 = $("div[id=caja_img11]").find('span')[0].id;
    if ($("#caja_img11").hasClass("seleccionCaja")) {

        if ((caja11 == "borrador")) {
            respr11 = 1;

            $("#caja_img11").addClass('correcto')


        } else {
            respri11 = 1;
            $("#caja_img11").removeClass('correcto')
            $("#caja_img11").addClass('incorrecto')


        }

    } else {
        respr11 = 0;

    }

    var caja12 = $("div[id=caja_img12]").find('span')[0].id;
    if ($("#caja_img12").hasClass("seleccionCaja")) {

        if ((caja12 == "borrador")) {
            respr12 = 1;

            $("#caja_img12").addClass('correcto')


        } else {
            respri12 = 1;
            $("#caja_img12").removeClass('correcto')
            $("#caja_img12").addClass('incorrecto')


        }

    } else {
        respr12 = 0;

    }
    var caja13 = $("div[id=caja_img13]").find('span')[0].id;
    if ($("#caja_img13").hasClass("seleccionCaja")) {

        if ((caja13 == "borrador")) {
            respr13 = 1;

            $("#caja_img13").addClass('correcto')


        } else {
            respri13 = 1;
            $("#caja_img13").removeClass('correcto')
            $("#caja_img13").addClass('incorrecto')


        }

    } else {
        respr13 = 0;

    }
    var caja14 = $("div[id=caja_img14]").find('span')[0].id;
    if ($("#caja_img14").hasClass("seleccionCaja")) {

        if ((caja14 == "borrador")) {
            respr14 = 1;

            $("#caja_img14").addClass('correcto')


        } else {
            respri14 = 1;
            $("#caja_img14").removeClass('correcto')
            $("#caja_img14").addClass('incorrecto')


        }

    } else {
        respr14 = 0;

    }
    var caja15 = $("div[id=caja_img15]").find('span')[0].id;
    if ($("#caja_img15").hasClass("seleccionCaja")) {

        if ((caja15 == "borrador")) {
            respr15 = 1;

            $("#caja_img15").addClass('correcto')


        } else {
            respri15 = 1;
            $("#caja_img15").removeClass('correcto')
            $("#caja_img15").addClass('incorrecto')


        }

    } else {
        respr15 = 0;

    }


    
    var suma = parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4) + parseInt(respr5) +parseInt(respr6) +parseInt(respr7)+ parseInt(respr8) +parseInt(respr9)+ parseInt(respr10)+ parseInt(respr11)+ parseInt(respr12)+ parseInt(respr13)+ parseInt(respr14)+ parseInt(respr15) ;
    var sumai = parseInt(respri1) + parseInt(respri2) + parseInt(respri3) + parseInt(respri4) + parseInt(respri5) +parseInt(respri6) +parseInt(respri7)+ parseInt(respri8) +parseInt(respri9)+ parseInt(respri10)+ parseInt(respri11)+ parseInt(respri12)+ parseInt(respri13)+ parseInt(respri14)+ parseInt(respri15) ;
    
    if(suma < 1 && sumai< 1 ){
        alert("Debe escoger al menos 1 respuesta a la pregunta");
        
    }
    else{
    
    var NotaF = ((suma-sumai) * 10)/ 3;
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