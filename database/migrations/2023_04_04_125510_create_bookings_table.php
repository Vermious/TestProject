<?php

use App\Models\User;
use App\Models\Availability;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->foreignIdFor(User::class);
            $table->time('time_from');
            $table->time('play_time');
            $table->date('reservation_date');
            $table->integer('padel_court');
            $table->float('price', 6, 2);
            //TODO: Reference to organisation?
            $table->string('location');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
