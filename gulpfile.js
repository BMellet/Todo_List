
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var mergeStream = require('merge-stream');

gulp.task('style',function(){
    gulp.src('./node_modules/materialize-css/dist/css/materialize.min.css')
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('scriptJS',function(){
    var jquery = gulp.src('./node_modules/jquery/dist/jquery.min.js')
                    .pipe(gulp.dest('./dist/js/'));

    var materialize = gulp.src('./node_modules/materialize-css/dist/js/materialize.min.js')
                    .pipe(gulp.dest('./dist/js'));
            return mergeStream(jquery, materialize);
});

gulp.task('sass',function(){
     return gulp.src('./assets/scss/*.scss')
                .pipe(sass())
                .pipe(cleanCSS())
                .pipe(gulp.dest('dist/css/'));

});

gulp.task('uglify',function(){
    gulp.src('./assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('browserSync',function(){
    browserSync.init({
        server:'./',
    })
});

gulp.task('watch',['sass','uglify','browserSync','style','scriptJS'],function(){
    gulp.watch('./assets/scss/*.scss',['sass']).on('change',browserSync.reload);
    gulp.watch('./assets/js/*.js',['uglify']).on('change',browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload);
});

gulp.task('default',['watch']);