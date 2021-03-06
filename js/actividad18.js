var cabecera ='Busco el personaje';
var derecha = 'Un reto a mi inteligencia';
f_titulos();

var titulos = 'uno';
numero_pagina(49);

var resp_cor_len3_act13_p14 = {
    inicio: ["La cebra es un burrito con pijama.","img/i1_p49_act1.jpg"],
    inicio2: ["El avestruz pone huevos grandes y blancos.","img/i2_p49_act1.jpg"],
    desarrollo: ["El vestido de las ovejas es de lana.","img/i3_p49_act1.jpg"],
    desarollo2: [ "El caballo relincha y la vaca muge.","img/i4_p49_act1.jpg"],
    final: ["El vestido del pavo es de plumas.","img/i5_p49_act1.jpg"],
    final2: ["El gavilán vuela de día y el búho vuela de noche.","img/i6_p49_act1.jpg"],

}
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i1_p49_act1.jpg', 'img/i2_p49_act1.jpg', 'img/i3_p49_act1.jpg', 'img/i4_p49_act1.jpg','img/i5_p49_act1.jpg','img/i6_p49_act1.jpg'];
var loadTxt = ['La cebra es un burrito con pijama.', 'El avestruz pone huevos grandes y blancos.', 'El vestido de las ovejas es de lana.', 'El caballo relincha y la vaca muge.','El vestido del pavo es de plumas.','El gavilán vuela de día y el búho vuela de noche.'];
var divs = $(".imagen, .texto");
var cont_resp_cor = {};
var divsImg, divsTxt;
var indice;
var contador_nota = 0;



initElementos("imagen", loadImg);
initElementos("texto", loadTxt);
insertDraggable();
enviarEventosListener("caja_img1", "caja_txt1"); //caja1 img y texto
enviarEventosListener("caja_img2", "caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img3", "caja_txt3"); //caja1 img y texto
enviarEventosListener("caja_img4", "caja_txt4"); //caja1 img y texto
enviarEventosListener("caja_img5", "caja_txt5"); //caja1 img y texto
enviarEventosListener("caja_img6", "caja_txt6"); //caja1 img y texto

function genIdRandom() {
    //genera un Id Aleatorio en base a milisegundos para que no se repita
    var d = new Date();
    var a = d.getSeconds();
    var b = d.getMilliseconds();

    return a * b;
}

function enviarEventosListener(id, id2) {
    document.getElementById(id).addEventListener('dragstart', function() {
        dragStart(id);
    });
    document.getElementById(id2).addEventListener('drop', function() {
        onDrop(id2, divsImg);
    });
    document.getElementById(id).addEventListener('drop', function() {
        onDropReturn(id);
    });
    document.getElementById('bt_comprobar').addEventListener('click', contarRespCorrectaDnD);

}

function onDropReturn(id) {
    divsImg = $('#' + id).find("img")[0].alt;
    var objetoLength = Object.keys(cont_resp_cor).length;
    var objComparar = Object.assign({}, cont_resp_cor);

    for (i = 0; i < objetoLength; i++) {

        if (Object.values(objComparar)[i].indexOf(divsImg) != -1) {

            indice = Object.keys(objComparar)[i];
            delete cont_resp_cor[indice];

        }

    }

}

function dragStart(id) {
    divsImg = $('#' + id).find("img")[0].alt;

}

function insertaParOnDrop(id) {
    divsTxt = $('#' + id).find("span").text();

    var prop = Object.keys(cont_resp_cor);

    cont_resp_cor[genIdRandom()] = [divsTxt, divsImg];

}

function onDrop(id, divsImg) {
    var objetoLength = Object.keys(cont_resp_cor).length;
    var contador = 0;
    if (objetoLength == 0) {
        insertaParOnDrop(id);
    } else {
        for (i = 0; i < objetoLength; i++) {
            if (Object.values(cont_resp_cor)[i].indexOf(divsImg) != -1) {
                contador = contador + 1;

            }

        }
        if (contador == 0) {
            insertaParOnDrop(id);
        }
    }
}

function initElementos(classDiv, arrayElement) { //Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
    var cajas = document.getElementsByClassName(classDiv);
    arrayElement.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        if (classDiv == "imagen") {
            $('#' + cajas[i].id).html('<img class="center"  src="' + arrayElement[i] + '" alt="' + arrayElement[i] + '"   id="img' + [i] + '">');
        } else if (classDiv == "texto") {
            $('#' + cajas[i].id).html('<span class= "cajas-cuentos"  id="' + arrayElement[i] + '">' + arrayElement[i] + '</span>');
        }

    }
}

function insertDraggable() {


    for (i = 0; i < divs.length; i++) {
        $('#' + divs[i].id).attr({
            "ondrop": "drop(event)",
            "ondragover": "allowDrop(event)"
        });
    }
    for (i = 0; i < divs.find("img").length; i++) {
        $('#img' + i).attr({
            "draggable": "true",
            "ondragstart": "drag(event)"
        });

    }
    /*     for(i=0; i< divs.find("span").length; i++){
            $('#'+divs.find("span")[i].id).attr({
                "draggable" : "true",
                "ondragstart" : "drag(event)"
            });
                
        } */





}

function contarRespCorrectaDnD() {
    var arrayCorrestarColorear = [];

    //i=respcorrectas j= a comprobar
    for (var i = 0; i < Object.values(resp_cor_len3_act13_p14).length; i++) {
        for (j = 0; j < Object.values(cont_resp_cor).length; j++) {
            if (JSON.stringify(Object.values(resp_cor_len3_act13_p14)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])) {
                contador_nota = contador_nota + 1;
                arrayCorrestarColorear.push(Object.values(cont_resp_cor)[j][0]);
            } else {
                $('.texto').addClass('incorrecto')
            }
        }
    }
    for (i = 0; i < arrayCorrestarColorear.length; i++) {
        var id = document.getElementById(arrayCorrestarColorear[i]).parentNode.id;
        document.getElementById(id).style.borderColor = 'green';


    }
    calcularNotaGeneral(
        6,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 10;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta');

    } else 
    {
        var calculo = (result_sobre * r_correctas) / total_nota
        $('#txtNota').html(calculo.toFixed(2) + ' ');
        document.getElementById('bt_comprobar').disabled = true;
    }
    
    //setTimeout('document.location.reload()',tiempoReload)

}