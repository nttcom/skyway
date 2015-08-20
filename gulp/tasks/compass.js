// -->
// Compass & SASS
// <--
var gulp         = require('gulp');
var compass      = require('gulp-compass');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').compass;
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');

gulp.task('compass', function() {
  return gulp.src(config.sass)
    .pipe(compass({
        config_file: 'src/compass/config.rb',
        css: config.css, 
        sass: config.sass
    }))  
        .on('error', function(err) {
            // Would like to catch the error here
            console.log('Compass error')
            console.log(err);
        })
});

gulp.task('css', ['compass'], function() {
  return gulp.src('./build/styles.css')
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] }))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/'))
    
});