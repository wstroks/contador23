var database = firebase.database();



/*
firebase.database().ref('tarefas').orderByChild('Nome').on('value', function (snapshot){
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
    /*    
        var val = item.val();
      if(val.Status == "Finalizado"){
      //  content +='<tbody>';
      content +='<tr >';
      content += '<td>'+val.Titulo+'</td>';
      content += '<td>'+val.Nome+'</td>';
      content += '<td>'+val.Descritivo+'</td>';
      content += '<td>'+val.dataInicio+'</td>';
      content += '<td>'+val.horasInicio+'</td>';
      content += '<td>'+val.estimativaHoras+'</td>';
      content += '<td>'+val.Status+'</td>';
      var key2=""
      var key= item.key;
      
      Titulo= val.Titulo;   
      Nome = val.Nome;
      Descritivo = val.Descritivo;
      dataInicio  = "s";
      horasInicio = "ss";
      estimativaHoras = val.estimativaHoras;
      Status = val.Status;
     
    
               //content += '<td>'+'<a class="waves-effect waves-light btn-floating deep-purple accent-1"  href='+val.link+'><i class="material-icons centered">directions_car</i></a>'+'</td>';
      content +='</tr>';    
    }
              //  content +='</tbody>';
    //content = '';
    });
    $('#ex-table1').append(content);


});*/

function value(request){
  return  document.getElementById(request).value;
}
function printHTML(request,response){
  return document.getElementById(request).innerHTML+=response;
}
function inHTML(request,response){
  return document.getElementById(request).innerHTML=response;
}
var reference = database.ref('tarefas').orderByChild('Status').equalTo('Finalizado');    
reference.on('value',function(datas){
    var data = datas.val();
    inHTML('ex-table1',"");
    $.each(data, function(nodo, value) {
            var sendData = table(value.Titulo,value.Nome,value.Descritivo,value.dataInicio,value.horasInicio,value.estimativaHoras,value.Status,value.estimativadataFinalizar,value.estimativahorasFinalizar,value.dataTermino,value.horasTermino);
            printHTML('ex-table1',sendData);
    });       
});

function table(Titulo, Nome, Descritivo, dataInicio, horasInicio,estimativaHoras,Status,estimativadataFinalizar,estimativahorasFinalizar,dataTermino,horasTermino){
  return '<td>'+Titulo+'</td><td>'+Nome+'</td><td>'+Descritivo+'</td>'+
  '<td>'+dataInicio+' '+horasInicio+' </td> <td>'+estimativaHoras+'</td> <td>'+estimativadataFinalizar+' '+estimativahorasFinalizar+'</td> <td>'+dataTermino+' '+ horasTermino+'</td> <td>'+Status +'</td>';
}




