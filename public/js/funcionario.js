document.getElementById('form_funcionario').addEventListener('submit', submitForm);
var database = firebase.database();
const rooRef=database.ref('funcionario');



function submitForm(e){
    e.preventDefault();
    inHTML("ex-table","");
    var Nome = getInputVal('Nome');
    var Cargo = getInputVal('Cargo');
    var Email = getInputVal('Email');
    var Horas =0;
    var Minutos =0;
    var tarefasComprindas = 0;
    var tarefasAtrasadas=0;
    var tarefasemAndamento=0;


    console.log(Nome +" " + Cargo);

    saveFuncionario(Nome, Cargo, Email, Horas,Minutos, tarefasAtrasadas,tarefasComprindas,tarefasemAndamento);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveFuncionario(Nome, Cargo, Email, Horas,Minutos,tarefasAtrasadas,tarefasComprindas,tarefasemAndamento){
    //var novoFuncionario = cadastroFuncionario.push().key();
    
    const autoId= rooRef.push().key;
    rooRef.child(autoId).set({
        Nome: Nome,
         Cargo: Cargo,
         Email: Email,
         Horas: Horas,
         Minutos: Minutos,
         tarefasAtrasadas: tarefasAtrasadas,
         tarefasComprindas: tarefasComprindas,
         tarefasemAndamento: tarefasemAndamento
    });
    //window.location.reload();
    
    alert('Funcionário cadastrado!');
    
}
/*
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
/*
        var val = item.val();
       
      //  content +='<tbody>';
                content +='<tr>';
                content += '<td>'+val.Nome+'</td>';
                content += '<td>'+val.Cargo+'</td>';
                content += '<td>'+val.Email+'</td>';
                var key= item.key
                content += '<td class="text-right"><button type="submit" class="btn btn-info btn-round" onclick="removeTask(\''+key+'\')" > Excluir</button></td>';
               // content += '<td>'+'<a class="waves-effect waves-light btn-floating deep-purple accent-1"  href='+val.link+'><i class="material-icons centered">directions_car</i></a>'+'</td>';
                
                content += '</tr>';
              //  content +='</tbody>';
            
    });
    $('#ex-table').append(content);


});*/

function removeTask(key){
    if(confirm("Tem certeza que deseja remover?")){
        inHTML("ex-table","");
        database.ref('funcionario/'+key).remove();
        
        //window.location.reload();
    }
}

function inHTML(request,response){
    return document.getElementById(request).innerHTML=response;
}

function value(request){
    return  document.getElementById(request).value;
  }
  function printHTML(request,response){
    return document.getElementById(request).innerHTML+=response;
  }
  
  var reference = database.ref('funcionario');    
  reference.on('value',function(datas){
      var data = datas.val();
      $.each(data, function(nodo, value) {
              var sendData = table(value.Nome,value.Cargo,value.Email,nodo);
              printHTML('ex-table',sendData);
      });       
  });
  
  function table(Nome, Cargo, Email, key){
    return '<tr><td>'+Nome+'</td><td>'+Cargo+'</td><td>'+Email+'</td>'+
    '<td class="text-right"><button type="submit" class="btn btn-info btn-round" onclick="removeTask(\''+key+'\')" > Excluir</button></td> </tr>';
  }






