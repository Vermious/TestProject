<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateContactRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
            ],
            'email' => [
                'required',
                'string',
                'email:rfc,dns'
            ],
            'subject' => [
                'required',
                'string',
            ],
            'message' => [
                'required',
            ],
            'terms' => [
                'required',
            ],
        ];
    }
}
