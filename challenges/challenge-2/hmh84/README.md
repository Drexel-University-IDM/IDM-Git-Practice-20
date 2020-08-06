# My Gulp CSS Minify Function
### How to test out my minifier
**1.** Open your Command Line and navigate to this folder

**2.** Install a local NPM bu running the command: `npm install`

**3.** Test the gulp by running the command: `gulp`

**4.** Check out the new minified styles.css file in the /dist directory: `open dist/styles.css`

### How to edit the gulpfile to work for your project

**1.** Simply  open gulpfile function folder: `open gulpfile.js`

**2.** Edit the relative source to your CSS file by changing the directory on line 5

	Suggested: Keep *.css in place so that all CSS files get minified to the dist folder

**3.** Edit the minified file output location AKA 'pipe' on line 7

	In my example, I want my minified file to be put in the 'dist' folder

### [Optional] Enable Watch

**1.** Simply  un-comment line 10 in gulpfile.js and run command `gulp` again to have your Command Line watch for file changes like saves

	To stop the watch process, press Ctrl + C