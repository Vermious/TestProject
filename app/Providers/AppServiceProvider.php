<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Address\AddressService;
use App\Services\Booking\BookingService;
use App\Services\Address\AddressServiceInterface;
use App\Services\Booking\BookingServiceInterface;
use App\Services\Organization\OrganizationService;
use App\Services\Organization\OrganizationServiceInterface;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(BookingServiceInterface::class, BookingService::class);
        $this->app->bind(OrganizationServiceInterface::class, OrganizationService::class);
    }
    
    public function boot(): void
    {
        //
    }
}
