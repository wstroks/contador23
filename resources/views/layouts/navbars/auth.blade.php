<div class="sidebar" data-color="white" data-active-color="danger">
    <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text logo-mini">
            <div class="logo-image-small">
                <img src="{{ asset('paper') }}/img/logo-small.png">
            </div>
        </a>
        <a href="http://www.creative-tim.com" class="simple-text logo-normal">
            {{ __('Creative Tim') }}
        </a>
    </div>
    <div class="sidebar-wrapper">
        <ul class="nav">
            <li class="{{ $elementActive == 'dashboard' ? 'active' : '' }}">
                <a href="{{ route('page.index', 'dashboard') }}">
                    <i class="nc-icon nc-bank"></i>
                    <p>{{ __('Dashboard') }}</p>
                </a>
            </li>
           
            
            <li class="{{ $elementActive == 'cadastro-funcionario' ? 'active' : '' }}">
                <a href="{{ route('page.index', 'cadastro-funcionario') }}">
                    <i class="nc-icon nc-single-02"></i>
                    <p>{{ __('Cadastro') }}</p>
                </a>
            </li>
            
           
            <li class="{{ $elementActive == 'tarefa-cadastro' ? 'active' : '' }}">
                <a href="{{ route('page.index', 'tarefa-cadastro') }}">
                    <i class="nc-icon nc-simple-add"></i>
                    <p>{{ __('Tarefa Cadastro') }}</p>
                </a>
            </li>
            <li class="{{ $elementActive == 'iniciar-tarefas' ? 'active' : '' }}">
                <a href="{{ route('page.index', 'iniciar-tarefas') }}">
                    <i class="nc-icon nc-ruler-pencil"></i>
                    <p>{{ __('Iniciar Tarefa') }}</p>
                </a>
            </li>

            <li class="{{ $elementActive == 'tarefas' ? 'active' : '' }}">
                <a href="{{ route('page.index', 'tarefas') }}">
                    <i class="nc-icon nc-check-2"></i>
                    <p>{{ __('Tarefas Finalizadas') }}</p>
                </a>
            </li>
            
            <li class="{{ $elementActive == 'icons' ? 'active' : '' }}">
                <a href="{{ route('page.index', 'icons') }}">
                    <i class="nc-icon nc-diamond"></i>
                    <p>{{ __('Icons') }}</p>
                </a>
            </li>
            <li class="active-pro {{ $elementActive == 'upgrade' ? 'active' : '' }}">
                <a href="{{ route('page.index', 'upgrade') }}">
                    <i class="nc-icon nc-spaceship"></i>
                    <p>{{ __('Upgrade to PRO') }}</p>
                </a>
            </li>


            <li class="{{ $elementActive == 'user' || $elementActive == 'profile' ? 'active' : '' }}">
                <a data-toggle="collapse" aria-expanded="true" href="#laravelExamples">
                    <i class="nc-icon nc-badge"></i>
                    <p>
                            {{ __('Configurações') }}
                        <b class="caret"></b>
                    </p>
                </a>
                <div class="collapse show" id="laravelExamples">
                    <ul class="nav">
                        <li class="{{ $elementActive == 'profile' ? 'active' : '' }}">
                            <a href="{{ route('profile.edit') }}">
                                <span class="sidebar-mini-icon">{{ __('P') }}</span>
                                <span class="sidebar-normal">{{ __(' Perfil Usuário') }}</span>
                            </a>
                        </li>
                        <li class="{{ $elementActive == 'user' ? 'active' : '' }}">
                            <a href="{{ route('page.index', 'user') }}">
                                <span class="sidebar-mini-icon">{{ __('MU') }}</span>
                                <span class="sidebar-normal">{{ __('Perfeis') }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>