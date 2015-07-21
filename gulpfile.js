var gulp = require('gulp'); 

var builder = require('gulp-node-webkit-builder');
var appdmg = require('gulp-appdmg');
var rm = require('gulp-rimraf');
var shell = require('gulp-shell');

VERSION = '1.1.1';
NW_VERSION = 'v0.12.2';

gulp.task('create-dist',shell.task([
		'mkdir -p dist'
	]));

gulp.task('clean-osx64',['create-dist'], function() {
    gulp.src('dist/WhatsApp.dmg').pipe(rm());
});

gulp.task('clean-win64',['create-dist'], function() {
    gulp.src('dist/WhatsAppWin64.exe').pipe(rm());
});

gulp.task('clean-win32',['create-dist'], function() {
    gulp.src('dist/WhatsAppWin32.exe').pipe(rm());
});


gulp.task('build-osx64', function() {
	return gulp.src(['./src/**'])
		.pipe(builder({
			macIcns:'./assets/WhatsApp.icns',
			platforms:['osx64'],
			version:NW_VERSION,
			appName:'WhatsApp'
		}));
});

gulp.task('build-win64', function() {
	return gulp.src(['./src/**'])
		.pipe(builder({
			winIco:'./assets/WhatsApp.ico',
			platforms:['win64'],
			version:NW_VERSION,
			appName:'WhatsApp'
		}));
});

gulp.task('build-win32', function() {
	return gulp.src(['./src/**'])
		.pipe(builder({
			winIco:'./assets/WhatsApp.ico',
			platforms:['win32'],
			version:NW_VERSION,
			appName:'WhatsApp'
		}));
});

gulp.task('package-osx64', ['clean-osx64','build-osx64'], function() {
	return gulp.src([])
		.pipe(appdmg({
			source: 'assets/dmg.json',
			target:'dist/WhatsApp.dmg'
		}));

});

gulp.task('package-win64',['clean-win64','build-win64'], shell.task([
		'makensis assets/makensiswin64.nsi'
	]));

gulp.task('package-win32',['clean-win32','build-win32'], shell.task([
		'makensis assets/makensiswin32.nsi'
	]));

gulp.task('default',['package-win64','package-win32','package-osx64']);
