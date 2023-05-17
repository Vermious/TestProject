<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateBookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'selected' => [
                'required',
            ],
            'time_from' => [
                'required',
            ],
            'reservation_date' => [
                'required',
            ],
            'padel_court' => [
                'required',
            ],
            'price' => [
                'required',
            ],
            'location' => [
                'required',
                'string:150'
            ],
        ];
    }
}
