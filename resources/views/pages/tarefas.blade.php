@extends('layouts.app', [
    'class' => '',
    'elementActive' => 'tarefas'
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
                        <table id="example" class="table" >
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
                                    Finalizado no dia
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

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap.min.js"></script>
<script src="js/tarefa-finalizada.js"> </script>

@endpush