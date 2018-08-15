
var cabecera =' ';
var derecha = ' ';
f_titulos();

var titulos = 'contesto';
numero_pagina(10);


function actividad4(){
    var cor=0;
    var inc=0;
    var pre1 = document.getElementById('pre1').value;
    var pre2 = document.getElementById('pre2').value;
    var pre3 = document.getElementById('pre3').value;
    var pre4 = document.getElementById('pre4').value;
    if(cor < 1 && inc< 1 && pre1 =="" && pre2 =="" && pre3=="" )
    {
        alert("Debe escoger al menos 1 respuesta a la pregunta");
    }
    else
    {
        if(pre1 =="Manolo" || pre1 =="vaca" || pre1=="Mercedes")
    {
        if(pre1!=pre2 && pre1!=pre3)
        {
            cor=cor+1;
            $("#pre1").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#pre1").removeClass('correcto')
            $("#pre1").addClass('incorrecto')
        }
    }
    else
        {
            inc=inc+1;
            $("#pre1").removeClass('correcto')
            $("#pre1").addClass('incorrecto')
        }

    if(pre2 =="Manolo" || pre2 =="vaca" || pre2=="Mercedes")
    {
        if(pre2!=pre3 && pre2!=pre1)
        {
            cor=cor+1;
            $("#pre2").addClass('correcto')
        } 
        else
        {
            inc=inc+1;
            $("#pre2").removeClass('correcto')
            $("#pre2").addClass('incorrecto')
        } 
    }
    else
        {
            inc=inc+1;
            $("#pre2").removeClass('correcto')
            $("#pre2").addClass('incorrecto')
        }
    if(pre3 =="Manolo" || pre3 =="vaca" || pre3=="Mercedes")
    {
        if(pre3!=pre1 && pre3!=pre2)
        {
            cor=cor+1;
            $("#pre3").addClass('correcto')
        } 
        else
        {
            inc=inc+1;
            $("#pre3").removeClass('correcto')
            $("#pre3").addClass('incorrecto')
        } 
    }
    else
        {
            inc=inc+1;
            $("#pre3").removeClass('correcto')
            $("#pre3").addClass('incorrecto')
        }
    if(pre4!="")
    {
        if(pre4 =="Martina" )
        {
                cor=cor+1;
                $("#pre4").addClass('correcto')
        }
        else
        {
                inc=inc+1;
                $("#pre4").removeClass('correcto')
                $("#pre4").addClass('incorrecto')
        }
    }
    else
    {
        inc=inc+1;
                $("#pre4").removeClass('correcto')
                $("#pre4").addClass('incorrecto')
    }

    var com=document.getElementById("cbovaca").value;
    if(com!="1")
    {
        if(com=="3")
        {
            cor=cor+1;
            $("#cbovaca").addClass('correcto')

        }
        else
        {
            inc=inc+1;
            $("#cbovaca").removeClass('correcto')
            $("#cbovaca").addClass('incorrecto')
        }
    }
    else
    {
        inc=inc+1;
            $("#cbovaca").removeClass('correcto')
            $("#cbovaca").addClass('incorrecto')
    }
    var pre5=document.getElementById("pre5").value;
    if(pre5!="")
    {
        if(pre5=="manzanas" || pre5=="manzana")
        {
            cor=cor+1;
            $("#pre5").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#pre5").removeClass('correcto')
            $("#pre5").addClass('incorrecto')
        }
    }
    else
    {
        inc=inc+1;
            $("#pre5").removeClass('correcto')
            $("#pre5").addClass('incorrecto')
    }

    var pre6=document.getElementById("pre6").value;
    if(pre6!="")
    {
        if(pre6=="muuuu")
        {
            cor=cor+1;
            $("#pre6").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#pre6").removeClass('correcto')
            $("#pre6").addClass('incorrecto')
        }
    }
    else
    {
        inc=inc+1;
        $("#pre6").removeClass('correcto')
        $("#pre6").addClass('incorrecto')   
    }
            var NotaF = ((cor-inc) * 10) / 7;
            if( NotaF<0)
            {
                NotaF=0;
                $('#txtNota').html(NotaF.toFixed(2) + ' ');
                document.getElementById('bt_comprobar').disabled = true;
            }
            else
            {
                $('#txtNota').html(NotaF.toFixed(2) + ' ');
                document.getElementById('bt_comprobar').disabled = true;
            }
    }
}

  
