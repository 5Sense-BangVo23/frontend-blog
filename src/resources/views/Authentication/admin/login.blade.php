<!-- resources/views/authentication/login.blade.php -->
<x-login-ui> 
    @php
        $title = "Authentication";
        $description = 'Authentication Dashboard Blog';
        $urlPath = request()->path();
        $urlFull = request()->fullUrl();
    @endphp
    <x-slot name="title">
        {{ $title }}
    </x-slot>
    <x-slot name="meta">
        <meta property="og:title" content="{{  $title  }}" />
        <meta name="description" content="{{ $description }}">
        <meta property="og:description" content="{{ $description }}" />
        <meta property="og:url" content="{{ $urlFull }}" />
        <meta property="og:path" content="{{  $urlPath }}" />
    </x-slot>


    <x-slot name="head">
        {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <script src="{{ mix('js/app.js') }}"></script> --}}
        <link rel="stylesheet" href="{{ config('app.asset_function')('css/style.css') }}">
    </x-slot>
    <main class="container mt-5">
        <div class="col-md-6 offset-md-3 custom-form-container">
            <h2 class="text-center custom-form-heading">Administration</h2>
    
            <div id="login-status" class="mb-3"></div>
    
            <form id="login-form">
                @csrf
                <div class="mb-3">
                    <label for="email" class="form-label custom-label">Email</label>
                    <input type="email" class="form-control custom-input" name="email" id="email" required autofocus>
                </div>
    
                <div class="mb-3">
                    <label for="password" class="form-label custom-label">Password</label>
                    <input type="password" class="form-control custom-input" name="password" id="password" required>
                </div>
    
                <button type="button" class="btn btn-custom btn-block" onclick="login()">Login</button>
            </form>
    
            <a href="#" onclick="forgotPassword()" class="mt-3 d-block text-center custom-link">Forgot Your Password?</a>
        </div>
    </main>
    
    
</x-login-ui>