var gulp = require('gulp'),
modernizr = require("gulp-modernizr");

gulp.task('modernizr', function(){
    return gulp.src(['./app/assets/scss/**/*.scss', './app/assets/js/**/*.js'])
        .pipe(modernizr({
            options: [
                "setClasses"
            ]
        }))
        .pipe(gulp.dest('./app/temp/js'));
});