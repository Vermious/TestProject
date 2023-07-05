<?php

namespace App\Responses\Group;

use App\Services\Group\GroupServiceInterface;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowResponse extends JsonResource
{
    private GroupServiceInterface $groupService;
    private $uuid;

    public function __construct(GroupServiceInterface $groupService, string $uuid)
    {
        $this->groupService = $groupService;
        $this->uuid = $uuid;
    }

    public function getViewData()
    {
        return [
            'users' => $this->groupService->groupUsersByUuid($this->uuid),
        ];
    }
}