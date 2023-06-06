<?php

namespace App\Responses\Group;

use App\Services\Group\GroupServiceInterface;
use Illuminate\Http\Resources\Json\JsonResource;

class OverviewResponse extends JsonResource
{
    private GroupServiceInterface $groupService;

    public function __construct(GroupServiceInterface $groupService, private readonly int $userId)
    {
        $this->groupService = $groupService;
    }

    public function getViewData()
    {
        return [
            'user' => $this->groupService->getGroupByUserId($this->userId),
        ];
    }
}