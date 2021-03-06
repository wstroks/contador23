@extends('layouts.app', [
    'class' => '',
    'elementActive' => 'iniciar-tarefas'
])

@section('content')
@if(Auth::guard('web')->check() && Auth::guard('web')->user()->name=="Supervisor Onix")
    <div class="content">
        <div class="row">
            <div class="col-md-12">
                

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
                                    </th scope="col">
                                    <th scope="col">
                                        Funcionário
                                    </th scope="col">
                                    <th scope="col">
                                        Descritivo da Tarefa
                                    </th scope="col">
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
    
                                    <th class="text-right">
    
                                    </th>

                                    <th class="text-right">
    
                                    </th>
                                    
                                </thead>
    
    
                                <tbody id="ex-table1">
                                    
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


<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.4.0/moment.min.js"></script>
<script src="js/tarefa-lista.js"> </script>

@endpush