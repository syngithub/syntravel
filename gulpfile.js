var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('default',function(){
    console.log("We are good to go!");
});

gulp.task('html',function(){
    console.log("Imagine something useful to be done with your HTML here!");
});

gulp.task('css',function(){

   return gulp.src('./app/assets/css/main.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/css'));

    });

gulp.task('watch',function(){

    watch('./app/index.html',function(){
        gulp.start('html');
    });

    watch('./app/assets/css/**/*',function(){
        gulp.start('css');
    });

});