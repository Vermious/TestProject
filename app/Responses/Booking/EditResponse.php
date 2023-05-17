<?php

namespace App\Responses\Booking;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Services\Booking\BookingServiceInterface;

class EditResponse extends JsonResource 
{
    private $uuid;

    public function __construct(BookingServiceInterface $bookingService, string $uuid)
    {
        $this->bookingService = $bookingService;
        $this->uuid = $uuid;
    }

    public function getViewData(): array
    {
        return [
            'booking' => $this->bookingService->getBookingByUuid($this->uuid),
        ]; 
    }
}