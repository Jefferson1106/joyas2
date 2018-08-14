var cabecera ='Leo y me divierto';
var derecha = 'Risas y sonrisas';
f_titulos();

var titulos = "encuentro";
$("#txtNota").html("0");
$("#n_pagina").html("104");

var act13 = [
    ['<table class="table" ><tr><td><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calar</h1></td>'+
    '<td><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Carla"></td></tr></table>'
    ],
    ['<table class="table"> <tr><td><h3>&nbsp;&nbsp;&nbsp;quieren</h1></td>'+
    '<td><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Enrique"></td></tr></table>'
    ],
    ['<table class="table"><tr><td><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prisa</h1></td>'+
    '<td><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="París"></td></tr></table>'
    ],
    ['<table class="table" ><tr>'+
    '<td><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;riesgo</h1></td>'+
    '<td><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Sergio"></td></tr></table>'
    ],
    ['<table class="table" ><tr>'+
    '<td><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;poder</h1></td>'+
    '<td><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Pedro"></td></tr></table>'
    ],
    ['<table class="table" ><tr>'+
    '<td><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amor</h1></td>'+
    '<td><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Roma"></td></tr></table>'
    ],
    ['<table class="table" ><tr>'+
    '<td><h3>&nbsp;&nbsp;&nbsp;&nbsp;camino</h1></td>'+
    '<td><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Mónica"></td></tr></table>'
    ]

];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}