var cabecera ='';
 var derecha = '';
 f_titulos();
 

var titulos = 'contesto';
numero_pagina(16);

function actividad7(){
    var cor=0;
    var inc=0;
    var pre1 = document.getElementById('cbopre1').value;
    var pre2 = document.getElementById('cbopre2').value;
    var pre3 = document.getElementById('cbopre3').value;
    var pre4 = document.getElementById('cbopre4').value;
    var pre5 = document.getElementById('cbopre5').value;

    if(pre1 =="1" && pre2 =="1" && pre3=="1" && pre4=="1" && pre5=="1" )
    {
        alert("Debe escoger seleccionar las respuestas de todas las preguntas.");
    }
    else
    {
    
    if(pre1=="1")
    {
        
    }
    else
    {
        if(pre1=="3")
        {
            cor=cor+1;
            $("#cbopre1").addClass('correcto')

        }
        else
        {
            inc=inc+1;
            $("#cbopre1").removeClass('correcto')
            $("#cbopre1").addClass('incorrecto')
        }
    }

    if(pre2=="1")
    {
       
    }
    else
    {
        if(pre2=="4")
        {
            cor=cor+1;
            $("#cbopre2").addClass('correcto')

        }
        else
        {
            inc=inc+1;
            $("#cbopre2").removeClass('correcto')
            $("#cbopre2").addClass('incorrecto')
        }
    }

    if(pre3=="1")
    {
       
    }
    else
    {
        if(pre3=="2")
        {
            cor=cor+1;
            $("#cbopre3").addClass('correcto')

        }
        else
        {
            inc=inc+1;
            $("#cbopre3").removeClass('correcto')
            $("#cbopre3").addClass('incorrecto')
        }
    }

    if(pre4=="1")
    {
        
    }
    else
    {
        if(pre4=="4")
        {
            cor=cor+1;
            $("#cbopre4").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#cbopre4").removeClass('correcto')
            $("#cbopre4").addClass('incorrecto')
        }
    }
    if(pre5=="1")
    {
       
    }
    else
    {
        if(pre5=="2")
        {
            cor=cor+1;
            $("#cbopre5").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#cbopre5").removeClass('correcto')
            $("#cbopre5").addClass('incorrecto')
        }
    }


    if(pre1 !="1" && pre2 !="1" && pre3!="1" && pre4!="1" && pre5!="1" )
    {
        

        var NotaF = ((cor-inc) * 10) / 5;
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
    else
    {
    	alert("Debe escoger seleccionar las respuestas de todas las preguntas.");	
    }

            
    }
}

  

