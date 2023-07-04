<?php

namespace App\Services\Group;

use App\Models\Group;
use Illuminate\Http\Request;
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

    public function storeGroupName(Request $request): void
    {
        $group = new Group();

        $group->group_name = $request->get('group_name');

        if($group->save()){
            $group->users()->sync(auth()->user()->id);
        }
    }

    public function getGroupByUuid(string $uuid): Group
    {
        return Group::findByUuid($uuid);
    }

    public function updateGroupName(Request $request, string $uuid): void 
    {
        $group = Group::findByUuid($uuid);

        $group->group_name = $request->get('group_name');

        $group->save();
    }
}