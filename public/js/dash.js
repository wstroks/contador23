var database = firebase.database();
var labelC=[];
var estimaC=[];

var labelT=[];
var estimaT=[];

var calculo = 0;
var tarefasC=0;
var contador=0;
var tarefasEm=0;
var tarefasA=0;
function value(request){
    
    return  document.getElementById(request).value;
  }
  function printHTML(request,response){
    
    return document.getElementById(request).innerHTML+=response;
  }

  function inHTML(request,response){
      
    return document.getElementById(request).innerHTML=response;
}

var ref = database.ref('funcionario').orderByChild('Nome');    
    ref.on('value',function(datas){
        /*
        inHTML('tempo',"");
        inHTML('compridos',"");
        inHTML('atrasados',"");
        inHTML('info',"");
        inHTML('andamento',"");*/
        calculo = 0;
        tarefasC=0;
        contador=0;
        tarefasEm=0;
        tarefasA=0;
        labelC=[];
        estimaC=[];
        
        labelT=[];
        estimaT=[];

      
    
        var data = datas.val();
        
        $.each(data, function(nodo, value) {
                var sendData = dadosHoras(value.Horas,value.Minutos);
                var sendData1=dadosComprido(value.tarefasComprindas);
                var sendData2=dadosAtrasadas(value.tarefasAtrasadas);
                var sendData3=dadosInfo(value.tarefasComprindas,value.tarefasAtrasadas,value.tarefasemAndamento);
                var sendData4=emAndamento(value.tarefasemAndamento);
                labelC.push(value.Nome);
                estimaC.push(parseInt(value.tarefasComprindas));

                labelT.push(value.Nome);
                estimaT.push(parseInt(value.tarefasAtrasadas));

                inHTML('tempo',"");
                inHTML('compridos',"");
                inHTML('atrasados',"");
                inHTML('info',"");
                inHTML('andamento',"");

                printHTML('tempo',sendData);
                printHTML('compridos',sendData1);
                printHTML('atrasados',sendData2);
                printHTML('info',sendData3);
                printHTML('andamento',sendData4);

                //printTabela(Selecionado);

        });    
        grafico();
        
 
    });
    
  
//var tarefasAndamento=0;

function emAndamento(tarefasemAndamento){
    inHTML("andamento","");
    //tarefasAndamento+=  parseInt(tarefasemAndamento);
    tarefasEm+=parseInt(tarefasemAndamento);
    return tarefasEm;
}

var h=0;
var m=0;

function dadosHoras(Horas,Minutos){
    inHTML("tempo","");
    contador+=1;
   /* h=h+Horas;
    m=m+Minutos;
    var x=h;
    while(x>0 && m<0){
        if(m>0){
            x=-1;
        }else{
        if(h>0){ 
        h-=1;
        m+=60;
    }else{
        x=-1;
    }
       }
    }
    
    var y=m;*/
    
        
    
       
    return contador;
            
}

function dadosComprido(tarefasCompridas){
    inHTML("compridos","");
    tarefasC+=  parseInt(tarefasCompridas);
    return tarefasC;
            
                
}

function  dadosAtrasadas(tarefasAtrasadas){
    inHTML("atrasados","");
    tarefasA+= parseInt(tarefasAtrasadas);
    return  tarefasA;
}

 function dadosInfo(tarefasCompridas, tarefasAtrasadas,tarefasemAndamento){
    inHTML("info","");
     calculo += parseInt(tarefasCompridas)+parseInt(tarefasAtrasadas)+parseInt(tarefasemAndamento);
    return calculo;
 }


 function grafico(){
    inHTML("primeiroGrafico","");
    inHTML("segundoGrafico","");
    Chart.defaults.horizontalBar;
    var ctx = document.getElementById('primeiroGrafico').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labelC,
          datasets: [{
              label: 'Trabalhos no Prazo',
              data: estimaC,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 250, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: { 
              yAxes: [{
                  ticks: {
                      beginAtZero:  true
                                 }
                      
              }]
          }
      }
  });
  
  //horizontalBar
  
  var ctx = document.getElementById('segundoGrafico').getContext('2d');
    var myChart = new Chart(ctx, {
      responsive: true,
      type: 'bar',
      data: {
          labels: labelT,
          datasets: [{
              label: 'Trabalhos Fora do Prazo',
              data: estimaT,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 250, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: { 
              yAxes: [{
                  ticks: {
                     
                     beginAtZero: true                
                    }
                      
              }]
          }
      }
  });
  
 }