// -->
// Compass & SASS
// <--
var gulp         = require('gulp');
var compass      = require('gulp-compass');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');

gulp.task('compass', function() {
  return gulp.src(config.src_sass)
    .pipe(compass({
        config_file: 'src/compass/config.rb',
        css: config.dest_css, 
        sass: config.src_sass
    }))  
        .on('error', function(err) {
            // Would like to catch the error here
            console.log('Compass error')
            console.log(err);
        })
});

gulp.task('css', ['compass'], function() {
  return gulp.src(config.dest_css + "/*.css")
    .pipe(autoprefixer({ browsers: ['> 1%',
                                    'last 2 versions',
                                    'firefox >= 4',
                                    'safari 7',
                                    'safari 8',
                                    'IE 8',
                                    'IE 9',
                                    'IE 10',
                                    'IE 11'] }))
    .pipe(minifyCSS())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest(config.dest_css))
    
});