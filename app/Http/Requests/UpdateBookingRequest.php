<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'play_time' => [
                'required',
            ],
            'time_from' => [
                'required',
            ],
            'reservation_date' => [
                'required',
                'date',
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
