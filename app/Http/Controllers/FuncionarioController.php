<?php

namespace App\Http\Controllers;
use  Auth;   
use Illuminate\Http\Request;

class FuncionarioController extends Controller
{
    //

    public function __construct(){
       // $this->middleware('auth');
    }

    public function index(){
        return view('funcionario.indexss');
    }

        
    public function login(){
        return view('auth.funcionario-login');
    }

    public function postLogin(Request $request){
        

        $validator = validator($request->all(), [
            'email'=> 'required|min:3|max:100',
            'password'=>'required|min:3|max:100'
        ]
    );
    //dd($validator->fails());
        if($validator->fails()){
            return redirect('funcionarios-view/login')
                   ->withErrors($validator)
                   ->withInput();

        
    }
    $crende = ['email'=> $request->get('email'), 'password'=> $request->get('password')];
    if(auth()->guard('funcionario')->attempt($crende)){
        return redirect('/funcionarios-view');

    }else{
        return redirect('/funcionarios-view/login-f')
        ->withErrors(['errors'=> 'Login invalido'])
        ->withInput();
                   
    }

}

function logout(){
    auth()->guard('funcionario')->logout();

    return redirect('/funcionarios-view/login-f');
}
}
