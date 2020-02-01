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
    //inHTML("notificaContador","");
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
  '<td class="text-right"><button  type="button" class="btn btn-primary btn-round" data-toggle="modal" data-target="#exampleModalCenter" onclick="acessar(\''+Titulo+'\',\''+Descritivo+'\',\''+Nome+'\',\''+key+'\')" > Acessar</button></td>'+
  '<td class="text-right"><button  type="submit" class="btn btn-danger btn-round" onclick="removeTask(\''+key+'\')" > Excluir</button></td>';
  
}

function acessar(Titulo, Nome, Descritivo,key){
    var key2=key;
    var reference3 = database.ref('tarefas');    
    reference3.on('value',function(datas){
        var data = datas.val();
        inHTML('ex-table5',"");
        $.each(data, function(nodo, value) {
                if(value.Nome==Nome && value.Titulo==Titulo && value.Descritivo && value.Status!="Finalizado"){
                var sendData = tablemodal(value.Titulo,value.Nome,value.Descritivo,value.dataInicio,value.horasInicio,value.estimativaHoras,value.Status,value.estimativadataFinalizar,value.estimativahorasFinalizar,nodo,key2);
                printHTML('ex-table5',sendData);}
        });       
    });
}

function tablemodal(Titulo, Nome, Descritivo, dataInicio, horasInicio,estimativaHoras,Status,estimativadataFinalizar,estimativahorasFinalizar,key,key2){
    return '<tr><td>'+Titulo+'</td><td>'+Nome+'</td><td>'+Descritivo+'</td>'+
    '<td>'+dataInicio+' '+horasInicio+' </td> <td>'+estimativaHoras+'</td> <td>'+estimativadataFinalizar+' '+estimativahorasFinalizar+'</td>  <td>'+Status +'</td>'+'<td class="text-right"><button  type="button" class="btn btn-danger btn-round" data-dismiss="modal" onclick="finalizarTask(\''+key+'\',\''+key2+'\')" > Finalizar</button></td>';
  }


  
function finalizarTask(key,key2){
    if(confirm("Tem certeza que deseja remover?")){
        inHTML("ex-table100","");
        database.ref('notifica/'+key2).remove();
        
      
        
    
    
    //var calculo = contador -1;
    //console.log("calculo "+calculo);
    if(contador==0){
        calculo=0;
        var sendData1 = contadorNotificação(contador);
           //printHTML('ex-table100',sendData);
        printHTML('notificaContador',sendData1);

    }else{
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
        if(value.Nome!=null){
           // var sendData = table(value.Titulo,value.Nome,value.Descritivo, nodo);
            contador+=1;}
            console.log(contador);
            var sendData1 = contadorNotificação(contador);
           //printHTML('ex-table100',sendData);
            printHTML('notificaContador',sendData1);
        //}
    });       
});}
var fh = new Date();
console.log(key);
var dataTermino=fh.getDate()+"/"+ (fh.getMonth()+1) +"/"+fh.getFullYear();
var horasTermino=fh.getHours()+":"+fh.getMinutes();



data ={
    // Nome: Nome,
     //Titulo: Titulo,
    // Descritivo: Descritivo,
    dataTermino: fh.getDate()+"/"+ (fh.getMonth()+1) +"/"+fh.getFullYear(),
    horasTermino: fh.getHours()+":"+fh.getMinutes(),
     //estimativaHoras: estimativaHoras,
     Status: "Finalizado"
 }

 inHTML("ex-table5","");
 database.ref('tarefas/'+key).update(data);
 
 

 //consulta.update(addCadastroTarefa);

 
 //window.location.reload();
 addTempo(key);
 //window.location.reload();
    }
    

}
function removeTasknotifica(key){
    
        inHTML("ex-table100","");
        database.ref('notifica/'+key).remove();
        
    
    
    //var calculo = contador -1;
    //console.log("calculo "+calculo);
    if(contador==0){
        calculo=0;
        var sendData1 = contadorNotificação(contador);
           //printHTML('ex-table100',sendData);
        printHTML('notificaContador',sendData1);

    }else{
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
        if(value.Nome!=null){
           // var sendData = table(value.Titulo,value.Nome,value.Descritivo, nodo);
            contador+=1;}
            console.log(contador);
            var sendData1 = contadorNotificação(contador);
           //printHTML('ex-table100',sendData);
            printHTML('notificaContador',sendData1);
        //}
    });       
});}

}
function removeTask(key){
    if(confirm("Tem certeza que deseja remover?")){
        inHTML("ex-table100","");
        database.ref('notifica/'+key).remove();
        
    
    }
    //var calculo = contador -1;
    //console.log("calculo "+calculo);
    if(contador==0){
        calculo=0;
        var sendData1 = contadorNotificação(contador);
           //printHTML('ex-table100',sendData);
        printHTML('notificaContador',sendData1);

    }else{
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
        if(value.Nome!=null){
           // var sendData = table(value.Titulo,value.Nome,value.Descritivo, nodo);
            contador+=1;}
            console.log(contador);
            var sendData1 = contadorNotificação(contador);
           //printHTML('ex-table100',sendData);
            printHTML('notificaContador',sendData1);
        //}
    });       
});}

}

