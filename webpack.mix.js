let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */

mix.js('resources/js/app.js', 'assets/js')
.less('resources/less/main.less', 'assets/css')
.options({
    postCss: [tailwindcss('tailwind.js')]
})
