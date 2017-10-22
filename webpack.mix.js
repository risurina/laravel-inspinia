let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js/')
	.combine([
		'inspinia-assets/js/jquery-3.1.1.min.js',
		'inspinia-assets/js/bootstrap.min.js',
		'inspinia-assets/js/plugins/metisMenu/jquery.metisMenu.js',
		'inspinia-assets/js/plugins/slimscroll/jquery.slimscroll.min.js',
		'inspinia-assets/js/inspinia.js',
		'inspinia-assets/js/plugins/pace/pace.min.js',
		'inspinia-assets/js/plugins/wow/wow.min.js',
	], 'public/js/app.js')

   .sass('resources/assets/sass/app.scss', 'public/css')
   .combine([
	     'inspinia-assets/css/bootstrap.min.css'
	    ,'inspinia-assets/css/animate.css'
	    ,'inspinia-assets/font-awesome/css/font-awesome.css'
	    ,'inspinia-assets/css/style.css'
   	], 'public/css/app.css')
   .version();
