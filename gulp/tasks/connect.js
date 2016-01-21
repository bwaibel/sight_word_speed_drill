var connect = require('gulp-connect');
var gulp = require('gulp');

gulp.task('connect', function() {
  return connect.server({
    root: 'dist',
    livereload: true
  });
});
