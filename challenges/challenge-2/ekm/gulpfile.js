const path = require('path');
const {dest, src} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;
const sourcemaps = require('gulp-sourcemaps');

const dir = path(__dirname, './src/');
const source = `${dir}/**/*.css`;

function styles() {
    const outputStyle = argv.production ? 'compressed' : 'nested'
    return src(source)
      .pipe(sourcemaps.init())
      .pipe(
        autoprefixer({
          grid: true
        })
      )
      .pipe(sourcemaps.write('.'))
      .pipe(dest(path.join(__dirname, './build/css')))
  }
  
  module.exports = styles;
