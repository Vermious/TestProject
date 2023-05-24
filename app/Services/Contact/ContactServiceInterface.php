<?php

namespace App\Services\Contact;

use App\Http\Requests\CreateContactRequest;

interface ContactServiceInterface
{
    public function storeContact(CreateContactRequest $request): void;
}