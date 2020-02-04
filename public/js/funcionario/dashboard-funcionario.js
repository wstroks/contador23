var database = firebase.database();
var labelC=[];
var estimaC=[];

var labelT=[];
var estimaT=[];

var h=0;
var m=0;
var contador=0;
var calculo = 0;

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
        var filtro = document.getElementById('usuarioNome').innerText;
        console.log(filtro);
    
        h=0;
        m=0;
        contador=0;
        var data = datas.val();
        
        $.each(data, function(nodo, value) {
                if(filtro==value.Nome){
                var sendData = dadosHoras(value.Horas,value.Minutos);
                var sendData1=dadosComprido(value.tarefasComprindas);
                var sendData2=dadosAtrasadas(value.tarefasAtrasadas);
                var sendData3=dadosInfo(value.tarefasComprindas,value.tarefasAtrasadas,value.tarefasemAndamento);
                var sendData4=emAndamento(value.tarefasemAndamento)
                
                //labelC.push(value.Nome);
                //estimaC.push(parseInt(value.tarefasComprindas));

                //labelT.push(value.Nome);
                //estimaT.push(parseInt(value.tarefasAtrasadas));
                printHTML('tempo',sendData);
                printHTML('compridos',sendData1);
                printHTML('atrasados',sendData2);
                printHTML('info',sendData3);
                printHTML('andamento',sendData4);}

                //printTabela(Selecionado);

        });    
        //grafico();
        
 
});

var ref2 = database.ref('tarefas').orderByChild('Nome');    
    ref2.on('value',function(datas){
        var filtro = document.getElementById('usuarioNome').innerText;
        console.log(filtro);
    
        inHTML("ex-table1","");
        var data = datas.val();
        
        $.each(data, function(nodo, value) {
                if(filtro==value.Nome && value.Status=="Em andamento"){
                var sendData1 = dadosFuncionario(value.Titulo,value.Descritivo,  value.dataInicio, value.horasInicio,value.estimativaHoras,value.Status,value.Nome,value.estimativadataFinalizar,value.estimativahorasFinalizar,value.dataTermino,value.horasTermino);
                
                printHTML('ex-table1',sendData1);
                
                //printTabela(Selecionado);
}
        });    
        //grafico();
        
 
});


function dadosHoras(Horas,Minutos){
    inHTML("tempo","");
    contador+=1;
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
    }else{
        x=-1;
    }
       }
    }
    
    var y=m;
    
        
    
       
    return h + 'H ' + m+'M';
            
}

function emAndamento(tarefasemAndamento){
    inHTML("andamento","");
    //tarefasAndamento+=  parseInt(tarefasemAndamento);
    //tarefasEm+=parseInt(tarefasemAndamento);
    return tarefasemAndamento;
}

//var tarefasC=0;
function dadosComprido(tarefasCompridas){
    inHTML("compridos","");
    //tarefasC+=  parseInt(tarefasCompridas);
    return tarefasCompridas;
            
                
}
//var tarefasA=0;
function  dadosAtrasadas(tarefasAtrasadas){
    inHTML("atrasados","");
    //tarefasA+= parseInt(tarefasAtrasadas);
    return  tarefasAtrasadas;
}

 function dadosInfo(tarefasCompridas, tarefasAtrasadas,tarefasemAndamento){
    inHTML("info","");
     calculo = parseInt(tarefasCompridas)+parseInt(tarefasAtrasadas)+parseInt(tarefasemAndamento);
    return calculo;
 }


 function dadosFuncionario(Titulo, Descritivo, dataInicio, horasInicio,estimativaHoras,Status,Nome,estimativadataFinalizar,estimativahorasFinalizar,dataTermino,horasTermino){
   
    return '<tr><td>'+Titulo+'</td><td>'+Nome+'</td><td>'+Descritivo+'</td>'+
    '<td>'+dataInicio+' '+horasInicio+' </td> <td>'+estimativaHoras+'</td> <td>'+estimativadataFinalizar+' '+estimativahorasFinalizar+'</td>  <td>'+Status +'</td>'+
    '<td class="text-right"><button  type="submit" class="btn btn-success btn-round" onclick="notificaTask(\''+Titulo+'\',\''+Nome +'\',\''+Descritivo+'\')" >Notificar termino</button></td></tr>';
  

 }

 function notificaTask(Titulo, Nome, Descritivo){
    var verifica =0;

    var reference2 = database.ref('notifica');    
    reference2.on('value',function(datas){
   // var filtro = document.getElementById('usuarioNome').innerText;
    //inHTML("ex-table100","");
    //inHTML("notificaContador","");
    //inHTML("notificaContador","");
    contador=0;
    //console.log(filtro)
    var data = datas.val();
    $.each(data, function(nodo, value) {
        console.log("verifica1 " + verifica);
        if(value.Nome==Nome && value.Titulo ==Titulo && value.Descritivo){
           console.log("verifica2 " + + verifica + " Nome"+ Nome +" Descrito "+ Descritivo + " titulo " + Titulo);
           verifica=1;
        }
    });       
});
console.log("verifica3 " + verifica + " Nome"+ Nome +" Descrito "+ Descritivo + " titulo " + Titulo);
  if(verifica=!1 || contador==0){
    const rooRef=database.ref('notifica');
    const autoId= rooRef.push().key;
    rooRef.child(autoId).set({
        Nome: Nome  ,
        Titulo: Titulo,
        Descritivo: Descritivo,
        
        
    });

    alert('Notificação enviada, aguarde o supervisor!');}
    else{
        alert('Notificação já enviada ao supervisor. Aguarde!')
    }
}