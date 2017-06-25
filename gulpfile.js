var gulp = require('gulp'), // Gulp
    sass = require('gulp-sass'), //SASS
    less = require('gulp-less'), //LESS
    autoprefixer = require('gulp-autoprefixer'), // Добавление префиксов
    concat = require('gulp-concat'), // Конкатенация файлов
    csso = require('gulp-csso'), // Минификация CSS-файлов
    plumber = require('gulp-plumber'), // Обработка ошибок
    rename = require("gulp-rename"), // Переименование файлов
    sourcemaps = require('gulp-sourcemaps'), // Source maps
    uglify = require('gulp-uglify'), // Минификация JS-файлов
    watch = require('gulp-watch');


gulp.task('sass', function () {
    gulp.src('css/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 20 versions', '> 0%'], { cascade: true }))
        .pipe(csso())
        .pipe(gulp.dest('css/'));
});

gulp.task('less', function () {
    gulp.src('css/less/*.less')
        .pipe(less())
        .pipe(autoprefixer(['last 20 versions', '> 0%'], { cascade: true }))
        .pipe(csso())
        .pipe(gulp.dest('css/'));
});

gulp.task('min-js', function () {
    gulp.src('js/*.js')  //return нужен?
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js/min/'));
});

gulp.task('watch', ['sass', 'less', 'min-js'], function() {
    gulp.watch('css/**/*.sass', ['sass']);
    gulp.watch('css/**/*.scss', ['sass']);
    gulp.watch('css/**/*.less', ['less']);
    gulp.watch('js/*.js', ['min-js']);
});

gulp.task('default', ['watch']);