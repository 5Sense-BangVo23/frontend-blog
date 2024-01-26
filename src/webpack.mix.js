const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css')
   .version();

mix.js('resources/js/jquery-3.6.0.min.js','public/js').version();

mix.webpackConfig({
   resolve: {
      extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
   },
});
