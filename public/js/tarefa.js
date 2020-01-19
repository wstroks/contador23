document.getElementById('formtarefa').addEventListener('submit', submitTarefa);

const database = firebase.database();


const Selecionado2 = $("#listar-select option:selected").text();


function value(request){
    return  document.getElementById(request).value;
  }
  function printHTML(request,response){
    return document.getElementById(request).innerHTML+=response;
  }
  function inHTML(request,response){
    return document.getElementById(request).innerHTML=response;
  }        
function saveTarefa(Titulo, Descritivo, dataInicio,horasInicio,dataTermino,horasTermino, estimativaHoras, Selecionado,estimativadataFinalizar,estimativahorasFinalizar){
    //var novoFuncionario = cadastroFuncionario.push().key();
    var Nome = Selecionado
    var Status="aberto"
    const rooRef=database.ref('tarefas/');
    const autoId= rooRef.push().key;
    rooRef.child(autoId).set({
        Nome: Nome,
        Titulo: Titulo,
        Descritivo: Descritivo,
        dataInicio: dataInicio,
        horasInicio: horasInicio,
        dataTermino: dataTermino, 
        horasTermino:horasTermino,
        estimativaHoras: estimativaHoras,
        estimativadataFinalizar:estimativadataFinalizar,
        estimativahorasFinalizar:estimativahorasFinalizar ,
        Status: Status
        
    });

    alert('Tarefa cadastrado!');
    window.location.reload();
}
function getInputVal(id){
    return document.getElementById(id).value;
}


function submitTarefa(e){
    e.preventDefault();

    var Selecionado = $("#listar-select option:selected").text();
    console.log(Selecionado);
    var Titulo = getInputVal('Titulo');
    var Descritivo = getInputVal('Nome');
    var dataInicio = "não atribuido";
    var horasInicio= "não atribuido";
    var dataTermino = "não atribuido";
    var horasTermino= "não atribuido";
    var estimativadataFinalizar="não atribuido";
    var estimativahorasFinalizar="não atribuido";
    var estimativaHoras = getInputVal('horas');

    console.log(Titulo,Descritivo +" " + dataInicio +" " + horasInicio +" " + estimativaHoras);

    saveTarefa(Titulo,Descritivo, dataInicio,horasInicio, dataTermino, horasTermino,estimativaHoras, Selecionado,estimativadataFinalizar,estimativahorasFinalizar);
}


firebase.database().ref('funcionario').orderByChild('Nome').on('value', function (snapshot){
    var content = '';
    inHTML('listar-select',"");
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
       
      //  content +='<tbody>';
                content +=' <option value='+val.Nome+'>'+val.Nome +'</option>';
              
                
              //  content +='</tbody>';
            
    });
    $('#listar-select').append(content);


});

/** 
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
/**
        var val = item.val();
       
      //  content +='<tbody>';
                content +='<tr>';
                content += '<td>'+val.Nome+'</td>';
                content += '<td>'+val.Cargo+'</td>';
                
                content += '<td class="text-right"><button type="submit" class="btn btn-info btn-round" onclick="" > Excluir</button></td>';
               // content += '<td>'+'<a class="waves-effect waves-light btn-floating deep-purple accent-1"  href='+val.link+'><i class="material-icons centered">directions_car</i></a>'+'</td>';
                
                content += '</tr>';
              //  content +='</tbody>';
            
    });
    $('#ex-table4').append(content);


});*/

