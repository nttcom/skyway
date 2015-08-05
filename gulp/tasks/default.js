// Defines the default gulp tasks

var gulp = require('gulp');

gulp.task('default', function() {
    //gulp.start('sass', 'images', 'markup', 'watch');
    gulp.start('sass', 'images', 'js', 'watch');
});
