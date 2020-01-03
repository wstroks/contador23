document.getElementById('formtarefa').addEventListener('submit', submitTarefa);

const database = firebase.database();





function saveTarefa(Descritivo, Data_inicio,HorasInicio, EstimativaHoras, Selecionado){
    //var novoFuncionario = cadastroFuncionario.push().key();
    const rooRef=database.ref('tarefas/'+Selecionado);
    const autoId= rooRef.push().key;
    rooRef.child(autoId).set({
        Descritivo: Descritivo,
        Data_inicio: Data_inicio,
        HorasInicio: HorasInicio,
        EstimativaHoras: EstimativaHoras
    });

    alert('Tarefa cadastrado!');
}
function getInputVal(id){
    return document.getElementById(id).value;
}


function submitTarefa(e){
    e.preventDefault();

    var Selecionado = $("#listar-select option:selected").text();
    console.log(Selecionado);
    
    var Descritivo = getInputVal('Nome');
    var Data_inicio = getInputVal('Data_inicio');
    var HorasInicio= getInputVal('hora-cons');
    var EstimativaHoras = getInputVal('horas');

    console.log(Descritivo +" " + Data_inicio +" " + HorasInicio +" " + EstimativaHoras);

    saveTarefa(Descritivo, Data_inicio,HorasInicio, EstimativaHoras, Selecionado);
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
