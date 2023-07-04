<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Responses\Group\OverviewResponse;
use App\Services\Group\GroupServiceInterface;

class GroupController extends Controller
{
    public function index(GroupServiceInterface $groupService): Response
    {
        $userId = Auth::user()->id;
        $data = new OverviewResponse($groupService, $userId);

        return Inertia::render('Group/Overview', [
            'pageData' => $data->getViewData(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Group/Create');
    }

    public function store(GroupServiceInterface $groupService, Request $request)
    {
        $groupService->storeGroupName($request);
        
        return redirect()->route('groups.view');
    }
}
