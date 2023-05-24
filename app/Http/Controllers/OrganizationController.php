<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Organization;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\CreateOrganizationRequest;
use App\Responses\Organization\OverviewResponse;
use App\Services\Organization\OrganizationServiceInterface;

class OrganizationController extends Controller
{
    public function index(OrganizationServiceInterface $organziationService): Response
    {
        $data = new OverviewResponse($organziationService);
        
        return Inertia::render('Organization/Overview', [
            'pageData' => $data->getViewData(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Organization/Create');
    }

    public function store(CreateOrganizationRequest $request, OrganizationServiceInterface $organziationService): RedirectResponse
    {
        $organziationService->storeOrganization($request);

        return redirect()
            ->route('organization.view')
            ->with('message', 'De organisatie is succesvol geregistreerd');
    }
}
