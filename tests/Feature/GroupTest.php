<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Group;
use Spatie\Permission\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;

class GroupTest extends TestCase
{
    use RefreshDatabase;

    public function setUp():void 
    {
        parent::setUp();

        $this->role = Role::create(['name' => 'admin']);

        $this->user = User::factory()->create()->assignRole($this->role->name);
        $this->group = Group::factory()->create();
    }

    public function testItCanConnectUserWithGroup()
    {
        $this->group->users()->sync($this->user);

        $expected = $this->group->users()->first();

        $this->assertTrue($expected instanceof User);
    }

    public function testItCanStoreDataInPivotGroup_User()
    {
        $this->group->users()->sync($this->user);

        $this->assertDatabaseHas('group_user', [
            'user_id' => $this->user->id,
            'group_id' => $this->group->id
        ]);
    }
}
