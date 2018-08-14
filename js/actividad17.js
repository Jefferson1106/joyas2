var cabecera ='A descubrir letras: v, V y b, B';
var derecha = 'A jugar con las palabras';
f_titulos();

var titulos = 'completo';
numero_pagina(48);

var act13 = [
    [' <table ><tr width="500"><td width="500" colspan="5"><img src="img/i1_p48_act_2.jpg" ></td></tr><tr><td ><label align="center">o</label> '+
    '</td><td ><input type="text"  maxlength="1" style="text-align:center " class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="v">'+
    '</td><td ><input type="text"  maxlength="1"   class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="e"></td><td ><label align="center">j</label>'+
    '</td><td ><input type="text"  maxlength="1"  class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="a">'+
    '</td></tr></table>'
    ],
    ['<table ><tr width="500"><td width="500" colspan="6"><img src="img/i2_p48_act_2.jpg" ></td></tr><tr>'+
    '<tr><td ><input type="text"  maxlength="1 " style="width:35px;height:30px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="B">'+
    '</td><td ><label align="center">e</label></td><td ><label align="center">n</label></td><td >'+
    '<input type="text"  maxlength="1" style="width:35px;height:30px"  class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="i"></td><td ><label align="center">t</label>'+
    '</td><td ><input type="text"  maxlength="10" style="width:35px;height:30px"  class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="o"></td></tr></tr></table>'
    ],
    ['<table ><tr width="500"><td width="500" colspan="6"><img src="img/i3_p48_act_2.jpg" ></td></tr>'+
    '<tr><tr><td><input type="text"  maxlength="1" style="width:35px;height:30px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="b">'+
    '</td><td ><input type="text"  maxlength="1" style="width:35px;height:30px"  class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="a">'+
    '</td><td ><label align="center">s</label></td><td ><label align="center">t</label>'+
    '</td><td ><input type="text"  maxlength="1" style="width:35px;height:30px"  class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="ó"></td><td ><label align="center">n</label>'+
    '</td></tr></tr></table>'
    ],
    ['<table ><tr width="500"><td width="500" colspan="4"><img src="img/i4_p48_act_2.jpg" ></td></tr><tr><tr><td >'+
    '<input type="text"  maxlength="1" style="width:35px;height:30px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="l"></td><td ><label align="center">o</label>'+
    '</td><td ><label align="center">b</label></td><td >'+
    '<input type="text"  maxlength="1" style="width:35px;height:30px"  class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="o"></td></tr></tr></table>'
    ],
    ['<table ><tr width="500"><td width="500" colspan="8"><img src="img/i5_p48_act_2.jpg" ></td></tr><tr><tr><td ><label align="center">s</label>'+
    '</td><td ><label align="center">o</label></td><td ><label align="center">m</label></td><td >'+
    '<input type="text"  maxlength="1" style="width:35px;height:30px"  class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="b"></td><td ><label align="center">r</label>'+
    '</td><td ><input type="text"  maxlength="10" style="width:35px;height:30px"  class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="e"></td><td ><label align="center">r</label>'+
    '</td><td ><input type="text"  maxlength="10" style="width:35px;height:30px"  class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="o"></td></tr></tr></table>'
    ],
    ['<table ><tr width="500"><td width="500" colspan="6"><img src="img/i6_p48_act_2.jpg" ></td></tr><tr><tr><td >'+
    '<input type="text"  maxlength="1" style="width:35px;height:30px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="v"><td >'+
    '<input type="text"  maxlength="1" style="width:35px;height:30px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="e"></td><td >'+
    '<label align="center">n</label></td><td ><label align="center">a</label></td><td ><label align="center">d</label>'+
    '</td><td ><input type="text"  maxlength="1" style="width:35px;height:30px"  class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="o"></td></tr></tr></table>'
    ]
];


var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}