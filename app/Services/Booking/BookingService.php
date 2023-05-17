<?php 

namespace App\Services\Booking;

use App\Models\User;
use App\Models\Booking;
use App\Http\Requests\CreateBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use Illuminate\Database\Eloquent\Collection;

class BookingService implements BookingServiceInterface
{
    public function getBookings(): Collection
    {
        return Booking::all()->transform(function ($booking) {
                return $data = [
                    'id' => $booking->id,
                    'uuid' => $booking->uuid,
                    'location' => $booking->location,
                    'time_from' => $booking->time_from->format('H:i'),
                    'play_time' => $booking->play_time->format('H:i'),
                    'reservation_date' => $booking->reservation_date,
                    'padel_court' => $booking->padel_court,
                ];
        });
    }

    public function storeBooking(CreateBookingRequest $request): void
    {
        $booking = new Booking();

        $booking->user_id = auth()->user()->id;
        $booking->time_from = $request->get('time_from');
        $booking->play_time = $request->get('selected');
        $booking->reservation_date = $request->get('reservation_date');
        $booking->padel_court = $request->get('padel_court');
        $booking->location = $request->get('location');
        $booking->price = $request->get('price');

        $booking->save();
    }

    public function getBookingByUuid(string $uuid): Booking
    {
        return Booking::findByUuid($uuid);
    }

    public function updateBooking(UpdateBookingRequest $request, string $uuid): void
    {
        $booking = Booking::findByUuid($uuid);

        $booking->user_id = auth()->user()->id;
        $booking->time_from = $request->get('time_from');
        $booking->play_time = $request->get('play_time');
        $booking->reservation_date = $request->get('reservation_date');
        $booking->padel_court = $request->get('padel_court');
        $booking->location = $request->get('location');
        $booking->price = $request->get('price');

        $booking->save();
    }
}
