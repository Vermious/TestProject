<?php

namespace App\Services\Group;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class GroupService implements GroupServiceInterface
{
    public function getGroupByUserId($userId): Collection
    {
        return DB::table('groups')
            ->join('group_user', 'group_user.group_id', '=', 'groups.id')
            ->join('users', 'group_user.user_id', '=', 'users.id')
            ->where('users.id', '=', $userId)->get();
    }

    public function storeGroupName()
    {
        
    }
}