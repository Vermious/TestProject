<?php

namespace App\Services\Contact;

use App\Models\Contact;
use App\Http\Requests\CreateContactRequest;

class ContactService implements ContactServiceInterface
{
    public function storeContact(CreateContactRequest $request): void
    {
        //dd($request->all());

        $contact = new Contact();

        $contact->name = $request->get('name');
        $contact->email = $request->get('email');
        $contact->subject = $request->get('subject');
        $contact->message = $request->get('message');

        $contact->save();
    }
}
