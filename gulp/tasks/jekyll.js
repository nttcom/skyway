var browserSync = require('browser-sync');
var gulp        = require('gulp');
var cp = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll', ['css'], function (done) {
     browserSync.notify(messages.jekyllBuild);
     return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
         .on('close', done);
    browserSync.reload({stream:true});
});