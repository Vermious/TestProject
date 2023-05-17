<?php

namespace App\Responses\Booking;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Services\Booking\BookingServiceInterface;

class OverviewResponse extends JsonResource 
{
    private BookingServiceInterface $bookingService;

    public function __construct(BookingServiceInterface $bookingService)
    {
        $this->bookingService = $bookingService;
    }

    public function getViewData(): array
    {
        return [
            'bookings' => $this->bookingService->getBookings(),
        ]; 
    }
}