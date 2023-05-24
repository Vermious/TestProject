<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Contact;
use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ContactTest extends TestCase
{
    use RefreshDatabase;

    public function setUp():void 
    {
        parent::setUp();

        $this->user = User::factory()->create();
        $this->contact = Contact::factory()->create();
    }

    public function testShowContactPage()
    {
        // Given
        $url = route('contact.view');
        // When
        $this->actingAs($this->user)
            ->get($url)
            //Then
            ->assertInertia(fn (Assert $page) => $page
                ->component('Contact/Contact'));; 
        
    } 

    public function testStoreContactInfo(){
        // Given
        $name = 'Michiel';
        $email = 'test@test.nl';
        $subject = 'Bug report';
        $message = 'This is a great piece of test content';

        $data = [
            'name' => $name ,
            'email' => $email,
            'subject' => $subject,
            'message' => $message,
        ];

        $url = route('contact.store');

        // When
        $response = $this->actingAs($this->user)
            ->post($url, $data)
            ->assertStatus(200);

        // Then
        $response->assertSessionHasNoErrors();

        $this->assertEquals($name, $data['name']);
        $this->assertEquals($email, $data['email']);
        $this->assertEquals($subject, $data['subject']);
        $this->assertEquals($message, $data['message']);
    }
}
