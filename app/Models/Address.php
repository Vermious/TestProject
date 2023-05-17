<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Address extends Model
{
    use HasFactory;

    const ARGUMENTS = [
        'addressable_id',
        'addressable_type',
        'city_name',
        'postal_code',
        'street_name',
        'house_number',
        'province',
    ];

    protected $fillable = [
        'addressable_id',
        'addressable_type',
        'city_name',
        'postal_code',
        'street_name',
        'house_number',
        'province',
    ]; 

    public function addressable(): MorphTo
    {
        return $this->morphTo();
    }
}
