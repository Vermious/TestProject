<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Address;
use App\Models\Booking;
use App\Models\Availability;
use App\Models\Organization;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(5)->create();
        Booking::factory(3)->withUser()->create();
        Address::factory(3)->create();
        Organization::factory(2)->withUser()->create();

        \App\Models\User::factory()->create([
            'name' => 'Michiel',
            'email' => 'dev@test.nl',
            'password' => bcrypt('Test12345'),
        ]);
    }
}
