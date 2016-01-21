var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var less = require('gulp-less');
var gulpif = require('gulp-if');

var config = require('../config.js');

gulp.task('jsx', function() {
  return browserify({
      entries: 'src/js/index.jsx',
      extensions: ['.jsx'],
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulpif(config.env=='production', uglify()))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('html', function () {
  return gulp.src('src/html/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
  return gulp.src('src/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('dist'));
});

gulp.task('prod', function(cb) {
  config.switch('production');
  cb();
})

gulp.task('build', ['jsx','html','less', 'images']);
gulp.task('build:prod', ['prod','jsx','html','less', 'images']);
