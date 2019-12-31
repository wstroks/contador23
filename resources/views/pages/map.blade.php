@extends('layouts.app', [
    'class' => '',
    'elementActive' => 'map'
])

@section('content')
    <div class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="card ">
                    <div class="card-header">
                        Cadastrar Funcionário
                    </div>
                    <div class="card-body ">
                     <form class="col-md-12" id="form_funcionario"> 
                        <div class="card-body">
                            <div class="row">
                                <label class="col-md-3 col-form-label">{{ __('Nome') }}</label>
                                <div class="col-md-9">
                                    <div class="form-group">
                                        <input type="text" id="Nome" name="Nome" class="form-control" placeholder="Nome" required>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 col-form-label">{{ __('Cargo') }}</label>
                                <div class="col-md-9">
                                    <div class="form-group">
                                        <input type="text" id="Cargo" name="Cargo" class="form-control" placeholder="Cargo" required>
                                    </div>
                                   
                                </div>
                            </div>

                            <div class="card-footer ">
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <button type="submit" class="btn btn-info btn-round">{{ __('Cadastrar') }}</button>
                                    </div>
                                    
                                </div>
                            </div>
                     </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')


<script src="js/funcionario.js">  </script>
@endpush