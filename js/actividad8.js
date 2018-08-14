var cabecera =' ';
 var derecha = ' ';
 f_titulos();


var titulos = 'encierro';
numero_pagina(16);



    var persCuento = [];
    var resp_correctas = [];
    var validador ;
    var incorrecto;
    var contador_resp_cor = 0;
    var contador_resp_incor = 0;
    var contador_resp_cor_img = 0;
    var contador_resp_incor_img = 0;
    var cajas = document.getElementsByClassName('cajasTexto');
    var testimg = ['img/i1_p16_act2.png',
    'img/i2_p16_act2.png',
    'img/i3_p16_act2.png',
    'img/i4_p16_act2.png']

    finitimg();
    
    
    function finitimg(){
        var cajasImg = document.getElementsByClassName('imagen');
        
        testimg.sort(f_randomico);
        for (i = 0; i < cajasImg.length; i++) {
            
            $('#'+cajasImg[i].id).html('<img class="img-responsive imgAcom" src="'+ testimg[i] +'" alt="' + testimg[i] + '" width="227px" height="180px">');
        } 
    }
    
        function bloquearElemento(sel,isImg){ //sel 0 deseleccionado, 1 seleccionado
            var operacion ;
            var operacion_letras = contador_resp_cor+contador_resp_incor;
            var operacion_img = contador_resp_cor_img+contador_resp_incor_img;
            var num_valid;
            if(isImg == 1){
                operacion = operacion_img;
                num_valid =1;
            }
            if(operacion==num_valid){
                if(sel == 0){
                    return true;
                }         
            }
            else{
                return false;
            }
        }
    
        function validaArray(sel,ca,isImg){
            var validador_array ;
            
            if(isImg == 1){ //1 isImg 0 noImg
                if(ca=='img/i2_p16_act2.png'){ //correcto
                    validador=2;
                }else{
                    validador = -1;
                    
                }
                
            } else if(isImg==0){
                validador_array = resp_correctas.indexOf(ca);
                validador = validador_array;
            }
    
            if(sel == 1){
                if(validador!= -1){ //-1 no pertenece; != pertenece
                    if(isImg==1){
                        contador_resp_cor_img = contador_resp_cor_img+1;
                    }
                    
                }else if(validador== -1){
                    if(isImg==1){
                        contador_resp_incor_img=contador_resp_incor_img+1;
                    }
                    
                }    
            }else{
                if(validador != -1){
                    if(isImg==1){
                        contador_resp_cor_img = contador_resp_cor_img-1;
                    }
                    
                }else if(validador == -1){
                    if(isImg==1){
                        contador_resp_incor_img=contador_resp_incor_img-1;
                    } 
                }  
            }    
        }
    
        $(document).ready(function(){
   
        var seleccion = {
            imgSel1 : 0,
            imgSel2 : 0,
            imgSel3 : 0,
            imaSel4 : 0,
            imaSel5 : 0,
            imaSel6 : 0,
            imaSel7 : 0,
            imaSel8 : 0,
            imaSel9 : 0,
            imaSel10 : 0,   
        }
         
    
    
        var esImg = 1; //1 si es imagen 0 no es imagen
        $("div[id=caja_img1]").click(function(){
            var imdiv = $("div[id=caja_img1]").find('img')[0].alt;
            incorrecto='div[id=caja_img1]';
            if(!bloquearElemento(seleccion.imgSel1,1)){
                if(seleccion.imgSel1 == 0){
                    $("div[id=caja_img1]").addClass('selecImg');
                    $("div[id=caja_img1]").removeClass('deselecImg');
                    seleccion.imgSel1 = seleccion.imgSel1+1;
                    validaArray(seleccion.imgSel1,imdiv,esImg);
                }else {
                    $("div[id=caja_img1]").addClass('deselecImg');
                    $("div[id=caja_img1]").removeClass('selecImg');
                    seleccion.imgSel1 = seleccion.imgSel1-1;
                    validaArray(seleccion.imgSel1,imdiv,esImg);
                }
            }
            
            
            
        });
        $("div[id=caja_img2]").click(function(){
            var imdiv = $("div[id=caja_img2]").find('img')[0].alt;
            incorrecto='div[id=caja_img2]';
            if(!bloquearElemento(seleccion.imgSel2,1)){
                if(seleccion.imgSel2 == 0){
                    $("div[id=caja_img2]").addClass('selecImg');
                    $("div[id=caja_img2]").removeClass('deselecImg');
                    seleccion.imgSel2 = seleccion.imgSel2+1;
                    validaArray(seleccion.imgSel2,imdiv,esImg);
                }else {
                    $("div[id=caja_img2]").addClass('deselecImg');
                    $("div[id=caja_img2]").removeClass('selecImg');
                    seleccion.imgSel2 = seleccion.imgSel2-1;
                    validaArray(seleccion.imgSel2,imdiv,esImg);
                }
            }
        });
        $("div[id=caja_img3]").click(function(){
            var imdiv = $("div[id=caja_img3]").find('img')[0].alt;
            incorrecto='div[id=caja_img3]';
            if(!bloquearElemento(seleccion.imgSel3,1)){
                if(seleccion.imgSel3 == 0){
                    $("div[id=caja_img3]").addClass('selecImg');
                    $("div[id=caja_img3]").removeClass('deselecImg');
                    seleccion.imgSel3 = seleccion.imgSel3+1;
                    validaArray(seleccion.imgSel3,imdiv,esImg);
                }else {
                    $("div[id=caja_img3]").addClass('deselecImg');
                    $("div[id=caja_img3]").removeClass('selecImg');
                    seleccion.imgSel3 = seleccion.imgSel3-1;
                    validaArray(seleccion.imgSel3,imdiv,esImg);
                }
            }
        });

        $("div[id=caja_img4]").click(function(){
            var imdiv = $("div[id=caja_img4]").find('img')[0].alt;
            incorrecto='div[id=caja_img4]';
            if(!bloquearElemento(seleccion.imaSel4,1)){
                if(seleccion.imaSel4 == 0){
                    $("div[id=caja_img4]").addClass('selecImg');
                    $("div[id=caja_img4]").removeClass('deselecImg');
                    seleccion.imaSel4 = seleccion.imaSel4+1;
                    validaArray(seleccion.imaSel4,imdiv,esImg);
                }else {
                    $("div[id=caja_img4]").addClass('deselecImg');
                    $("div[id=caja_img4]").removeClass('selecImg');
                    seleccion.imaSel4 = seleccion.imaSel4-1;
                    validaArray(seleccion.imaSel4,imdiv,esImg);
                }
            }
        });

        $("div[id=caja_img5]").click(function(){
            var imdiv = $("div[id=caja_img5]").find('img')[0].alt;
            incorrecto='div[id=caja_img5]';
            if(!bloquearElemento(seleccion.imaSel4,1)){
                if(seleccion.imaSel4 == 0){
                    $("div[id=caja_img4]").addClass('selecImg');
                    $("div[id=caja_img4]").removeClass('deselecImg');
                    seleccion.imaSel4 = seleccion.imaSel4+1;
                    validaArray(seleccion.imaSel4,imdiv,esImg);
                }else {
                    $("div[id=caja_img4]").addClass('deselecImg');
                    $("div[id=caja_img4]").removeClass('selecImg');
                    seleccion.imaSel4 = seleccion.imaSel4-1;
                    validaArray(seleccion.imaSel4,imdiv,esImg);
                }
            }
        });
        
        

    });
    
    function calificar()
    {
        
        var respuestas = {
            sum_resp : contador_resp_cor+contador_resp_incor, 
            sum_resp_img : contador_resp_cor_img+contador_resp_incor_img, 
            tot_correctas : resp_correctas.length+1,//se suma uno porque es uno mas de imagenes
            result_test : contador_resp_cor+contador_resp_cor_img,
            result_sobre : 10  
    
        }
    
        if(respuestas.sum_resp_img < 1){
            alert("Debe escoger 1 respuesta a la pregunta");
            
        }else{
            var calculo = (respuestas.result_test * respuestas.result_sobre )/ respuestas.tot_correctas
            $('#txtNota').html(calculo.toFixed(2)+' ');
            if(validador == -1){
                
                $(incorrecto).removeClass('selecImg');
                $(incorrecto).addClass('incoImg');
               
            }
        }
    }
    