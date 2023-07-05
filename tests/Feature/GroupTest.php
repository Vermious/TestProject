<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Group;
use Spatie\Permission\Models\Role;
use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Foundation\Testing\RefreshDatabase;

class GroupTest extends TestCase
{
    use RefreshDatabase;

    public function setUp():void 
    {
        // Given
        parent::setUp();

        $this->role = Role::create(['name' => 'admin']);

        $this->user = User::factory()->create()->assignRole($this->role->name);
        $this->group = Group::factory()->create();
    }

    public function testItCanConnectUserWithGroup()
    {
        // Given
        $this->group->users()->sync($this->user);

        // When
        $expected = $this->group->users()->first();

        // Then
        $this->assertTrue($expected instanceof User);
    }

    public function testItCanStoreDataInPivotGroup_User()
    {
        // When
        $this->group->users()->sync($this->user);

        // Then
        $this->assertDatabaseHas('group_user', [
            'user_id' => $this->user->id,
            'group_id' => $this->group->id
        ]);
    }

    public function testShowGroupPage()
    {
        // Given
        $url = route('groups.view');

        // When
        $this->actingAs($this->user)
            ->get($url)
            ->assertStatus(200)
            // Then
                ->assertInertia(fn (Assert $page) => $page
                ->component('Group/Overview'));
    }
}
