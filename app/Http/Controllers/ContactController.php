<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Requests\CreateContactRequest;
use App\Services\Contact\ContactServiceInterface;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact/Contact');
    }

    // Temp fix this as fast as possible (its a ugly fix...)
    public function contact()
    {
        return Inertia::render('Contact/Contact1');
    }

    public function store(ContactServiceInterface $contactService, CreateContactRequest $request): void
    {
        $contactService->storeContact($request);
    }

    // Also temp, same as above
    public function send(ContactServiceInterface $contactService, CreateContactRequest $request): void
    {
        $contactService->storeContact($request);
    }
}
