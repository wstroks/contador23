@extends('layouts.app', [
    'class' => '',
    'elementActive' => 'funcionario-view-lista'
])

@section('content')
<div class="content">
    <div class="row">
        <div class="col-md-12">
            

            <div class="card">
                <div class="card-header">
                 <h5>  Lista de tarefas finalizadas por <span id="usuarioNome">{{Auth::guard('web')->user()->name}}</span></h5>
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
@endsection

@push('scripts')


<script src="js/funcionario/listaTask.js"> </script>


@endpush
