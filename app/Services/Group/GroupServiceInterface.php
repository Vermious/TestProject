<?php

namespace App\Services\Group;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

interface GroupServiceInterface 
{
    public function getGroupByUserId($userId): Collection;

    public function storeGroupName(Request $request): void;

    public function getGroupByUuid(string $uuid): Group;

    public function updateGroupName(Request $request, string $uuid): void;

    public function deleteGroup(string $uuid): void;

    public function groupUsersByUuid(string $uuid): Collection;
}