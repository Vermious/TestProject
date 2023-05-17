<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use App\Responses\Booking\EditResponse;
use App\Http\Requests\CreateBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use App\Responses\Booking\OverviewResponse;
use App\Services\Booking\BookingServiceInterface;

class BookingController extends Controller
{
    public function index(BookingServiceInterface $bookingServiceInterface): Response
    {
        $data = new OverviewResponse($bookingServiceInterface);

        return Inertia::render('Booking/Overview', [
            'pageData' => $data->getViewData(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Booking/Create');
    }

    public function store(CreateBookingRequest $request, BookingServiceInterface $bookingServiceInterface): RedirectResponse
    {
        $bookingServiceInterface->storeBooking($request);

        return redirect()->route('booking.view');
    }

    public function edit(BookingServiceInterface $bookingServiceInterface, string $uuid): Response
    {
        $data = new EditResponse($bookingServiceInterface, $uuid);

        return Inertia::render('Booking/Edit', [
            'pageData' => $data->getViewData(),
        ]);
    }

    public function update(UpdateBookingRequest $request, BookingServiceInterface $bookingServiceInterface, string $uuid): RedirectResponse
    {
        $bookingServiceInterface->updateBooking($request, $uuid);

        return redirect()->route('booking.view');
    }
}
