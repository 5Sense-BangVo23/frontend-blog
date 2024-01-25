<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    @livewire('common-head', array( 
        'layout' => $layout ?? 'app',
        'title' => $title ?? null,
        'head' => $head ?? null,
        'meta' => $meta ?? null,
    ))
    <body>
       
    </body>

    @livewireStyles
    @livewireScripts
</html>
