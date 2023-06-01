<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Group;
use App\Models\Address;
use App\Models\Booking;
use App\Models\Contact;
use App\Models\Organization;
use Illuminate\Database\Seeder;
use Database\Seeders\RoleSeeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(10)->create();
        Group::factory(2)->create();
        Booking::factory(3)->withGroup()->create();
        Address::factory(3)->create();
        Organization::factory(2)->withUser()->create();
        Contact::factory(1)->create();

        $this->call(RoleSeeder::class);

        \App\Models\User::factory()->create([
            'name' => 'admin',
            'email' => 'dev@test.nl',
            'password' => bcrypt('Test12345'),
        ])->assignRole(['admin', 'organisation', 'user']);
    }
}
