<?php 

namespace App\Services\Organization;

use App\Models\Address;
use Illuminate\Support\Arr;
use App\Models\Organization;
use Illuminate\Database\Eloquent\Collection;
use App\Http\Requests\CreateOrganizationRequest;

class OrganizationService implements OrganizationServiceInterface
{
    public function getOrganizations(): Collection
    {
        return Organization::all();
    }

    public function storeOrganization(CreateOrganizationRequest $request): void
    {
        $responseArr = $request->toArray();

        $addressFields = Arr::only($responseArr, Address::ARGUMENTS);

        $organization = new organization();
        $organization->user_id = auth()->user()->id;
        $organization->organization_name = $request->get('organization_name');
        $organization->padel_court = $request->get('padel_court');

        $organization->save();
        
        $organization->address()->create($addressFields);
    }
}
