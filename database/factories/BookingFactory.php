<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Availability;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    public function definition(): array
    {
        return [
            'uuid' => $this->faker->uuid(),
            'location' => $this->faker->streetName(),
            'time_from' => $this->faker->time(),
            'play_time' => $this->faker->randomElement(['01:00', '01:30', '02:00']),
            'reservation_date' => $this->faker->date(),
            'padel_court' => $this->faker->numberBetween(1, 7),
            'price' => $this->faker->randomFloat(2, 20, 40),
        ];
    }

    public function withUser(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'user_id' => User::factory(),
            ];
        });
    }
}
