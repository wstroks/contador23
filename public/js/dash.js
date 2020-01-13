var database = firebase.database();

function value(request){
    
    return  document.getElementById(request).value;
  }
  function printHTML(request,response){
    return document.getElementById(request).innerHTML+=response;
  }

  function inHTML(request,response){
    return document.getElementById(request).innerHTML=response;
}
  
var ref = database.ref('funcionario').orderByChild('Nome');    
    ref.on('value',function(datas){
        
    
    
    
        var data = datas.val();
        
        $.each(data, function(nodo, value) {
                var sendData = dadosHoras(value.Horas,value.Minutos);
                var sendData1=dadosComprido(value.tarefasComprindas);
                var sendData2=dadosAtrasadas(value.tarefasAtrasadas);
                var sendData3=dadosInfo(value.tarefasComprindas,value.tarefasAtrasadas);
                printHTML('tempo',sendData);
                printHTML('compridos',sendData1);
                printHTML('atrasados',sendData2);
                printHTML('info',sendData3);

                //printTabela(Selecionado);

        });       
    });

var h=0;
var m=0;
function dadosHoras(Horas,Minutos){
    inHTML("tempo","");
    h=h+Horas;
    m=m+Minutos;
    var x=h;
    while(x>0 && m<0){
        if(m>0){
            x=-1;
        }else{
        if(h>0){ 
        h-=1;
        m+=60;
    }
       }
    }
       
    return h+ 'H ' + m+' M';
            
}
var tarefasC=0;
function dadosComprido(tarefasCompridas){
    inHTML("compridos","");
    tarefasC+=  parseInt(tarefasCompridas);
    return tarefasC;
            
                
}
var tarefasA=0;
function  dadosAtrasadas(tarefasAtrasadas){
    inHTML("atrasados","");
    tarefasA+= parseInt(tarefasAtrasadas);
    return  tarefasA;
}
var calculo = 0;
 function dadosInfo(tarefasCompridas, tarefasAtrasadas){
    inHTML("info","");
     calculo += parseInt(tarefasCompridas)+parseInt(tarefasAtrasadas)
    return calculo;
 }