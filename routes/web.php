<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ContactController;
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
    'role:user|organisation|admin',
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Bookings 
    Route::prefix('bookings')->group(function () {
        Route::get('/view', [BookingController::class, 'index'])->name('booking.view');
        Route::get('/create', [BookingController::class, 'create'])->name('booking.create');
        Route::post('/create/store', [BookingController::class, 'store'])->name('booking.store');
        Route::get('/edit/{uuid}', [BookingController::class, 'edit'])->name('booking.edit');
        Route::post('/edit/{uuid}/update', [BookingController::class, 'update'])->name('booking.update');
    });

    // Buddies
    Route::prefix('buddies')->group(function(){
        Route::get('/view', [UserController::class, 'index'])->name('buddies.view');
    });

    // Groups
    Route::prefix('groups')->group(function(){
        Route::get('/view', [GroupController::class, 'index'])->name('groups.view');
    });

    // Organisations
    Route::middleware('role:admin|organisation')->prefix('organisations')->group(function (){
        Route::get('/view', [OrganizationController::class, 'index'])->name('organization.view');
        Route::get('/create', [OrganizationController::class, 'create'])->name('organization.create');
        Route::post('/create/store', [OrganizationController::class, 'store'])->name('organization.store');
    });

    // Contact
    Route::prefix('contact')->group(function (){
        Route::get('/view', [ContactController::class, 'index'])->name('contact.view');
        Route::post('/store', [ContactController::class, 'store'])->name('contact.store');
    });
});

// Buiten de applicatie toegankelijke routes

    // contact page
Route::get('/contact', function () {
    return Inertia::render('Contact/Contact1', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('contact.show');
Route::post('cantact/store', [ContactController::class, 'store'])->name('contact.send');
