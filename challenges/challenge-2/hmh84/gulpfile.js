const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

// gulp.watch('src/*.css', gulp.series(['minify-css'])); Enable this line of code to activate CSS file watch

gulp.task('default', gulp.parallel('minify-css'));