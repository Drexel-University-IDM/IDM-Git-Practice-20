var minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function(){
    return gulp.src('./src/styles.css')
    .pipe(minifyCSS)
    .pipe(gulp.dest('css'))
})