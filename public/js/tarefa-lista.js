
const database = firebase.database();

var Nome=""
var Titulo= "";   
var Descritivo = "";
var dataInicio  = "s";
var horasInicio = "a";
var estimativaHoras = "";
var Status = "";

firebase.database().ref('tarefas/').orderByChild('Nome').on('value', function (snapshot){
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

        var val = item.val();

      if(val.Status != "Finalizado"){
      //  content +='<tbody>';
      content +='<tr>';
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
     if(val.Status != "Em andamento"){
     content += '<td class="text-right"><button  type="submit" class="btn btn-success btn-round" onclick="iniciarTask(\''+key+'\')" > Iniciar</button></td>';
     }else{
        content += '<td class="text-right"><button  type="submit" class="btn btn btn-dark btn-round" onclick="finalizarTask(\''+key+'\')" > Finalizar</button></td>';
     }
     content += '<td class="text-right"><button  type="submit" class="btn btn-danger btn-round" onclick="removeTask(\''+key+'\')" > Excluir</button></td>';
    
               //content += '<td>'+'<a class="waves-effect waves-light btn-floating deep-purple accent-1"  href='+val.link+'><i class="material-icons centered">directions_car</i></a>'+'</td>';
      content +='</tr>';    
    }
              //  content +='</tbody>';
            
    });
    $('#ex-table1').append(content);


});

function removeTask(key){
    if(confirm("Tem certeza que deseja remover?")){
        
        database.ref('tarefas/'+key).remove();
        window.location.reload();
    }
}

function iniciarTask(key){
    var fh = new Date();
    console.log( key);
    /**var Titulo= val.Titulo;
    
    var Descritivo = val.Descritivo;
    var dataInicio  = "s";
    var horasInicio = "a";
    var estimativaHoras = val.estimativaHoras;
    var Status = val.Status;
    data={Titulo, Nome, Descritivo, dataInicio,horasInicio, estimativaHoras,Status};*/
    data ={
       // Nome: Nome,
        //Titulo: Titulo,
       // Descritivo: Descritivo,
        dataInicio: fh.getDate()+"/"+ (fh.getMonth()+1) +"/"+fh.getFullYear(),
        horasInicio: +fh.getHours()+":"+fh.getMinutes(),
        //estimativaHoras: estimativaHoras,
        Status: "Em andamento"
    }
        
    database.ref('tarefas/'+key).update(data);
    window.location.reload();

}


function finalizarTask(key){
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
    
     
     database.ref('tarefas/'+key).update(data);
     
     
    
     //consulta.update(addCadastroTarefa);

     
     //window.location.reload();
     addTempo(key);
     window.location.reload();

}

function addTempo(key){
    
     
    //console.log('asas');
    firebase.database().ref('tarefas/'+key).on('value', function(it) {
    //console.log('asas1');
    var val = it.val();
    var calculohorasInicio = val.horasInicio;
    var calculohorasTermino = val.horasTermino;
    //console.log('asas1'+ val.dataInicio);
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