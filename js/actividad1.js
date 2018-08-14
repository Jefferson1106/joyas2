
 var cabecera =' ';
var derecha = ' ';
f_titulos();
numero_pagina(6);


    $("#txtNota").html("0");
    $("#n_pagina").html("6");
    
    var testimg = [
        ["1", "img/i1_p6_act2.png"],
        ["2", "img/i2_p6_act2.png"], 
        ["3", "img/i3_p6_act2.png"],
        ["4", "img/i4_p6_act2.png"],
        ["5", "img/i5_p6_act2.png"],
        ["6", "img/i6_p6_act2.png"],
        ["7", "img/i7_p6_act2.png"],
        ["8", "img/i8_p6_act2.png"],
        ["9", "img/i9_p6_act2.png"],
        ["10","img/i10_p6_act2.png"],
    ]
    
    var CorrectasP = [
        ["1", "img/i1_p6_act2.png"],
        ["2", "img/i2_p6_act2.png"],
        ["3", "img/i5_p6_act2.png"],
        ["4", "img/i6_p6_act2.png"],
        ["5", "img/i8_p6_act2.png"],
        ["6", "img/i9_p6_act2.png"],
    ]
    
    finitimg();
    
    
    function finitimg() {
        var cajasImg = document.getElementsByClassName('imagen');
    
        testimg.sort(f_randomico);
        for (i = 0; i < cajasImg.length; i++) {
            $('#' + cajasImg[i].id).html('<img id='+testimg[i][1]+' class="img-responsive imgAcom" src="' + testimg[i][1] + '">');
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
    var respr1= 0;
    var respr2= 0;
    var respr3= 0;
    var respr4= 0;
    var respr5= 0;
    var respr6= 0;
    var respr7= 0;
    var respr8= 0;
    var respr9= 0;
    var respr10=0;

    var respri1= 0;
    var respri2= 0;
    var respri3= 0;
    var respri4= 0;
    var respri5= 0;
    var respri6= 0;
    var respri7= 0;
    var respri8= 0;
    var respri9= 0;
    var respri10=0;
    
    function calculoR() {
        var caja1 = $("div[id=caja_img1]").find('img')[0].id;
        if ($("#caja_img1").hasClass("seleccionCaja")) {
    
            if ((caja1 == "img/i1_p6_act2.png") || (caja1 == "img/i2_p6_act2.png") || (caja1 == "img/i5_p6_act2.png") || (caja1 == "img/i6_p6_act2.png") || (caja1 == "img/i8_p6_act2.png")|| (caja1 == "img/i9_p6_act2.png")) {
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
    
        var caja2 = $("div[id=caja_img2]").find('img')[0].id;
        if ($("#caja_img2").hasClass("seleccionCaja")) {
    
            if ((caja2 == "img/i1_p6_act2.png") || (caja2 == "img/i2_p6_act2.png") || (caja2 == "img/i5_p6_act2.png") || (caja2 == "img/i6_p6_act2.png") || (caja2 == "img/i8_p6_act2.png")|| (caja2 == "img/i9_p6_act2.png")) {
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
    
        var caja3 = $("div[id=caja_img3]").find('img')[0].id;
        if ($("#caja_img3").hasClass("seleccionCaja")) {
    
            if ((caja3 == "img/i1_p6_act2.png") || (caja3 == "img/i2_p6_act2.png") || (caja3 == "img/i5_p6_act2.png") || (caja3 == "img/i6_p6_act2.png") || (caja3 == "img/i8_p6_act2.png")|| (caja3 == "img/i9_p6_act2.png")) {
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
        var caja4 = $("div[id=caja_img4]").find('img')[0].id;
        if ($("#caja_img4").hasClass("seleccionCaja")) {
    
            if ((caja4 == "img/i1_p6_act2.png") || (caja4 == "img/i2_p6_act2.png") || (caja4 == "img/i5_p6_act2.png") || (caja4 == "img/i6_p6_act2.png") || (caja4 == "img/i8_p6_act2.png")|| (caja4 == "img/i9_p6_act2.png")) {
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
    
        var caja5 = $("div[id=caja_img5]").find('img')[0].id;
        if ($("#caja_img5").hasClass("seleccionCaja")) {
    
            if ((caja5 == "img/i1_p6_act2.png") || (caja5 == "img/i2_p6_act2.png") || (caja5 == "img/i5_p6_act2.png") || (caja5 == "img/i6_p6_act2.png") || (caja5 == "img/i8_p6_act2.png")|| (caja5 == "img/i9_p6_act2.png")) {
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
    
        var caja6 = $("div[id=caja_img6]").find('img')[0].id;
        if ($("#caja_img6").hasClass("seleccionCaja")) {
    
            if ((caja6 == "img/i1_p6_act2.png") || (caja6 == "img/i2_p6_act2.png") || (caja6 == "img/i5_p6_act2.png") || (caja6 == "img/i6_p6_act2.png") || (caja6 == "img/i8_p6_act2.png")|| (caja6 == "img/i9_p6_act2.png")) {
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
    
        var caja7 = $("div[id=caja_img7]").find('img')[0].id;
        if ($("#caja_img7").hasClass("seleccionCaja")) {
    
            if ((caja7 == "img/i1_p6_act2.png") || (caja7 == "img/i2_p6_act2.png") || (caja7 == "img/i5_p6_act2.png") || (caja7 == "img/i6_p6_act2.png") || (caja7 == "img/i8_p6_act2.png")|| (caja7 == "img/i9_p6_act2.png")) {
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

        var caja8 = $("div[id=caja_img8]").find('img')[0].id;
    if ($("#caja_img8").hasClass("seleccionCaja")) {

        if ((caja8 == "img/i1_p6_act2.png") || (caja8 == "img/i2_p6_act2.png") || (caja8 == "img/i5_p6_act2.png") || (caja8 == "img/i6_p6_act2.png") || (caja8 == "img/i8_p6_act2.png")|| (caja8 == "img/i9_p6_act2.png")) {
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

    var caja9 = $("div[id=caja_img9]").find('img')[0].id;
    if ($("#caja_img9").hasClass("seleccionCaja")) {

        if ((caja9 == "img/i1_p6_act2.png") || (caja9 == "img/i2_p6_act2.png") || (caja9 == "img/i5_p6_act2.png") || (caja9 == "img/i6_p6_act2.png") || (caja9 == "img/i8_p6_act2.png")|| (caja9 == "img/i9_p6_act2.png")) {
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

    var caja10 = $("div[id=caja_img10]").find('img')[0].id;
    if ($("#caja_img10").hasClass("seleccionCaja")) {

        if ((caja10 == "img/i1_p6_act2.png") || (caja10 == "img/i2_p6_act2.png") || (caja10 == "img/i5_p6_act2.png") || (caja10 == "img/i6_p6_act2.png") || (caja10 == "img/i8_p6_act2.png")|| (caja10 == "img/i9_p6_act2.png")) {
            respr10 = 1;

            $("#caja_img10").addClass('correcto')


        } else {
            respri10 = 1;
            $("#caja_img10").removeClass('correcto')
            $("#caja_img10").addClass('incorrecto')


        }

    } else {
        respr9 = 0;

    }
    
    var suma = parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4) + parseInt(respr5) + parseInt(respr6) + parseInt(respr7)+parseInt(respr8)+parseInt(respr9)+parseInt(respr10) ;
    var sumai = parseInt(respri1) + parseInt(respri2) + parseInt(respri3) + parseInt(respri4) + parseInt(respri5) + parseInt(respri6) + parseInt(respri7)+parseInt(respri8)+parseInt(respri9)+parseInt(respri10) ;

    if(suma < 1 && sumai< 1 ){
        alert("Debe escoger al menos 1 respuesta a la pregunta");
        
    }else{
        var NotaF = ((suma-sumai)    * 10) / 6;
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