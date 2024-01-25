<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{ $meta ?? '<!-- Debug: Meta is null. --> <meta content="Default Meta">' }}

    <title>
        {{ $title ?? config('app.site_name') }}
    </title>

    @if($layout == 'app')
        <link rel="stylesheet" href="{{ config('app.asset_function')('css/app.css') }}"/>
        <script src="{{ config('app.asset_function')('js/app.js') }}" defer></script>
    @endif

    {{ $head ?? '<!-- Debug: Head is null. --> <meta content="Default Head">' }}
</head>
