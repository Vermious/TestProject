<?php 

namespace App\Services\Booking;

use App\Models\Booking;
use App\Http\Requests\CreateBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use Illuminate\Database\Eloquent\Collection;

interface BookingServiceInterface
{
    public function getBookings(): Collection;

    public function storeBooking(CreateBookingRequest $request): void;

    public function getBookingByUuid(string $uuid): Booking;

    public function updateBooking(UpdateBookingRequest $request, string $uuid): void;
}