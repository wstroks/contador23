var database = firebase.database();
var labelC=[];
var estimaC=[];

var labelT=[];
var estimaT=[];

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
        
    
    
    
        var data = datas.val();
        
        $.each(data, function(nodo, value) {
                var sendData = dadosHoras(value.Horas,value.Minutos);
                var sendData1=dadosComprido(value.tarefasComprindas);
                var sendData2=dadosAtrasadas(value.tarefasAtrasadas);
                var sendData3=dadosInfo(value.tarefasComprindas,value.tarefasAtrasadas);
                labelC.push(value.Nome);
                estimaC.push(value.tarefasComprindas);

                labelT.push(value.Nome);
                estimaT.push(value.tarefasAtrasadas);
                printHTML('tempo',sendData);
                printHTML('compridos',sendData1);
                printHTML('atrasados',sendData2);
                printHTML('info',sendData3);

                //printTabela(Selecionado);

        });    
        
  var ctx = document.getElementById('primeiroGrafico');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
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
                    min: 0,
                    beginAtZero: true                },
                    
            }]
        }
    }
});



var ctx = document.getElementById('segundoGrafico');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
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
                    min: 0,
                    beginAtZero: true                },
                    
            }]
        }
    }
});
    });

var h=0;
var m=0;
function dadosHoras(Horas,Minutos){
    inHTML("tempo","");
    h=h+Horas;
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
    
    var y=m;
    
        
    
       
    return h+ 'H ' + m+' M';
            
}
var tarefasC=0;
function dadosComprido(tarefasCompridas){
    inHTML("compridos","");
    tarefasC+=  parseInt(tarefasCompridas);
    return tarefasC;
            
                
}
var tarefasA=0;
function  dadosAtrasadas(tarefasAtrasadas){
    inHTML("atrasados","");
    tarefasA+= parseInt(tarefasAtrasadas);
    return  tarefasA;
}
var calculo = 0;
 function dadosInfo(tarefasCompridas, tarefasAtrasadas){
    inHTML("info","");
     calculo += parseInt(tarefasCompridas)+parseInt(tarefasAtrasadas)
    return calculo;
 }



