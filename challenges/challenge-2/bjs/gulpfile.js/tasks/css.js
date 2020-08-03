const cleanCSS = require('gulp-clean-css');
const { dest, src } = require('gulp')
const path = require('path');

const srcDir = path.join(__dirname, '../../src/**/*.css')
const destDir = path.join(__dirname, '../../build/css')

function minifyCss() {
	return src(srcDir)
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(dest(destDir))
}

module.exports = minifyCss