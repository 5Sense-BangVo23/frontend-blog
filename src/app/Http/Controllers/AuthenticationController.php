<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Livewire\Facades\Livewire;

class AuthenticationController extends Controller
{
    public function showLoginForm()
    {
        return view('authentication.admin.login');
    }

    public function showSpecificView()
    {
        Livewire::component('common-head-manager')->addStyle('/css/specific.css')->addScript('/js/specific.js');

        return view('specific_view');
    }
}
