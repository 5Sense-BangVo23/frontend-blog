<!-- resources/views/layouts/templates/home.blade.php -->
<x-layout-admin-app>
    @php
        $title = "Dashboard Blog";
        $description = 'Dashboard Blog';
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

    </x-slot>
    
    <main>
        <h1>Welcome Dashboard</h1>
    </main> 

     
</x-layout-admin-app>













