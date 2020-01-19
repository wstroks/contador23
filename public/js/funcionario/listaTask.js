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

var reference = database.ref('tarefas');    
reference.on('value',function(datas){
    var filtro = document.getElementById('usuarioNome').innerText;
    inHTML("ex-table1","");
    console.log(filtro)
    var data = datas.val();
    $.each(data, function(nodo, value) {
        if(filtro==value.Nome){
            var sendData = table(value.Titulo,value.Nome,value.Descritivo,value.dataInicio,value.horasInicio,value.estimativaHoras,value.Status,value.estimativadataFinalizar,value.estimativahorasFinalizar,value.dataTermino,value.horasTermino);
            printHTML('ex-table1',sendData);
        }
    });       
});

function table(Titulo, Nome, Descritivo, dataInicio, horasInicio,estimativaHoras,Status,estimativadataFinalizar,estimativahorasFinalizar,dataTermino,horasTermino){
    
  return '<tr><td>'+Titulo+'</td>'+'<td>'+Descritivo+'</td>'+
  '<td>'+dataInicio+' '+horasInicio+' </td> <td>'+estimativaHoras+'</td> <td>'+estimativadataFinalizar+' '+estimativahorasFinalizar+'</td> <td>'+dataTermino+' '+ horasTermino+'</td> <td>'+Status +'</td>';
}