<?php

namespace App\Services\Group;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;

interface GroupServiceInterface 
{
    public function getGroupByUserId($userId): Collection;

    public function storeGroupName(Request $request);
}