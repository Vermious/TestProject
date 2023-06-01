<?php

namespace App\Responses\User;

use App\Services\User\UserServiceInterface;
use Illuminate\Http\Resources\Json\JsonResource;

class OverviewResponse extends JsonResource 
{
    private UserServiceInterface $userService;

    public function __construct(UserServiceInterface $userService)
    {
        $this->userService = $userService;
    }

    public function getViewData(): array
    {
        return [
            'users' => $this->userService->getUsers(),
        ];
    }
}