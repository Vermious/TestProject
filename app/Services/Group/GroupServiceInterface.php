<?php

namespace App\Services\Group;

use Illuminate\Support\Collection;

interface GroupServiceInterface 
{
    public function getGroupByUserId($userId): Collection;
}