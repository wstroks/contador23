const database = firebase.database();

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
            
    });
    $('#ex-table1').append(content);


});