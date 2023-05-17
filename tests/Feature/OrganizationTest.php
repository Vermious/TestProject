<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Organization;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

class OrganizationTest extends TestCase
{
    use RefreshDatabase;

    public function setUp():void 
    {
        //Given 
        parent::setUp();

        $this->user = User::factory()->create();
        $this->organization = Organization::factory()->withUser()->create();
    } 

    public function testItCanConnectWithUser()
    {
        // When
        $expected = $this->organization->user()->first();

        // Then
        $this->assertTrue($expected instanceof User);
    }

    public function testItCanShowOrganizationPage()
    {
        // Given
        $url = route('organization.view');
        
        // When 
        $this->actingAs($this->user)
            ->get($url)       
            // Then
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->component('Organization/Overview'));
    }

    public function testItCannotShowOrganization()
    {
        // Given
        $url = route('organization.view');
        
        // When 
        $response = $this->get($url)
            ->assertStatus(302);
    }

    public function testItCanShowCreatePage()
    {
        // Given
        $url = route('organization.create');
        
        // When 
        $this->actingAs($this->user)
            ->get($url)       
            // Then
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->component('Organization/Create'));
    }

    public function testItCanCreateOrganization()
    {
        // Given
        $id = $this->organization->id;
        $uuid = '6fe94d62-690b-4788-ac87-e1b43854f47d';
        $organizationName = 'Padel Peakz';
        $padelCourt = 1;

        $url = route('organization.store');

        $data = [
            'user_id' => $id, 
            'uuid' => $uuid,
            'organization_name' => $organizationName,
            'padel_court' => $padelCourt,
        ];

        // When
        $response = $this->actingAs($this->user)
            ->post($url, $data);

        // Then 
        $response->assertSessionHasNoErrors();
        
        $this->assertEquals($id, $data['user_id']);
        $this->assertEquals($uuid, $data['uuid']);
        $this->assertEquals($organizationName, $data['organization_name']);
        $this->assertEquals($padelCourt, $data['padel_court']);
    }
}
