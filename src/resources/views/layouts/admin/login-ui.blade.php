<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @livewire('common-head',[
        'layout'=>'app',
        'title' => $title ?? null,
        'head'  => $head ?? null,
        'meta'  => $meta ?? null,
    ])

<body>
    {{ $slot }}
    @livewireScripts
</body>
</html>