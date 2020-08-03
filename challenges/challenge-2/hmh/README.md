# My Gulp CSS Minify Function
### How to test out my minifier
**1.** Open your Terminal/Command Prompt and navigate to this folder

**2.** Install gulp locally: `npm install --save-dev gulp-install`

**3.** Install gulp clean css locally: `npm install gulp-clean-css --save-dev`

**4.** Open styles.css using command: `open src/styles.css`

**5.** Make a change to the CSS file and save

**6.** In the Terminal, run the command: `gulp`

**7.** Check out the Minified styles.css in the dist directory: `open dist/
styles.css`

### How to edit the gulpfile to work for your project

**1.** Simply  open gulpfile function folder: `open gulpfile.js`

**2.** Edit the relative source to your CSS file by changing the directory on line 5

	- Suggested: Keep *.css in place so that all CSS files get minified to the 
	dist folder

**3.** Edit the minified file output location AKA 'pipe' on line 7

	- In my example, I want my minified file to be put in the 'dist' folder
