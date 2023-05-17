<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAddressRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'city_name' => [
                'string',
                'required',
            ],
            'postal_code' => [
                'string',
                'required',
            ],
            'street_name' => [
                'string',
                'required',
            ],
            'house_number' => [
                'integer',
                'required',
            ],
            'province' => [
                'string',
                'required',
            ],
        ];
    }
}
