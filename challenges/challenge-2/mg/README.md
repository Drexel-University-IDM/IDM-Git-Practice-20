# How to Minimize CSS
## Install Gulp and Node.js
- to do this you will need to open your terminal and run a few commands
- make sure you are in the directory with your src/style.css, if not you will need to naviagte your terminal there before beginning
- once in the correct directory you can begin

        npm install gulp-cli -g

- if this returns an error you will need to re run this command preceded by 'sudo'

         sudo npm install gulp-cli -g

- then you will run two more commands

        npm install gulp -D

        npm install gulp-clean-css --save-dev

- if you have errors re run these commands preceded by sudo

## Create Files and Folders
- next you will need to create the files and folders needed
- make a folder named 'dist'

        mk dir dist

- make a file named 'gulpfile.js'

        touch gulpfile.js

## Write the code
- next you will need to write the code which will preform the minimizing task
- edit the gulpfile.js file adding these lines of code

        const gulp = require('gulp');
        const cleanCSS = require('gulp-clean-css');

        gulp.task('minify-css', () => {
            return gulp.src('src/*.css')
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('dist'));
        });

- after this we will create our default task which will make our minify-css task the default task that gulp runs

        gulp.task('default', gulp.parallel('minify-css'));

- save the gulpfile.js

## Run the Minify Task
- the final step is to run the minify task from the command line

       gulp

- since we wrote that last line in our gulpfile.js file makining minify-css the default task we simply need to type 'gulp' into the command line

<b>if you look inside your dist folder you will see the newly minimized css file </b>