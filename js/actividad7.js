var cabecera =' ';
 var derecha = ' ';
 f_titulos();
 

var titulos = 'contesto';
numero_pagina(16);



function calificar(respuestas, soluciones, disabledClass) {
    var valor_pregunta = 10 / respuestas.length;
    var nota = 0;
    var index = 0;
    respuestas.forEach(function (elementId) {
        var select = document.getElementById(elementId);
        if (select.value.toLowerCase() == soluciones[index].toLowerCase()) {
            nota += valor_pregunta;
        }
        ;
        index++;
    });
    document.getElementById('txtNota').innerHTML = nota + ' / 10';
    $('html,body').animate({
        scrollTop: $("#nota").offset().top
    }, 2000);
    desabilitar_by_class(disabledClass);
    desabilitar_by_class('btnCalificar');
}

function restart_inputs(className) {
    clear_inputs_by_class(className);
    habilitar_by_class(className);
    document.getElementById('txtNota').innerHTML = ' / 10';

}


function verificar_contenido(answer, options) {
    result = false;
    //console.log(answer);
	respuesta = answer.trim();
	if(answer!=""&&answer!=" "){
	   for (var i = 0; i < options.length; i++) {
        // if (answer.indexOf(options[i]) > -1) {
        if (options[i].indexOf(answer) > -1) {
            result = true;
        }
    }
 }
    return result;
}


function comprobar_calificar_txt() {
    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
	console.log(respuestas);
	console.log(soluciones);
	valor_preg=valor_pregunta(respuestas);
	var nota =0;
	for (var i = 0; i < respuestas.length; i++) {
        if (verificar_contenido(respuestas[i].value.toLowerCase(), soluciones[i].value.toLowerCase().split('*'))) {
            respuestas[i].classList.add('valid');
            respuestas[i].classList.remove('no-valid');
			nota+= valor_preg;
        } else {
            respuestas[i].classList.add('no-valid');
            respuestas[i].classList.remove('valid');
        }
     }
	document.getElementById('txtNota').innerHTML=Math.round(nota);
    desabilitar_by_class('respuestas');
	
}

function valor_pregunta(respuestas){
	var valor = 10 /respuestas.length;
	return valor; 
}
