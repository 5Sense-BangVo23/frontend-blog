<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    @if($meta)
        {{ $meta }}
    @endif

    <title>
        @if($title)
            {{ $title }}
        @else
            {{ config('app.site_name') }}
        @endif
    </title>

    @if($layout === 'app')
        <link rel="stylesheet" href="{{ config('app.asset_function')('css/app.css') }}">
        <script src="{{ config('app.asset_function')('/js/app.js') }}" defer></script>
        <script src="{{ mix('js/jquery-3.6.0.min.js') }}"></script>
    @endif

    @if($head)
        {{ $head }}
    @endif
</head>
