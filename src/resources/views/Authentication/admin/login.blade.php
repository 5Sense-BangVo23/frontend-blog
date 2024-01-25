<!-- resources/views/Authentication/login.blade.php -->

@extends('layouts.admin.app')

@section('content')
    <div>
        <h2>Login</h2>

        <div id="login-status"></div>

        <form id="login-form">
            @csrf

            <label for="email">Email</label>
            <input type="email" name="email" id="email" required autofocus>

            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>

            <button type="button" onclick="login()">Login</button>
        </form>

        <a href="#" onclick="forgotPassword()">Forgot Your Password?</a>
    </div>

    <script>
    
    </script>
@endsection
