<?php 

namespace App\Services\Organization;

use Illuminate\Database\Eloquent\Collection;
use App\Http\Requests\CreateOrganizationRequest;

interface OrganizationServiceInterface
{
    public function getOrganizations(): Collection;

    public function storeOrganization(CreateOrganizationRequest $request): void;
}