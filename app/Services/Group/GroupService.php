<?php

namespace App\Services\Group;

use App\Models\User;
use App\Models\Group;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class GroupService implements GroupServiceInterface
{
    public function getGroupByUserId($userId): Collection
    {
        return User::with('groups')->where('id', '=', $userId)->get();
    }
}