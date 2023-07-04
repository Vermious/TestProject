<?php

namespace App\Responses\Group;

use App\Services\Group\GroupServiceInterface;
use Illuminate\Http\Resources\Json\JsonResource;

class EditResponse extends JsonResource
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
            'group' => $this->groupService->getGroupByUuid($this->uuid),
        ];
    }
}