function contadorNotificação(contador2){
    //console.log("xxx "+contador2);
    inHTML("notificaContador","");
    if(contador2==0){
        return ' Notificação ';
    }
    if(contador2==1){
    return contador2+' Notificações';
}
if(contador2>1){
    return contador2+' Notificações';
}
}



function addTempo(key){
    
     
    //console.log('asas');
    firebase.database().ref('tarefas/'+key).on('value', function(it) {
    //console.log('asas1');
    var val = it.val();
    var calculohorasInicio = val.horasInicio;
    var calculohorasTermino = val.horasTermino;
   // console.log('asas1'+ val.dataInicio +" "+val.Horas);
    var calculodataInicio = val.dataInicio;
    var calculodataTermino = val.dataTermino;
    var NomeX= val.Nome;
      
    var hora=calculohorasInicio;
    var arrayInicio=hora.split(":");

    var hora2=calculohorasTermino;
    var arrayTermino=hora2.split(":");
    
    console.log(arrayInicio[0]-arrayInicio[1]);
   
    console.log(parseInt(arrayInicio[0])- parseInt(arrayInicio[1]));

    var  dtPartida = calculodataInicio+" "+calculohorasInicio;
    var  dtChegada = calculodataTermino+" "+ calculohorasTermino;
    
    var ms = moment(dtChegada,"DD/MM/YYYY HH:mm:ss").diff(moment(dtPartida,"DD/MM/YYYY HH:mm:ss"));
    var d = moment.duration(ms);
    var s = Math.floor(d.asHours()) + "h" + moment.utc(ms).format(" mm") +"m";

    console.log(s);


    var  array = val.estimativaHoras;
    var  estimaArray=array.split(":");

    var h=parseInt(estimaArray[0])- parseInt(d.asHours());
    var minutos=parseInt(estimaArray[1])- parseInt(moment.utc(ms).format(" mm"));

    console.log(parseInt(estimaArray[0])- parseInt(d.asHours()));
    console.log(parseInt(estimaArray[1])- parseInt(moment.utc(ms).format(" mm")));

    let consulta = firebase.database().ref('funcionario').orderByChild('Nome').equalTo(NomeX);
    
    consulta.on('child_added', function(item) {
       
       //agora= calculohorasInicio.split(":");
       //agora1= calculohorasTermino.split(":");
       
       var contadorComprindas=item.val().tarefasComprindas;
       var contadorAtrasadas=item.val().tarefasAtrasadas;
       var keyFuncionario=item.key;
       console.log('kk'+keyFuncionario)
       var calculo=item.val().Horas + h;
       var calculoMinutos= item.val().Minutos + minutos;
       
       
       if(h>0){
        console.log("3 " +estimaArray[0]+"<"+h);
       data={Horas: calculo,
        Minutos: calculoMinutos,
        tarefasComprindas: contadorComprindas+1}
        database.ref('funcionario/'+keyFuncionario).update(data);
        
       }

       if(h<0 ){
        console.log("4 " +estimaArray[0]+"<"+h);
        data={Horas: calculo,
         Minutos: calculoMinutos,
         tarefasAtrasadas: contadorAtrasadas+1}
         database.ref('funcionario/'+keyFuncionario).update(data);
         
        }
        if(estimaArray[0]=="00" && minutos>0){
            console.log("1 " +estimaArray[1]+">"+minutos);
         data={Horas: calculo,
          Minutos: calculoMinutos,
          tarefasComprindas: contadorComprindas+1}
          database.ref('funcionario/'+keyFuncionario).update(data);
         
         }
         if(estimaArray[0]=="00" && minutos<0){
             console.log("2 " +estimaArray[1]+"<"+minutos);
             data={Horas: calculo,
              Minutos: calculoMinutos,
              tarefasAtrasadas: contadorAtrasadas+1}
              database.ref('funcionario/'+keyFuncionario).update(data);
             
        }

        if(estimaArray[0]==h && minutos>0){
            console.log("1 " +estimaArray[1]+">"+minutos);
         data={Horas: calculo,
          Minutos: calculoMinutos,
          tarefasComprindas: contadorComprindas+1}
          database.ref('funcionario/'+keyFuncionario).update(data);
         
         }
         if(estimaArray[0]==h && minutos<0){
             console.log("2 " +estimaArray[1]+"<"+minutos);
             data={Horas: calculo,
              Minutos: calculoMinutos,
              tarefasAtrasadas: contadorAtrasadas+1}
              database.ref('funcionario/'+keyFuncionario).update(data);
             
        }

       // database.ref('funcionario/'+keyFuncionario).update(data);




      // database.ref('funcionario/'+keyFuncionario).update(data);
       
        
       

       });
      
        
    });


}