var cabecera ='Palabras en la red';
var derecha = 'Un reto a mi inteligencia';
f_titulos();

var titulos = "completo";
$("#txtNota").html("0");
$("#n_pagina").html("85");

var act13 = [
    ['<table><tr><td><label>El hombre lanzó la </label></td><td><input type="text"  size="1" style="width:30px" class="respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="red"></td><td><label>y cogió muchos </label></td>'+
    '<td><input type="text" size="1" style="width:70px" class="respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="cangrejos*truchas*ranas"></td>'+
    '<td><label>, </label></td><td><input type="text" size="1" style="width:70px" class="respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="truchas*cangrejos*ranas"></td>'+
    '<td><label> y </label></td><td><input type="text" size="1" style="width:70px" class="respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="truchas*cangrejos*ranas"></td><td><label> .</label></td>'+
    '</tr></table>'
    ],
    ['<table ><tr><td><label>El ser humano pesca con el </label></td><td><input type="text"  size="1" style="width:70px" class="respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="anzuelo"></td><td><label>o también con una </label></td>'+
    '<td><input type="text" size="1" style="width:100px" class="respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="red"></td><td><label>.</label></td></tr></table>'
    ],
    ['<table ><tr><td><label>La </label></td><td><input type="text"  size="1" style="width:70px" class="respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="rana"></td><td><label>salta y nada y la </label></td>'+
    '<td><input type="text" size="1" style="width:100px" class="respuestas"><input type="hidden" style="color:blue" class="solucion" value="trucha"></td>'+
    '<td><label>nada.</label></td></tr></table>'
    ],
    ['<table><tr><td><label>La </label></td><td><input type="text"  size="1" style="width:70px" class="respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="trucha"></td><td><label>tiene aletas y el </label></td>'+
    '<td><input type="text" size="1" style="width:100px" class="respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="cangrejo"></td>'+
    '<td><label>tiene tenazas.</label></td></tr></table>  '
    ]
];


var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}