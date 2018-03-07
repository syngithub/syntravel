var gulp = require('gulp'),
 imgmin = require('gulp-imagemin'),
 del = require('del'),
 usemin = require('gulp-usemin'),
 rev = require('gulp-rev'),
 cssnano = require('gulp-cssnano'),
 uglify = require('gulp-uglify'),
 browserSync = require('browser-sync').create();


gulp.task('previewDist',function(){
    browserSync.init({
        notify: false,        
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('deleteDist',['icons'], function(){
    return del("./dist");
})

gulp.task('copyGeneralFiles', ['deleteDist'], function(){
    var pathToCopy = [
        '.app/**/*', 
        '!./app/index.html', 
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**',
    ]
    gulp.src(pathToCopy)
        .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDist', 'optimizeImages', 'optimizeSprites', 'useminTrigger']);

gulp.task('optimizeImages',['deleteDist'], function(){
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imgmin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('optimizeSprites',['deleteDist'], function(){
    return gulp.src('./app/assets/sprites/**/*')
        .pipe(imgmin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/assets/sprites'));
});

gulp.task('useminTrigger',['deleteDist'], function(){
    gulp.start('usemin');
});

gulp.task("usemin",['css', 'scripts'], function(){
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css:[function(){return rev();}, function(){return cssnano();}],
            js:[function(){return rev();}, function(){return uglify();}]
        }))
        .pipe( gulp.dest('./dist'));
});