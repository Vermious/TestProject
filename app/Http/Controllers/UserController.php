<?php

namespace App\Http\Controllers;

use App\Responses\User\OverviewResponse;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\User\UserServiceInterface;
use Inertia\Response;

class UserController extends Controller
{
    public function index(UserServiceInterface $userService): Response
    {
        $data = new OverviewResponse($userService);
        //dd($data->getViewData());
        
        return Inertia::render('Buddies/Overview', [
            'pageData' => $data->getViewData(),
        ]);
    }
}
