<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\OrganizationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::prefix('bookings')->group(function () {
        Route::get('/view', [BookingController::class, 'index'])->name('booking.view');
        Route::get('/create', [BookingController::class, 'create'])->name('booking.create');
        Route::post('/create/store', [BookingController::class, 'store'])->name('booking.store');
        Route::get('/edit/{uuid}', [BookingController::class, 'edit'])->name('booking.edit');
        Route::post('/edit/{uuid}/update', [BookingController::class, 'update'])->name('booking.update');
    });

    Route::prefix('organizations')->group(function (){
        Route::get('/view', [OrganizationController::class, 'index'])->name('organization.view');
        Route::get('/create', [OrganizationController::class, 'create'])->name('organization.create');
        Route::post('/create/store', [OrganizationController::class, 'store'])->name('organization.store');
    });
});
