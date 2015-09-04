// OLD Gulp File. This is not being used.

var gulp = require('gulp'),
    path = require('path'),
    
    gulpLoadPlugins = require('gulp-load-plugins');
    plugins = gulpLoadPlugins();

    ignore = require('gulp-ignore');
    cp = require('child_process');

    // CSS
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css'),

    // JS BUILD
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),

    // HTML
    htmlmin = require('gulp-htmlmin'),

    // Browser sync
    browserSync = require('browser-sync'),

    // Import files
    pkg = require('./package.json')
;

//var dist              = '_source/'
var dist              = './',
    distAssets      = dist + 'assets/',
    distStylesheets = distAssets + 'css/',
    distJavascripts = distAssets + 'js/',
    distImages      = distAssets + 'img/',

//    deploy          = '_deploy/',
     deploy          = '_site/',

    src = '',
    srcStylesheets = src + 'sass/',
    srcJavascripts = src + 'scripts/'
;

// -->
// JS Build
// <--
//gulp.task('jshint', function() {
//    gulp.src([srcJavascripts + '*.js'])
//        .pipe(ignore.exclude(/jquery-2\.1\.4\.min\.js/))
//        .pipe(ignore.exclude(/bootstrap\.min\.js/))
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});

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

// -->
// Compass & SASS
// <--
gulp.task('compass', function() {
//    gulp.src(srcStylesheets + '*.scss')
//        .pipe(compass({
//            css: distStylesheets,
//            sass: srcStylesheets,
//            image: distImages,
//            logging: true,
//            style: 'compressed'
//        }))
//            .on('error', function(err) {
//                // Would like to catch the error here
//                console.log('Compass error')
//                console.log(err);
//            })
//        .pipe(minifyCSS({keepBreaks: false, keepSpecialComments:true}))
//        .pipe(gulp.dest(distStylesheets));
});

// -->
// Jekyll
// <--

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

//gulp.task('jekyll', ['js', 'compass'], function (gulpCallBack){
gulp.task('jekyll', function (done){
     browserSync.notify(messages.jekyllBuild);
     return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
         .on('close', done);
});

// -->
// HTML (runs AFTER jekyll task)
// <--
gulp.task('html',  function() {
    // --> Minhtml
    // WARNING: The code below causes uncaught parse errors
//    gulp.src([
//        path.join(deploy, '*.html'),
//        path.join(deploy, '*/*/*.html'),
//        path.join(deploy, '*/*/*/*.html')
//    ])
//        .pipe(htmlmin({collapseWhitespace: true}))
//        .pipe(gulp.dest(deploy))
//        .pipe(browserSync.reload({stream:true, once: true}));
});

// -->
// Browser Sync
// <--
gulp.task('browser-sync', ['jekyll'], function() {
    browserSync.init(null, {
        server: {
            baseDir: "./" + deploy
        }
    });
});
// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// -->
// Default task
// <--
gulp.task('default', ['js', 'browser-sync'], function (event) {
    // --> CSS
    gulp.watch(srcStylesheets+"**", ['html']);
    //--> HTML
    gulp.watch([
        path.join(dist, '*.html'),
        path.join(dist, '*/*.html'),
        path.join(dist, '*/*.md')
    ], ['html']);
    // --> Ruby
    gulp.watch(path.join(dist, '*/*.rb'), ['html']);
    // --> JS
    gulp.watch(srcJavascripts+"*.js", ['html']);

})

// Handle the error
function errorHandler (error) {
//  console.log(error.toString());
    console.log('There has been an error.');
  this.emit('end');
}