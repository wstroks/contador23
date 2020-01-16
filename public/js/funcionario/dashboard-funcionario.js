var database = firebase.database();
var labelC=[];
var estimaC=[];

var labelT=[];
var estimaT=[];

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
    
    
        var data = datas.val();
        
        $.each(data, function(nodo, value) {
                if(filtro==value.Nome){
                var sendData = dadosHoras(value.Horas,value.Minutos);
                var sendData1=dadosComprido(value.tarefasComprindas);
                var sendData2=dadosAtrasadas(value.tarefasAtrasadas);
                var sendData3=dadosInfo(value.tarefasComprindas,value.tarefasAtrasadas);

                
                labelC.push(value.Nome);
                estimaC.push(parseInt(value.tarefasComprindas));

                labelT.push(value.Nome);
                estimaT.push(parseInt(value.tarefasAtrasadas));
                printHTML('tempo',sendData);
                printHTML('compridos',sendData1);
                printHTML('atrasados',sendData2);
               printHTML('info',sendData3);}

                //printTabela(Selecionado);

        });    
        //grafico();
        
 
});

var ref2 = database.ref('tarefas').orderByChild('Nome');    
    ref2.on('value',function(datas){
        var filtro = document.getElementById('usuarioNome').innerText;
        console.log(filtro);
    
    
        var data = datas.val();
        
        $.each(data, function(nodo, value) {
                if(filtro==value.Nome && value.Status=="Em andamento"){
                var sendData1 = dadosFuncionario(value.Titulo,value.Descritivo,  value.dataInicio, value.horasInicio,value.estimativaHoras,value.Status,value.Nome);
                
                printHTML('ex-table1',sendData1);
                
                //printTabela(Selecionado);
}
        });    
        //grafico();
        
 
});

var h=0;
var m=0;
var contador=0;
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


 function dadosFuncionario(Titulo, Descritivo, dataInicio, horasInicio,estimativaHoras,Status,Nome){
    inHTML("ex-table1","");
    return '<tr><td>'+Titulo+'</td><td>'+Descritivo+'</td>'+
    '<td>'+dataInicio+' </td> <td>'+horasInicio+'</td> <td>'+estimativaHoras+'</td> <td>'+Status+ '</td>'+
    '<td class="text-right"><button  type="submit" class="btn btn-success btn-round" onclick="notificaTask(\''+Titulo+'\',\''+Descritivo+'\',\''+Nome+'\')" >Notificar termino</button></td>';
  

 }

 function notificaTask(Titulo, Nome, Descritivo){
    const rooRef=database.ref('notifica');
    const autoId= rooRef.push().key;
    rooRef.child(autoId).set({
        Nome: Nome,
        Titulo: Titulo,
        Descritivo: Descritivo,
        
        
    });

    alert('Notificação enviada aguarde o supervisor!');
 }