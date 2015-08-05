var gulp = require('gulp'),
    path = require('path'),
    ignore = require('gulp-ignore'),
    
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var dist              = './',
    distAssets      = dist + 'assets/',
    distJavascripts = distAssets + 'js/',
    
    src = 'src/',
    srcJavascripts = src + 'javascript/';

gulp.task('js', function () {
    
    gulp.src([
        path.join(srcJavascripts, '*.js'),
        path.join(srcJavascripts, '*/*.js')
    ])
        .pipe(ignore.exclude(/jquery-2\.1\.4\.min\.js/))
        .pipe(ignore.exclude(/bootstrap\.min\.js/))
        .pipe(ignore.exclude(/api-scroll\.js/))
    
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(distJavascripts))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(distJavascripts));
});