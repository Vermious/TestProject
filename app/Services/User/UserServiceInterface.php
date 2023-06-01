<?php

namespace App\Services\User;

use Illuminate\Pagination\LengthAwarePaginator;

interface UserServiceInterface 
{
    public function getUsers(): LengthAwarePaginator;
}