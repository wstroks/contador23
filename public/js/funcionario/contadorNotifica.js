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
   
    inHTML("notificaContador","");
    contador=0;
    //console.log(filtro)
    var data = datas.val();
    $.each(data, function(nodo, value) {
        //if(filtro==value.Nome){
           
            contador+=1;
            
            var sendData1 = contadorNotificação(contador);
           
            printHTML('notificaContador',sendData1);
        //}
    });       
});





function contadorNotificação(contador2){
    inHTML("notificaContador","");
    if(contador2==1){
    return contador2+' Notificação ';
}
if(contador2>1){
    return contador2+' Notificações';
}
}