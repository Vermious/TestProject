<?php

namespace Database\Factories;

use App\Models\Booking;
use App\Models\Organization;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    public function definition(): array
    {
        return [
            'addressable_id' => $this->faker->numberBetween(1, 999),
            'addressable_type' => $this->faker->randomElement([Organization::class]),
            'city_name' => $this->faker->city(),
            'postal_code' => $this->faker->postcode(),
            'street_name' => $this->faker->streetName() ,
            'house_number' => $this->faker->buildingNumber(),
            'province' => $this->faker->state(),
        ];
    }
}
