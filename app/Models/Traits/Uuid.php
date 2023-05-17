<?php

namespace App\Models\Traits;

use Illuminate\Support\Str;
use Ramsey\Uuid\Uuid as PackageUuid;

trait Uuid
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getUuidName()} = PackageUuid::uuid4()->toString();
        });
    }

    public function scopeUuid($query, $uuid)
    {
        return $query->where($this->getUuidName(), $uuid);
    }

    public function getUuidName()
    {
        return property_exists($this, 'uuidName') ? $this->uuidName : 'uuid';
    }

    public static function findByUuid(string $uuid): self
    {
        return self::where('uuid', '=', $uuid)->firstOrFail();
    }
}