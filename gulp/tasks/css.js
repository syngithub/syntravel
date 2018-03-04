var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssimport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    extreplace = require('gulp-ext-replace'),
    hexrgba = require('postcss-hexrgba');


gulp.task('css',function(){

    return gulp.src('./app/assets/scss/main.scss')
        .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .on('error',function(errMsg){
            console.log(errMsg.toString());
            this.emit('end');
        })
        .pipe(extreplace('.css'))
        .pipe(gulp.dest('./app/temp/css'));
        
});