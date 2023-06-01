<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function setUp():void 
    {
        parent::setUp();

        $role = Role::create(['name' => 'admin']);

        $this->user = User::factory()->create()->assignRole($role->name);
    }

    public function testIfBuddiesPageIsVisable()
    {
        // Given 
        $url = route('buddies.view');
        
        // When
        $this->actingAs($this->user)
            ->get($url)
            //Then
            ->assertInertia(fn (Assert $page) => $page
                ->component('Buddies/Overview'));
    }
}
