@extends('layouts.app', [
    'class' => '',
    'elementActive' => 'painel-funcionario'
])

@section('content')
@if(Auth::guard('web')->check() && Auth::guard('web')->user()->email=="adm@gmail.com")
<div class="content">
    <div class="row">

        <div class="col-md-12">
            <div class="card">

                <div class="card-header">
                    <h5>Selecione o funcionário que deseja ver as informações</h5>
                    <div class="card-body ">
                        <select class="browser-default custom-select" id="listar-select">
                            <option value="0" selected disabled>Selecionar...</option>


                        </select>
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
                                <i class="nc-icon nc-watch-time text-warning"></i>
                            </div>
                        </div>
                        <div class="col-7 col-md-8">
                            <div class="numbers">
                                <p class="card-category ">Tempo</p>
                                <p class="card-title" id="tempo">
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer ">
                    <hr>
                    <div class="stats">
                        <i class="fa fa-calculator"></i> Total de tempo
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            

            <div class="card">
                <div class="card-header">
                 <h5>  Lista de Tarefas </h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table" >
                            <thead class=" text-primary">
                                <th scope="col">
                                    Titulo
                                </th scope="col">
                                <th scope="col">
                                    Funcionário
                                </th scope="col">
                                <th scope="col">
                                    Descritivo da Tarefa
                                </th scope="col">
                                <th scope="col">
                                    Data
                                </th>
                                <th scope="col">
                                    Horas
                                </th>

                                <th scope="col">
                                    Tempo estimado
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
    </div>
</div>

@endif
    

@endsection

@push('scripts')
<script src="js/funcionario-status.js"> </script>
@endpush