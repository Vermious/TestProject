<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AVGController extends Controller
{
    public function index()
    {
        return Inertia::render('TermsOfService');
    }
}
