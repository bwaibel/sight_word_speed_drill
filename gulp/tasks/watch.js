var gulp = require('gulp');

var deps = ['build'];

gulp.task('watch', deps, function(){
  gulp.watch('src/**/*', deps);
});
