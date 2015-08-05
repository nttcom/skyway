var gulp = require('gulp'),
    path = require('path'),
    
    gulpLoadPlugins = require('gulp-load-plugins');
    plugins = gulpLoadPlugins();

    ignore = require('gulp-ignore');

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


var dist              = '_source/'
    , dirPublic       = '/'
    , distAssets      = dist + dirPublic + 'assets/'
    , distStylesheets = distAssets + 'css/'
    , distJavascripts = distAssets + 'js/'
    , distImages      = distAssets + 'img/'

//    , deploy          = '_deploy/'
    , deploy          = '_site/'

    , src = ''
    , srcStylesheets = src + 'sass/'
    , srcJavascripts = src + 'scripts/'
//    , srcTemplates   = src + 'templates/'
;

// -->
// JS Build
// <--
gulp.task('jshint', function() {
    gulp.src([srcJavascripts + '*.js'])
        .pipe(ignore.exclude(/jquery-2\.1\.4\.min\.js/))
        .pipe(ignore.exclude(/bootstrap\.min\.js/))
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('js', ['jshint'], function () {
    gulp.src([srcJavascripts + '*.js'])
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
// HTML (runs AFTER jekyll task)
// <--
gulp.task('html', ['jekyll'], function() {
    // --> Minhtml
    gulp.src([
        path.join(deploy, '*.html'),
        path.join(deploy, '*/*/*.html'),
        path.join(deploy, '*/*/*/*.html')
    ])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(deploy))
        .pipe(browserSync.reload({stream:true, once: true}));
});

// -->
// Browser Sync
// <--
gulp.task('browser-sync', function() {
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
// Jekyll
// <--
//gulp.task('jekyll', ['js', 'compass'], function (gulpCallBack){
gulp.task('jekyll', ['js'], function (gulpCallBack){
    var spawn = require('child_process').spawn;
    // After build: cleanup HTML
    var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
});

// -->
// Default task
// <--
gulp.task('default', ['jekyll', 'browser-sync'], function (event) {
    // --> CSS
    gulp.watch(srcStylesheets+"**", ['html']);
    --> HTML
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
  console.log(error.toString());
  this.emit('end');
}