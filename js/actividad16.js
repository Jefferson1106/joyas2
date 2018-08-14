var cabecera ='A descubrir letras: t, T';
var derecha = 'A jugar con las palabras';
f_titulos();

var titulos = "marco";
$("#txtNota").html("0");
$("#n_pagina").html("41");

var correctas = {
    0: ['T', 'R', 'I', 'G', 'O'],
    1: ['A', 'T', 'O'],
    2: ['C', 'R', 'B', 'A','T','A'],
    3: ['E', 'J', 'A', 'D', 'O'],
    4: ['R', 'T','O','N'],
    5: ['C', 'I','N','T','U','R','N'],
    6: ['T', 'I','N'],
    7: ['I', 'B','U','R','O','N'],
    8: ['B', 'T','A','S'],
    9: ['C', 'S','A'],
};
var respcorrec0 = 0,
    respcorrec1 = 0,
    respcorrec2 = 0,
    respcorrec3 = 0,
    respcorrec4 = 0,
    respcorrec5 = 0,
    respcorrec6 = 0,
    respcorrec7 = 0,
    respcorrec8 = 0,
    respcorrec9 = 0;


function VerificarP() {
    for (var i = 0; i <= 4; i++) {

        if ((correctas[0][i]) == ($('#T' + [i] + '').val())) {
            respcorrec0 = respcorrec0 + 1;
            $('#T' + [i] + '').css("backgroundColor", "#58FA58");
            $('#T' + [i] + '').prop("disabled", true);
        } else {
            $('#T' + [i] + '').css("backgroundColor", "#FA5858");
            $('#T' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 2; i++) {

        if ((correctas[1][i]) == ($('#G' + [i] + '').val())) {
            respcorrec1 = respcorrec1 + 1;
            $('#G' + [i] + '').css("backgroundColor", "#58FA58");
            $('#G' + [i] + '').prop("disabled", true);
        } else {
            $('#G' + [i] + '').css("backgroundColor", "#FA5858");
            $('#G' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 5; i++) {

        if ((correctas[2][i]) == ($('#C' + [i] + '').val())) {
            respcorrec2 = respcorrec2 + 1;
            $('#C' + [i] + '').css("backgroundColor", "#58FA58");
            $('#C' + [i] + '').prop("disabled", true);
        } else {
            $('#C' + [i] + '').css("backgroundColor", "#FA5858");
            $('#C' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[3][i]) == ($('#H' + [i] + '').val())) {
            respcorrec3 = respcorrec3 + 1;
            $('#H' + [i] + '').css("backgroundColor", "#58FA58");
            $('#H' + [i] + '').prop("disabled", true);
        } else {
            $('#H' + [i] + '').css("backgroundColor", "#FA5858");
            $('#H' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 3; i++) {

        if ((correctas[4][i]) == ($('#R' + [i] + '').val())) {
            respcorrec4 = respcorrec4 + 1;
            $('#R' + [i] + '').css("backgroundColor", "#58FA58");
            $('#R' + [i] + '').prop("disabled", true);
        } else {
            $('#R' + [i] + '').css("backgroundColor", "#FA5858");
            $('#R' + [i] + '').prop("disabled", true);
        }

    }

    for (var i = 0; i <= 6; i++) {

        if ((correctas[5][i]) == ($('#X' + [i] + '').val())) {
            respcorrec5 = respcorrec5 + 1;
            $('#X' + [i] + '').css("backgroundColor", "#58FA58");
            $('#X' + [i] + '').prop("disabled", true);
        } else {
            $('#X' + [i] + '').css("backgroundColor", "#FA5858");
            $('#X' + [i] + '').prop("disabled", true);
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
    for (var i = 0; i <= 5; i++) {

        if ((correctas[7][i]) == ($('#Z' + [i] + '').val())) {
            respcorrec7 = respcorrec7 + 1;
            $('#Z' + [i] + '').css("backgroundColor", "#58FA58");
            $('#Z' + [i] + '').prop("disabled", true);
        } else {
            $('#Z' + [i] + '').css("backgroundColor", "#FA5858");
            $('#Z' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 3; i++) {

        if ((correctas[8][i]) == ($('#B' + [i] + '').val())) {
            respcorrec8 = respcorrec8 + 1;
            $('#B' + [i] + '').css("backgroundColor", "#58FA58");
            $('#B' + [i] + '').prop("disabled", true);
        } else {
            $('#B' + [i] + '').css("backgroundColor", "#FA5858");
            $('#B' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 2; i++) {

        if ((correctas[9][i]) == ($('#V' + [i] + '').val())) {
            respcorrec9 = respcorrec9 + 1;
            $('#V' + [i] + '').css("backgroundColor", "#58FA58");
            $('#V' + [i] + '').prop("disabled", true);
        } else {
            $('#V' + [i] + '').css("backgroundColor", "#FA5858");
            $('#V' + [i] + '').prop("disabled", true);
        }

    }
    var subtotales = parseInt(respcorrec0)+parseInt(respcorrec1) +parseInt(respcorrec2) + parseInt(respcorrec3) + parseInt(respcorrec4) + parseInt(respcorrec5)+parseInt(respcorrec6)+parseInt(respcorrec7)+parseInt(respcorrec8)+parseInt(respcorrec9);
    var totales = (subtotales * 10) / 46;
    $('#txtNota').html(totales.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;
}