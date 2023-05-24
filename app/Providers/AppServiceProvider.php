<?php

namespace App\Providers;

use App\Services\Contact\ContactService;
use Illuminate\Support\ServiceProvider;
use App\Services\Booking\BookingService;
use App\Services\Contact\ContactServiceInterface;
use App\Services\Booking\BookingServiceInterface;
use App\Services\Organization\OrganizationService;
use App\Services\Organization\OrganizationServiceInterface;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(BookingServiceInterface::class, BookingService::class);
        $this->app->bind(OrganizationServiceInterface::class, OrganizationService::class);
        $this->app->bind(ContactServiceInterface::class, ContactService::class);
    }
    
    public function boot(): void
    {
        //
    }
}
