<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Responses\Group\EditResponse;
use App\Responses\Group\ShowResponse;
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

    public function edit(GroupServiceInterface $groupService, string $uuid): Response
    {
        $data = new EditResponse($groupService, $uuid);

        return Inertia::render('Group/Edit', [
            'pageData' => $data->getViewData(),
        ]);
    }

    public function update(GroupServiceInterface $groupService, Request $request, string $uuid)
    {
        $groupService->updateGroupName($request, $uuid);
        
        return redirect()->route('groups.view');
    }

    public function show(GroupServiceInterface $groupService, string $uuid)
    {
        $data = new ShowResponse($groupService, $uuid);

        return Inertia::render('Group/Show', [
            'pageData' => $data->getViewData(),
        ]);
    }

    public function destroy(GroupServiceInterface $groupService, string $uuid)
    {
        $groupService->deleteGroup($uuid);

        return redirect()->route('groups.view');
    }
}
