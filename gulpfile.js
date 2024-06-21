const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// Шляхи до файлів
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  }
};

// Завдання для компіляції SCSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Спостереження за змінами у файлах
function watch() {
  gulp.watch(paths.styles.src, styles);
}

const build = gulp.series(styles, watch);

exports.styles = styles;
exports.watch = watch;
exports.default = build;
