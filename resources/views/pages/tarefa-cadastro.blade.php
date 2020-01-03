@extends('layouts.app', [
    'class' => '',
    'elementActive' => 'tarefa-cadastro'
])
@section('content')
<div class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                
                <div class="card-header">
                    Selecione o funcionário que deseja cadastrar a tarefa
                    <div class="card-body ">
            <select class="browser-default custom-select"  id="listar-select"> 

           
                
            </select>
        </div>
                </div>
            </div>
            
            <div class="card ">
                <div class="card-header">
                    Cadastrar Tarefa
                </div>
                <div class="card-body ">
                 <form class="col-md-12" id="formtarefa"> 
                    <div class="card-body">
                        <div class="row">
                            <label class="col-md-3 col-form-label">{{ __('Descritivo da tarefa') }}</label>
                            <div class="col-md-9">
                                <div class="form-group">
                                    <input type="text" id="Nome" name="Nome" class="form-control" placeholder="" required>
                                </div> 
                              
                                
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-md-3 col-form-label">{{ __('Data Inicio') }}</label>
                            <div class="col-md-9">
                                <div class="form-group">
                                    <input type="date" id="Data_inicio" name="Data_inicio" class="form-control" placeholder="00/00/0000" required>
                                </div>
                               
                            </div>
                        </div>

                        <div class="row">
                            <label class="col-md-3 col-form-label">{{ __('Horário que irá iniciar tarefa') }}</label>
                            <div class="col-md-9">
                                <div class="form-group">
                                    <input id="hora-cons" type="time" class="form-control" name="hora-cons" value="13:30">
                                </div>
                               
                            </div>
                        </div>

                        <div class="row">
                            <label class="col-md-3 col-form-label">{{ __('Quantidade de horas estimada') }}</label>
                            <div class="col-md-9">
                                <div class="form-group">
                                    <input type="text" id="horas" name="horas" class="form-control" placeholder="Exemplo 16:40" required>
                                </div>
                               
                            </div>
                        </div>

                        <div class="card-footer ">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <button type="submit" class="btn btn-info btn-round" >{{ __('Cadastrar') }}</button>
                                    
                                </div>
                                
                            </div>
                        </div>
                 </form>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                   Lista de Tarefas
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table" id="ex-table1">
                            <thead class=" text-primary">

                                <th>
                                    Funcionário
                                </th>
                                <th>
                                    Descritivo da Tarefa
                                </th>
                                <th>
                                    Data e hora
                                </th>

                                <th>
                                    Tempo estimado 
                                </th>

                                <th>
                                    Status da tarefa
                                </th>
                               
                                <th class="text-right">
                                   
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
@endsection

@push('scripts')



<script src="js/tarefa.js">  </script>

@endpush