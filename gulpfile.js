var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssimport = require('postcss-import'),
    extreplace = require('gulp-ext-replace'),
    browserSync = require('browser-sync').create();

gulp.task('default',function(){
    console.log("We are good to go!");
});

gulp.task('html',function(){
    console.log("Imagine something useful to be done with your HTML here!");
});

gulp.task('css',function(){

   return gulp.src('./app/assets/scss/main.scss')
        .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
        .pipe(extreplace('.css'))
        .pipe(gulp.dest('./app/temp/css'));

    });

gulp.task('watch',function(){

    browserSync.init({
        notify: false,        
        server: {
            baseDir: 'app'
        }
    });

    watch('./app/index.html',function(){
        browserSync.reload();
    });

    watch('./app/assets/scss/**/*',function(){
        gulp.start('cssInject');
    });

});

gulp.task('cssInject',['css'],function(){
    return gulp.src('./app/temp/css/main.css')
        .pipe(browserSync.stream());
});