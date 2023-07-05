<?php

namespace App\Services\User;

use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;

class UserService implements UserServiceInterface
{
    public function getUsers(): LengthAwarePaginator
    {
        return User::select('id', 'name', 'last_name', 'ranking')->paginate(10);
    }
}