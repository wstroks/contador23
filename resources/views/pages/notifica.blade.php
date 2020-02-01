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
                <div class="modal fade bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">Finalizando Tarefa</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
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
    
    
                                <tbody id="ex-table5">
                                    
                                </tbody>
                            </table>
                        </div>
                        </div>
                        <div class="modal-footer">
                          <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>-->
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.4.0/moment.min.js"></script>
<script src="js/funcionario/notifica.js"> </script>


@endpush