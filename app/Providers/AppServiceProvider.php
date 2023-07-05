<?php

namespace App\Providers;

use App\Services\User\UserService;
use App\Services\Group\GroupService;
use Illuminate\Support\ServiceProvider;
use App\Services\Booking\BookingService;
use App\Services\Contact\ContactService;
use App\Services\User\UserServiceInterface;
use App\Services\Group\GroupServiceInterface;
use App\Services\Booking\BookingServiceInterface;
use App\Services\Contact\ContactServiceInterface;
use App\Services\Organization\OrganizationService;
use App\Services\Organization\OrganizationServiceInterface;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(BookingServiceInterface::class, BookingService::class);
        $this->app->bind(OrganizationServiceInterface::class, OrganizationService::class);
        $this->app->bind(ContactServiceInterface::class, ContactService::class);
        $this->app->bind(UserServiceInterface::class, UserService::class);
        $this->app->bind(GroupServiceInterface::class, GroupService::class);
    }
    
    public function boot(): void
    {
        //
    }
}
