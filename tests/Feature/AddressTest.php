<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Address;
use App\Models\Organization;
use Spatie\Permission\Models\Role;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AddressTest extends TestCase
{
    use RefreshDatabase;

    public function setUp():void 
    {
        // Given
        parent::setUp();
        
        $role = Role::create(['name' => 'admin']);

        $this->user = User::factory()->create()->assignRole($role->name);
        $this->address = Address::factory()->create();
        $this->org = Organization::factory()->withUser()->create();
    }

    public function testOrgCanCreateAddress()
    {
        // Given
        $address = Address::factory()->create([
            "addressable_id" => $this->org->id,
            "addressable_type" => "App\Models\Organization",
          ]); 

        // Then
        $this->assertInstanceOf(Organization::class, $address->addressable);
    }

    public function testUserCanCreateAddress()
    {
        // Given
        $address = Address::factory()->create([
            "addressable_id" => $this->user->id,
            "addressable_type" => "App\Models\User",
          ]); 

        // Then
        $this->assertInstanceOf(User::class, $address->addressable);
    }

    public function testItCanCreateAddress()
    {
        // Given

        // organisatie
        $organizationName = 'Padel Peakz';
        $padelCourt = 1;

        // Address
        $id = $this->address->id;
        $addressableId = $this->address->addressable_id;
        $addressableType = $this->address->addressable; 
        $cityName = 'Echt';
        $postalCode = '2593 SM';
        $streetName = 'Wellandweg';
        $houseNumber = '32';
        $province = 'Noord-Holland';

        $url = route('organization.store');

        $data = [
            'organization_name' => $organizationName,
            'padel_court' => $padelCourt,
            'address_id' => $id, 
            'addressable_id' => $addressableId,
            'addressable_type' => $addressableType,
            'city_name' => $cityName,
            'postal_code' => $postalCode,
            'street_name' => $streetName,
            'house_number' => $houseNumber,
            'province' => $province
        ];

        // When
        $responseOrg = $this->actingAs($this->user)
            ->post($url, $data)
            ->assertStatus(302);

        // Then 
        $responseOrg->assertSessionHasNoErrors();
        
        $this->assertEquals($id, $data['address_id']);
        $this->assertEquals($cityName, $data['city_name']);
        $this->assertEquals($postalCode, $data['postal_code']);
        $this->assertEquals($streetName, $data['street_name']);
        $this->assertEquals($houseNumber, $data['house_number']);
        $this->assertEquals($province, $data['province']);
    }
}
