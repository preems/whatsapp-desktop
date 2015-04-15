var gulp = require('gulp'); 

var builder = require('gulp-node-webkit-builder');
var appdmg = require('gulp-appdmg');
var rm = require('gulp-rimraf');

VERSION='1.0.1';

gulp.task('clean', function() {
    gulp.src('dist/*').pipe(rm());
});


gulp.task('build-osx64', function() {
	return gulp.src(['./src/**'])
		.pipe(builder({
			macIcns:'./assets/WhatsApp.icns',
			platforms:['osx64'],
			appName:'WhatsApp'
		}));
});

gulp.task('build-win64', function() {
	return gulp.src(['./src/**'])
		.pipe(builder({
			winIco:'./assets/WhatsApp.ico',
			platforms:['win64'],
			appName:'WhatsApp'
		}));
});



gulp.task('package-osx64', ['clean','build-osx64'], function() {
	return gulp.src([])
		.pipe(appdmg({
			source: 'assets/dmg.json',
			target:'dist/WhatsApp.dmg'
		}));

});

gulp.task('default',['build-osx64','package-osx64']);
