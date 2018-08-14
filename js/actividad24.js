var cabecera ='Palabras en la red';
var derecha = 'Un reto a mi inteligencia';
f_titulos();
var titulos = 'resuelve';
numero_pagina(85);

var correctas = {
    0: ['r','e', 'd'],
    1: ['u', 'e', 'n', 'd', 'e'],
    2: ['a', 'z','u','e','l','o'],
    3: ['t', 'r', 'ch','a'],
    4: ['i', 'b','u','r','ó','n'],
    5: ['c', 'a','g','r','e','j','o'],
    6: ['a', 'n','a'],
};
var respcorrec0 = 0,
    respcorrec1 = 0,
    respcorrec2 = 0,
    respcorrec3 = 0,
    respcorrec4 = 0,
    respcorrec5 = 0,
    respcorrec6 = 0;


function VerificarP() {
    for (var i = 0; i <= 2; i++) {

        if ((correctas[0][i]) == ($('#R' + [i] + '').val())) {
            respcorrec0 = respcorrec0 + 1;
            $('#R' + [i] + '').css("backgroundColor", "#58FA58");
            $('#R' + [i] + '').prop("disabled", true);
        } else {
            $('#R' + [i] + '').css("backgroundColor", "#FA5858");
            $('#R' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[1][i]) == ($('#D' + [i] + '').val())) {
            respcorrec1 = respcorrec1 + 1;
            $('#D' + [i] + '').css("backgroundColor", "#58FA58");
            $('#D' + [i] + '').prop("disabled", true);
        } else {
            $('#D' + [i] + '').css("backgroundColor", "#FA5858");
            $('#D' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 5; i++) {

        if ((correctas[2][i]) == ($('#A' + [i] + '').val())) {
            respcorrec2 = respcorrec2 + 1;
            $('#A' + [i] + '').css("backgroundColor", "#58FA58");
            $('#A' + [i] + '').prop("disabled", true);
        } else {
            $('#A' + [i] + '').css("backgroundColor", "#FA5858");
            $('#A' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 3; i++) {

        if ((correctas[3][i]) == ($('#T' + [i] + '').val())) {
            respcorrec3 = respcorrec3 + 1;
            $('#T' + [i] + '').css("backgroundColor", "#58FA58");
            $('#T' + [i] + '').prop("disabled", true);
        } else {
            $('#T' + [i] + '').css("backgroundColor", "#FA5858");
            $('#T' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 5; i++) {

        if ((correctas[4][i]) == ($('#P' + [i] + '').val())) {
            respcorrec4 = respcorrec4 + 1;
            $('#P' + [i] + '').css("backgroundColor", "#58FA58");
            $('#P' + [i] + '').prop("disabled", true);
        } else {
            $('#P' + [i] + '').css("backgroundColor", "#FA5858");
            $('#P' + [i] + '').prop("disabled", true);
        }

    }

    for (var i = 0; i <= 6; i++) {

        if ((correctas[5][i]) == ($('#C' + [i] + '').val())) {
            respcorrec5 = respcorrec5 + 1;
            $('#C' + [i] + '').css("backgroundColor", "#58FA58");
            $('#C' + [i] + '').prop("disabled", true);
        } else {
            $('#C' + [i] + '').css("backgroundColor", "#FA5858");
            $('#C' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 2; i++) {

        if ((correctas[6][i]) == ($('#S' + [i] + '').val())) {
            respcorrec6 = respcorrec6 + 1;
            $('#S' + [i] + '').css("backgroundColor", "#58FA58");
            $('#S' + [i] + '').prop("disabled", true);
        } else {
            $('#S' + [i] + '').css("backgroundColor", "#FA5858");
            $('#S' + [i] + '').prop("disabled", true);
        }

    }
    var subtotales;
    
     subtotales = parseInt(respcorrec0)+parseInt(respcorrec1) +parseInt(respcorrec2) + parseInt(respcorrec3) + parseInt(respcorrec4) + parseInt(respcorrec5)+parseInt(respcorrec6);
    
     if(subtotales < 9){
        alert("Debe intentar llenar al menos un recuadro");
    }
    else{
     var totales = ((subtotales-9) * 10) / 25;
    $('#txtNota').html(totales.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;
}
}
