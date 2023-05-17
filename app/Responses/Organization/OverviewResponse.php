<?php

namespace App\Responses\Organization;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Services\Organization\OrganizationServiceInterface;

class OverviewResponse extends JsonResource 
{
    private OrganizationServiceInterface $organizationService;

    public function __construct(OrganizationServiceInterface $organizationService)
    {
        $this->organizationService = $organizationService;
    }

    public function getViewData(): array
    {
        return [
            'organizations' => $this->organizationService->getOrganizations(),
        ]; 
    }
}