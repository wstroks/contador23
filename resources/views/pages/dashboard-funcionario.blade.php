@extends('layouts.app', [
    'class' => '',
    'elementActive' => 'dashboard-funcionario'
])

@section('content')
    <div class="content">
        <div class="row">

            
                <div class="col-md-12">
                    <div class="card text-white text-center bg-primary mb-3" >
                        <div class="card-header ">
                            <h5 class="card-title">  <span id="usuarioNome">{{Auth::guard('web')->user()->name}}</span></h5>
                            
                        </div>
                        
                        
                    </div>
                </div>
            
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-5 col-md-4">
                                <div class="icon-big text-center icon-warning">
                                    <i class="nc-icon nc-chart-bar-32 text-primary"></i>
                                </div>
                            </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-category">Total</p>
                                <p  id="info">
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer ">
                        <hr>
                        <div class="stats">
                            <i class="fa fa-refresh"></i> Total de trabalhos 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-5 col-md-4">
                                <div class="icon-big text-center icon-warning">
                                    <i class="nc-icon nc-trophy text-success"></i>
                                </div>
                            </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-category " >Compridos</p>
                                <p class="card-title" id="compridos">

                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer ">
                        <hr>
                        <div class="stats">
                            <i class="fa fa-calendar-o"></i> Trabalhos no prazo
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-5 col-md-4">
                                <div class="icon-big text-center icon-warning">
                                    <i class="nc-icon nc-simple-remove text-danger"></i>
                                </div>
                            </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-category">Atrasados</p>
                                <p class="card-title" id="atrasados">
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer ">
                        <hr>
                        <div class="stats">
                            <i class="fa fa-clock-o"></i> Trabalhos atrasados
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-5 col-md-4">
                                <div class="icon-big text-center icon-warning">
                                    <i class="nc-icon nc-settings text-info"></i>
                                </div>
                            </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-category ">em andamento</p>
                                <p class="card-title" id="andamento">
                                   
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer ">
                        <hr>
                        <div class="stats">
                            <i class="fa fa-calculator"></i> Trabalhos em andamento
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-5 col-md-4">
                                <div class="icon-big text-center icon-warning">
                                    <i class="nc-icon nc-single-02 text-warning"></i>
                                </div>
                            </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-category "> Tempo</p>
                                <p class="card-title" id="tempo">
                                   
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer ">
                        <hr>
                        <div class="stats">
                            <i class="fa fa-calculator"></i> Total de horas
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <!--


        <div class="row">
            <div class="col-md-12">
                <div class="card ">
                    <div class="card-header ">
                        <h5 class="card-title">Gráfico de quantidade de trabalhos feito fora do prazo</h5>
                        <p class="card-category">Performance negativa dos funcionários</p>
                    </div>
                    <div class="card-body ">
                        <canvas id="segundoGrafico" width="400" height="100"></canvas>
                    </div>
                    <div class="card-footer ">
                        <hr>
                        <div class="stats">
                            <i class="fa fa-history"></i> Atualizado
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> -->

        <div class="card">
            <div class="card-header">
             <h5>  Lista de Tarefas </h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead class=" text-primary">
                            <th scope="col">
                                Titulo
                            </th >

                            <th scope="col">
                                Funcionário
                            </th >
                            
                            <th scope="col">
                                Descritivo da Tarefa
                            </th>
                            
                            <th scope="col">
                                Horário de início
                            </th>
                            

                            <th scope="col">
                                Tempo estimado
                            </th>

                            <th scope="col">
                                Prazo para finalizar
                            </th>

                            <th scope="col">
                                Status da Tarefa
                            </th>

                            
                            
                        </thead>


                        <tbody id="ex-table1">
                            <tr id="tr">

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       
    </div>
@endsection

@push('scripts')


<script src="js/funcionario/dashboard-funcionario.js"> </script>
<!--
    <script>
        $(document).ready(function() {
            // Javascript method's body can be found in assets/assets-for-demo/js/demo.js
            demo.initChartsPages();
        });
    </script> !-->

@endpush