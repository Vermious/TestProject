<?php

namespace App\Services\User;

use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;

class UserService implements UserServiceInterface
{
    public function getUsers(): LengthAwarePaginator
    {
        // return User::all()->transform(function($user){
        //     return $data = [
        //         'id' => $user->id,
        //         'name' => $user->name,
        //         'last_name' => $user->last_name,
        //         'ranking' => $user->ranking,
        //     ];
        // })->paginate(10);

        return User::select('id', 'name', 'last_name', 'ranking')->paginate(10);
    }
}