<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::get('dashboard', function () {
    $produtos = DB::table('produtos')->get(); 

    return Inertia::render('dashboard', ['produtos' => $produtos]); 
})->name('dashboard.index');

Route::get('/produtos', function () {
    $produtos = DB::table('produtos')->get(); 

    return Inertia::render('produtos', ['produtos' => $produtos]); 
})->name('produtos.index');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
