var cabecera ='A descubrir letras: l, L';
var derecha = 'A jugar con las palabras';
f_titulos();

var titulos = 'completo';
numero_pagina(33);

var correctas = {
    0: ['Z', 'O', 'R', 'R', 'A'],
    1: ['V', 'E', 'N', 'A', 'D','O'],
    2: ['C', 'N', 'J', 'O'],
    3: ['T', 'R', 'T', 'U', 'G','A'],
    4: ['E', 'Y'],
    5: ['A', 'L','L','O'],
    6: ['E', 'O','N'],
    7: ['C', 'O','C'],
};
var respcorrec0 = 0,
    respcorrec1 = 0,
    respcorrec2 = 0,
    respcorrec3 = 0,
    respcorrec4 = 0,
    respcorrec5 = 0,
    respcorrec6 = 0,
    respcorrec7 = 0;


function VerificarP() {
    for (var i = 0; i <= 4; i++) {

        if ((correctas[0][i]) == ($('#Z' + [i] + '').val())) {
            respcorrec0 = respcorrec0 + 1;
            $('#Z' + [i] + '').css("backgroundColor", "#58FA58");
            $('#Z' + [i] + '').prop("disabled", true);
        } else {
            $('#Z' + [i] + '').css("backgroundColor", "#FA5858");
            $('#Z' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 5; i++) {

        if ((correctas[1][i]) == ($('#V' + [i] + '').val())) {
            respcorrec1 = respcorrec1 + 1;
            $('#V' + [i] + '').css("backgroundColor", "#58FA58");
            $('#V' + [i] + '').prop("disabled", true);
        } else {
            $('#V' + [i] + '').css("backgroundColor", "#FA5858");
            $('#V' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 3; i++) {

        if ((correctas[2][i]) == ($('#C' + [i] + '').val())) {
            respcorrec2 = respcorrec2 + 1;
            $('#C' + [i] + '').css("backgroundColor", "#58FA58");
            $('#C' + [i] + '').prop("disabled", true);
        } else {
            $('#C' + [i] + '').css("backgroundColor", "#FA5858");
            $('#C' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 5; i++) {

        if ((correctas[3][i]) == ($('#T' + [i] + '').val())) {
            respcorrec3 = respcorrec3 + 1;
            $('#T' + [i] + '').css("backgroundColor", "#58FA58");
            $('#T' + [i] + '').prop("disabled", true);
        } else {
            $('#T' + [i] + '').css("backgroundColor", "#FA5858");
            $('#T' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 1; i++) {

        if ((correctas[4][i]) == ($('#R' + [i] + '').val())) {
            respcorrec4 = respcorrec4 + 1;
            $('#R' + [i] + '').css("backgroundColor", "#58FA58");
            $('#R' + [i] + '').prop("disabled", true);
        } else {
            $('#R' + [i] + '').css("backgroundColor", "#FA5858");
            $('#R' + [i] + '').prop("disabled", true);
        }

    }

    for (var i = 0; i <= 3; i++) {

        if ((correctas[5][i]) == ($('#G' + [i] + '').val())) {
            respcorrec5 = respcorrec5 + 1;
            $('#G' + [i] + '').css("backgroundColor", "#58FA58");
            $('#G' + [i] + '').prop("disabled", true);
        } else {
            $('#G' + [i] + '').css("backgroundColor", "#FA5858");
            $('#G' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 2; i++) {

        if ((correctas[6][i]) == ($('#L' + [i] + '').val())) {
            respcorrec6 = respcorrec6 + 1;
            $('#L' + [i] + '').css("backgroundColor", "#58FA58");
            $('#L' + [i] + '').prop("disabled", true);
        } else {
            $('#L' + [i] + '').css("backgroundColor", "#FA5858");
            $('#L' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 2; i++) {

        if ((correctas[7][i]) == ($('#F' + [i] + '').val())) {
            respcorrec7 = respcorrec7 + 1;
            $('#F' + [i] + '').css("backgroundColor", "#58FA58");
            $('#F' + [i] + '').prop("disabled", true);
        } else {
            $('#F' + [i] + '').css("backgroundColor", "#FA5858");
            $('#F' + [i] + '').prop("disabled", true);
        }

    }
    var subtotales = parseInt(respcorrec0)+parseInt(respcorrec1) +parseInt(respcorrec2) + parseInt(respcorrec3) + parseInt(respcorrec4) + parseInt(respcorrec5)+parseInt(respcorrec6)+parseInt(respcorrec7);
    var totales = ((subtotales-12) * 10) / 21;
    $('#txtNota').html(totales.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;
}