<?php

namespace App\Models;

use App\Models\User;
use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Group extends Model
{
    use HasFactory;
    use Uuid;

    protected $fillable = [
        'group_name',
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'group_user', 'group_id', 'user_id');
    }

    public function booking(): HasOne
    {
        return $this->hasOne(Booking::class, 'booking_id');
    }
}
