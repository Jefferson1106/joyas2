var cabecera ='Actividades de comprensión del texto';
var derecha = ' ';
f_titulos();


var titulos = 'completo';
numero_pagina(71);

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