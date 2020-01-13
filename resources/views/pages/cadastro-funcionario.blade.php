@extends('layouts.app', [
'class' => '',
'elementActive' => 'cadastro-funcionario'
])

@section('content')
<div class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="card ">
                <div class="card-header">
                    <h5> Cadastrar Funcionário</h5>
                </div>
                <div class="card-body ">
                    <form class="col-md-12" id="form_funcionario">
                        <div class="card-body">
                            <div class="row">
                                <label class="col-md-3 col-form-label">{{ __('Nome') }}</label>
                                <div class="col-md-9">
                                    <div class="form-group">
                                        <input type="text" id="Nome" name="Nome" class="form-control" placeholder="Nome"
                                            required>
                                    </div>


                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 col-form-label">{{ __('Cargo') }}</label>
                                <div class="col-md-9">
                                    <div class="form-group">
                                        <input type="text" id="Cargo" name="Cargo" class="form-control"
                                            placeholder="Cargo" required>
                                    </div>

                                </div>
                            </div>

                            <div class="row">
                                <label class="col-md-3 col-form-label">{{ __('Email') }}</label>
                                <div class="col-md-9">
                                    <div class="form-group">
                                        <input type="text" id="Email" name="Email" class="form-control"
                                            placeholder="Email" required>
                                    </div>

                                </div>
                            </div>

                            <div class="card-footer ">
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <button type="submit"
                                            class="btn btn-info btn-round">{{ __('Cadastrar') }}</button>

                                    </div>

                                </div>
                            </div>
                    </form>
                </div>
            </div>
            <!--
                <div class="card">
                    <div class="card-header">
                      <h5> Lista de Funcionionários </h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table" id="ex-table">
                                <thead class=" text-primary">
                                    <th>
                                        Nome
                                    </th>
                                    <th>
                                        Cargo
                                    </th>

                                    <th>
                                        Email
                                    </th>
                                   
                                    <th class="text-right">
                                       
                                    </th>
                                </thead>


                                    <tbody id="ex-table">
                                        <tr id="tr">
                                            
                                        </tr>
                                </tbody>
                            </table>
                                </div>
                        </div>
                </div> !-->
        </div>
        <div class="card">
            <div class="card-header">
                <h5> Lista de Funcionionários </h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table" id="ex-table">
                        <thead class=" text-primary">
                            <th>
                                Nome
                            </th>
                            <th>
                                Cargo
                            </th>

                            <th>
                                Email
                            </th>

                            <th class="text-right">

                            </th>
                        </thead>


                        <tbody id="ex-table">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


</div>
@endsection

@push('scripts')


<script src="js/funcionario.js"> </script>
@endpush