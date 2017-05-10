const gulp = require('gulp'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    cssmin = require('gulp-minify-css'),
    gulpLog = require('gulp-log'),
    rimraf = require('rimraf'),
    sass = require('gulp-sass')
const paths = {
    sass: [
        './sass/*.sass',
        './sass/**/*.sass'
    ]
}

function handleSassError(err) {
    gutil.log(gutil.colors.red('sass error\r\n'), gutil.colors.yellow(err.message))
    this.emit('end')
}
gulp.task('del', function() {
    return rimraf('./public/stylesheets/*', function() {})
})
gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .on('error', handleSassError)
        .pipe(cssmin())
        .pipe(gulp.dest('./public/stylesheets/'))
})
gulp.task('sass-watch', ['sass'], function() {
    gulp.watch([paths.sass], ['sass'])
})

gulp.task('build', ['sass'])

gulp.task('default', ['del', 'sass-watch'])