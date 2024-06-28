const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const gulpAutoprefixer = require('gulp-autoprefixer').default; // Use .default to access the default export
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

<<<<<<< HEAD
=======
// Paths to files
>>>>>>> 93761f1800dd3c753ecbb0cecfa7ceb8786dff32
const paths = {
  styles: {
    src: 'src/scss/*.scss',
    dest: 'dist/css'
  }
};

<<<<<<< HEAD
=======
// Task to compile SCSS
>>>>>>> 93761f1800dd3c753ecbb0cecfa7ceb8786dff32
function styles() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpAutoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest));
}

<<<<<<< HEAD
function watch() {
  gulp.watch(paths.styles.src, styles);
=======
// Watch files for changes
function watchFiles() {
  watch(paths.styles.src, styles);
>>>>>>> 93761f1800dd3c753ecbb0cecfa7ceb8786dff32
}

// Define default task
const build = series(styles, watchFiles);

exports.styles = styles;
exports.watch = watchFiles;
exports.default = build;
