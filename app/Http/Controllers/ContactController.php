<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Requests\CreateContactRequest;
use App\Services\Contact\ContactServiceInterface;
use Illuminate\Http\RedirectResponse;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact/Contact');
    }

    public function store(ContactServiceInterface $contactService, CreateContactRequest $request): RedirectResponse
    {
        $contactService->storeContact($request);

        return redirect()
            ->back()
            ->with('message', 'Het fomulier is succesvol verzonden');
    }

    // Temp way of store contact info oustide the apllication
    public function send(ContactServiceInterface $contactService, CreateContactRequest $request): RedirectResponse
    {
        $contactService->storeContact($request);

        return redirect()
            ->back()
            ->with('message', 'Het fomulier is succesvol verzonden');
    }
}
