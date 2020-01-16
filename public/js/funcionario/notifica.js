var database = firebase.database();
var contador=0;
function value(request){
  return  document.getElementById(request).value;
}
function printHTML(request,response){
  return document.getElementById(request).innerHTML+=response;
}
function inHTML(request,response){
    return document.getElementById(request).innerHTML=response;
}

var reference = database.ref('notifica');    
reference.on('value',function(datas){
   // var filtro = document.getElementById('usuarioNome').innerText;
    inHTML("ex-table100","");
    inHTML("notificaContador","");
    contador=0;
    //console.log(filtro)
    var data = datas.val();
    $.each(data, function(nodo, value) {
        //if(filtro==value.Nome){
            var sendData = table(value.Titulo,value.Nome,value.Descritivo, nodo);
            contador+=1;
            console.log(contador);
            var sendData1 = contadorNotificação(contador);
            printHTML('ex-table100',sendData);
            printHTML('notificaContador',sendData1);
        //}
    });       
});

function table(Titulo, Nome, Descritivo,key){
    
  return '<tr><td>'+Titulo+'</td><td>'+Descritivo+'</td><td>'+Nome+'</td>'+
  '<td class="text-right"><button  type="submit" class="btn btn-danger btn-round" onclick="removeTask(\''+key+'\')" > Excluir</button></td>';
  
}


function removeTask(key){
    if(confirm("Tem certeza que deseja remover?")){
        inHTML("ex-table100","");
        database.ref('notifica/'+key).remove();
        contador-=1;
        //window.location.reload();
    }

}

function contadorNotificação(contador2){
    inHTML("notificaContador","");
    if(contador2==1){
    return contador2+' Notificação ';
}
if(contador2>1){
    return contador2+' Notificações';
}
}