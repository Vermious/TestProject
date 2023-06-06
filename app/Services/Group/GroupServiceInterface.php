<?php

namespace App\Services\Group;

use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Database\Eloquent\Collection;

interface GroupServiceInterface 
{
    public function getGroupByUserId($userId): Collection;
}