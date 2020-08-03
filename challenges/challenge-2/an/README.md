# How to run Node Script - Minify CSS

## 1. Install Gulp and Node.js  - you can visit npm.org to download all packages required
You need to do this in the current directory - in this case it would be your_initials directory
        
    npm install gulp-cli -g
This command should work, however you may need to include 'sudo' prior to the command to grant administrative access in order to install the client. 

    npm install gulp -D
    
    npm install gulp-clean-css --save-dev

Hint: Use sudo prior to each command if responded with errors. 

## 2. Create files and folders

Make a folder named dist

    mkdir dist

Now make a file named "gulpfile.js"

    touch Gulpfile.js




## 3. Write the Code in Gulpfile.js

    #
    const gulp = require('gulp');
    const cleanCSS = require('gulp-clean-css');

    gulp.task('minify-css', () => {
    return gulp.src('src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
    });
    gulp.task('default', gulp.parallel ('minify-css'));



## 4. Run the Minify Task

Simply enter the command in Terminal: 

    gulp

In the dist folder youll see the new .css file.