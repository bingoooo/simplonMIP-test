var gulp       = require('gulp');
var gutil      = require('gulp-util');
var jshint     = require('gulp-jshint');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var uglify     = require('gulp-uglify');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("assets/scss/*.scss", ['sass']);
    gulp.watch("assets/js/*.js", ['jshint','browserify']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("assets/scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/css/"))
        .pipe(browserSync.stream());
});

/* run javascript through jshint */
gulp.task('jshint', function() {
  return gulp.src("assets/js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('compress', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('browserify', function () {
  return browserify({
    debug: true,
    entries: ['./assets/js/app.js']
  }).bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
});
gulp.task('default', ['serve']);