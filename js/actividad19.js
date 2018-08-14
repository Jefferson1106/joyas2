var cabecera ='Actividades de comprensión del texto';
var derecha = ' ';
f_titulos();

var titulos = 'encuentro';
numero_pagina(61);
              
function calcularNota(){
    var classNameElements = document.getElementsByClassName('word');
    Array.from(classNameElements).forEach(
        (currElement) => {
            var ce = currElement.classList.contains('wordFound');
            if(ce){
                contadorRespCorrectas = contadorRespCorrectas+1;
            }
            
        }

    );
    if(contadorRespCorrectas == classNameElements.length){
        document.getElementById('txtNota').innerHTML = 10.00;
    }else if(contadorRespCorrectas<4){
        alert('Aún te faltan encontrar '+(classNameElements.length-contadorRespCorrectas)+' palabras en la sopa de letras.');
    }
}

