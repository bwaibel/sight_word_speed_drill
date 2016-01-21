var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['clean','build:prod'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
