<!-- resources/views/layouts/templates/home.blade.php -->
<x-layout-admin-app>
    @php
        $title = config('app.site_name');

        $description = 'My website personal blog';
    @endphp
    <x-slot name="title">
        {{ $title }}
    </x-slot>
    <x-slot name="meta">
        <meta name="description" content="{{ $description }}">
    </x-slot>


    <x-slot name="head">

    </x-slot>


    <main>
        <h1>Welcome</h1>
    </main>

    
</x-layout-admin-app>













