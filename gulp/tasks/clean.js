var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del.sync(['dist']);
  cb();
});
