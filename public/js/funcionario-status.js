var database = firebase.database();
var Selecionado=$("#listar-select option:selected").text();

function value(request){
    
    return  document.getElementById(request).value;
  }
  function printHTML(request,response){
    return document.getElementById(request).innerHTML+=response;
  }

  function inHTML(request,response){
    return document.getElementById(request).innerHTML=response;
}
  
  
  
  function table(Titulo, Nome, Descritivo, dataInicio, horasInicio,estimativaHoras,Status){
    
    return '<tr><td>'+Titulo+'</td><td>'+Nome+'</td><td>'+Descritivo+'</td>'+
    '<td>'+dataInicio+' </td> <td>'+horasInicio+'</td> <td>'+estimativaHoras+'</td> <td>'+Status+ '</td>';
   
  }



  

  
  $('#listar-select').change(function() {
    Selecionado= $("#listar-select option:selected").text();
    inHTML("tempo","");
    inHTML("compridos","");
    inHTML("atrasados","");
    inHTML("info","");
    //inHTML("ex-table1","");
    
    var ref = database.ref('funcionario').orderByChild('Nome').equalTo(Selecionado);    
    ref.on('value',function(datas){
        var data = datas.val();
        
        $.each(data, function(nodo, value) {
                var sendData = dadosHoras(value.Horas,value.Minutos,value.Nome);
                var sendData1=dadosComprido(value.tarefasComprindas);
                var sendData2=dadosAtrasadas(value.tarefasAtrasadas);
                var sendData3=dadosInfo(value.tarefasComprindas,value.tarefasAtrasadas);
                printHTML('tempo',sendData);
                printHTML('compridos',sendData1);
                printHTML('atrasados',sendData2);
                printHTML('info',sendData3);

                printTabela(Selecionado);

        });       
    });
    
   
    //console.log(Selecionado);

   
});

function printTabela(Selecionado){
    inHTML("ex-table1","");
    var reference = database.ref('tarefas');    
    reference.on('value',function(datas){
        var data = datas.val();
        $.each(data, function(nodo, value) {
            if(Selecionado==value.Nome){
                var sendData = table(value.Titulo,value.Nome,value.Descritivo,value.dataInicio,value.horasInicio,value.estimativaHoras,value.Status);
                
                printHTML('ex-table1',sendData);}
        });       
    });
}

function dadosHoras(Horas,Minutos,Nome){
       
return Horas+ 'H ' + Minutos+'M';
        
            
}


function dadosComprido(tarefasCompridas){
       
    return tarefasCompridas;
            
                
}

function  dadosAtrasadas(tarefasAtrasadas){
    return  tarefasAtrasadas;
}

 function dadosInfo(tarefasCompridas, tarefasAtrasadas){
     var calculo = parseInt(tarefasCompridas)+parseInt(tarefasAtrasadas)
    return calculo;
 }


 firebase.database().ref('funcionario').orderByChild('Nome').on('value', function (snapshot){
    var content = '';
    snapshot.forEach(function(item) {
        
       /* 
        //var th1=document.createElement('td');
        th.appendChild(document.createTextNode(item.val().nome));
        //th1.appendChild(document.createTextNode(item.val().bairro));
        th2.appendChild(document.createTextNode(item.val().gasolina));
        
        
        nome_posto.appendChild(th);
       // bairro_posto.appendChild(th1);
        gasolina.appendChild(th2);*/
        //var Selecionado2=$("#listar-select option:selected").text();
        //console.log(Selecionado2);
        var val = item.val();
       
      //  content +='<tbody>';
                content +=' <option value='+val.Nome+'>'+val.Nome +'</option>';
              
                
              //  content +='</tbody>';


            
    });
    $('#listar-select').append(content);
  });
