<?php

namespace App\Services\Contact;

use App\Models\Contact;
use App\Http\Requests\CreateContactRequest;

class ContactService implements ContactServiceInterface
{
    public function storeContact(CreateContactRequest $request): void
    {
        $validated = $request->validated();

        $validated = $request->safe()->only('name', 'email', 'subject', 'message');

        $contact = new Contact();

        $contact->name = $validated['name'];
        $contact->email = $validated['email'];
        $contact->subject = $validated['subject'];
        $contact->message = $validated['message'];

        $contact->save();
    }
}
