<?php

/**
 * Main route for the frontend
 */
Route::get('/', function () {
    return view('layouts.app');
});

/**
 * Returns the language labels
 */
Route::get('/labels', 'LanguageController@index');
