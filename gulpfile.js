const gulp = require ('gulp');
const sass = require ('gulp-sass');
const del = require ('del');
const minifycss =require('gulp-minify-css');
var browser = require('browser-sync').create();


const paths = {
    scss: ['assets/sass/**/*.scss'],
    css: ['css/main.css'],
    html: ['*.html'],
    js: ['js/*.js'],
};

gulp.task ('styles', () => {
    return gulp.src (paths.scss)
        .pipe (sass (). on ('error', sass.logError))
        .pipe(minifycss())
        .pipe ( gulp.dest ('./css'));
});

gulp.task ('clean', () => {
    return del ([
        'css/main.css',
    ]);
});



gulp.task ('default', () => {
    browser.init({server: '.', open: false, port: 4000, notify: false});
    gulp.watch (paths.scss, (done) => {
        gulp.series (['clean', 'styles']) (done );
    });
    gulp.watch(paths.scss).on('change', browser.reload);
    gulp.watch(paths.js).on('change', browser.reload);
    gulp.watch(paths.html).on('change', browser.reload);
});