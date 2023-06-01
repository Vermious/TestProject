<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Booking;
use Spatie\Permission\Models\Role;
use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BookingTest extends TestCase
{
    use RefreshDatabase;

    public function setUp():void 
    {
        parent::setUp();

        $role = Role::create(['name' => 'admin']);

        $this->user = User::factory()->create()->assignRole($role->name);
        $this->booking = Booking::factory()->withUser()->create();
    }

    public function testItCanConnectUserWithBooking()
    {
        $expected = $this->booking->user()->first();

        $this->assertTrue($expected instanceof User);
    }

    public function testItCanShowBooking()
    {
        // Given 
        $url = route('booking.view');
        
        // When
        $this->actingAs($this->user)
            ->get($url)
            //Then
            ->assertInertia(fn (Assert $page) => $page
                ->component('Booking/Overview'));
    }

    public function testItCannotShowCreatePage()
    {
        // Given 
        $url = route('booking.create');

        // When 
        $this->get($url)
            ->assertStatus(302);
    }

    public function testItCanShowCreatePage()
    {
        // Given 
        $url = route('booking.create');
        
        // When
        $this->actingAs($this->user)
            ->get($url)
            //Then
            ->assertInertia(fn (Assert $page) => $page
                ->component('Booking/Create'));
    }

    public function testItCanCreateBooking()
    {
        // Given
        $uuid = '6fe94d62-690b-4655-ac87-e1a43854f47d';
        $userId = $this->user->id; 
        $price = 19.99;
        $location = 'Test location'; 
        $timeForm = '09:00';
        $playTime = '01:00';
        $reservationDate = '2023-04-18';
        $padelCourt = 1;

        $data = [
            'uuid' => $uuid,
            'user_id' => $userId,
            'price' => $price,
            'time_from' => $timeForm,
            'selected' => $playTime,
            'reservation_date' => $reservationDate,
            'padel_court' => $padelCourt,
            'location' => $location,
        ];

        $url = route('booking.store');
        
        // When 
        $response = $this->actingAs($this->user)
            ->post($url, $data);

        // Then
        $response->assertSessionHasNoErrors();
        
        $this->assertEquals($uuid, $data['uuid']);
        $this->assertEquals($userId, $data['user_id']);
        $this->assertEquals($price, $data['price']);
        $this->assertEquals($timeForm, $data['time_from']);
        $this->assertEquals($playTime, $data['selected']);
        $this->assertEquals($reservationDate, $data['reservation_date']);
        $this->assertEquals($padelCourt, $data['padel_court']);
        $this->assertEquals($location, $data['location']);
    }

    public function testItCanShowEditPage()
    {
        // Given 
        $url = route('booking.edit', ['uuid' => $this->booking->uuid]);

        // When
        $this->actingAs($this->user)
            ->get($url)
            //Then
            ->assertInertia(fn (Assert $page) => $page
                ->component('Booking/Edit'));
    }

    public function testItCannotShowEditPage()
    {
        // Given 
        $url = route('booking.edit', ['uuid' => $this->booking->uuid]);

        // When 
        $this->get($url)
            ->assertStatus(302);
    }

    public function testItCanUpdateBooking()
    {
        // Given
        $newLocation = 'Updated location';

        $data = [
            'uuid' => $this->booking->uuid,
            'user_id' => $this->booking->user_id,
            'price' => $this->booking->price,
            'time_from' => $this->booking->time_from,
            'play_time' => $this->booking->play_time,
            'reservation_date' => $this->booking->reservation_date,
            'padel_court' => $this->booking->padel_court,
            'location' => $newLocation,
        ];

        $url = route('booking.update', ['uuid' => $this->booking->uuid]);

        // When 
        $response = $this->actingAs($this->user)
            ->post($url, $data);

        // Then 
        $response->assertSessionHasNoErrors();

        $this->assertDatabaseHas('bookings',[
            'id' => $this->booking->id, 
            'location' => 'Updated location',
        ]);
    }
}
