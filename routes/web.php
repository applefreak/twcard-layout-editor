<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::resource('editor', 'LayoutController');

Auth::routes();

// Route::get('editor', 'EditorController@index');

Route::get('/dashboard', 'DashboardController@index');
Route::get('/profile', 'ProfileController@index');
