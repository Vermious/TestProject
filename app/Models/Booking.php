<?php

namespace App\Models;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booking extends Model
{
    use HasFactory;
    use Uuid;

    protected $fillable = [
        'price',
        'time_from',
        'play_time',
        'reservation_date',
        'padel_court',
        'location',
    ];

    protected $casts = [
        'time_from' => 'datetime',
        'play_time' => 'datetime',
        'date' => 'date',
    ];

    // public function user(): BelongsTo
    // {
    //     return $this->belongsTo(User::class, 'user_id');
    // }
    
    public function group(): BelongsTo
    {
        return $this->belongsTo(Group::class, 'group_id');
    }
}
