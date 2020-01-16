@extends('layouts.app', [
    'class' => '',
    'elementActive' => 'notifica'
])

@section('content')
<div class="content">
    <div class="row">
        <div class="col-md-12">
            

            <div class="card">
                <div class="card-header">
                 <h5>  Lista de sinalização que alguns funcionarios ja terminaram o serviço, faltando sua aprovação </h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <thead class=" text-primary">
                                <th scope="col">
                                    Titulo
                                </th scope="col">
                                <th scope="col">
                                    Descritivo
                                </th scope="col">
                                <th scope="col">
                                    Nome
                                </th scope="col">
                               

                                
                                
                            </thead>


                            <tbody id="ex-table100">
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


<script src="js/funcionario/notifica.js"> </script>


@endpush