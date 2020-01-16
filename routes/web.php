<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//welcome
/*
Route::get('/', function () {
    //return view('welcome');
});*/
Auth::routes();
Route::get('/', 'HomeController@index')->name('home');
Route::get('/home', 'HomeController@index')->name('home');

/*
Route::group(['middleware' => 'funcionario'], function () {
	Route::middleware('auth:funcionario')->group(function () {
	Route::get('funcionarios-view','FuncionarioController@index');
	
});
   //Route::get('{page}', ['asP' => 'pagesFuncionario.index', 'funcionario' => 'PagesFuncionarioController@index']);
   //Route::get('/funcionarios-view/login','FuncionarioController@dash');
	Route::get('funcionarios-view/login-f','FuncionarioController@login')->name('login-f');
	Route::post('funcionarios-view/login-f','FuncionarioController@postLogin');
	Route::get('funcionarios-view/logout','FuncionarioController@logout');

	
});*/

Route::group(['middleware' => 'auth'], function () {
	Route::resource('user', 'UserController', ['except' => ['show']]);
	Route::get('profile', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
	Route::put('profile', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
	Route::put('profile/password', ['as' => 'profile.password', 'uses' => 'ProfileController@password']);
});
//Route::get('{page}', ['asP' => 'pagesFuncionario.index', 'funcionario' => 'PagesFuncionarioController@index']);

Route::group(['middleware' => 'auth'], function () {
	Route::get('{page}', ['as' => 'page.index', 'uses' => 'PageController@index']);
	
});


