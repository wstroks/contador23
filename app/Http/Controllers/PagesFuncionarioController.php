<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesFuncionarioController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth');
        
    }

    /**
     * Display all the static pages when authenticated
     *
     * @param string $page
     * @return \Illuminate\View\View
     */
    public function index(string $page)
    {
        if (view()->exists("pagesFuncionario.{$page}")) {
            return view("pagesFuncionario.{$page}");
        }

        return abort(404);
    }
}
