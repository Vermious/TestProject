<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ContactController extends Controller
{
    public function index(){
        return Inertia::render('Contact/Contact');
    }

    // TEMP fix this as fast as possible (its a ugly fix...)
    public function contact(){
        return Inertia::render('Contact/Contact1');
    }
}
