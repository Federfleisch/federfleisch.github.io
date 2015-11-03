var gulp = require('gulp'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    watch = require('gulp-watch'),
    cssnext = require('gulp-cssnext'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');


gulp.task('styles', function () {
  gulp.src("css/style.css")
    .pipe(cssnext())
    .pipe(gulpif(argv.production, cssnext({compress: true})))
    .pipe(gulp.dest("./dist/"));
});

gulp.task('js', function () {
  gulp.src('js/site.js')
    .pipe(gulpif(argv.production, uglify()))
    .pipe(gulp.dest('./dist/'));
});

// gulp.task('img', function () {
//   return gulp.src('/img/**/*')
//     .pipe(cache(imagemin({
//       optimizationLevel: 5,
//       progressive: true,
//       interlaced: true,
//       svgoPlugins: [{removeViewBox: false}],
//       use: [pngquant()]
//     })))
//     .pipe(gulp.dest(''));
// });



// build
gulp.task("dist", [
  "styles", "js"
]);

gulp.task("watch", ["dist"], function () {
  gulp.watch("js/**/*.js", ["js"]);
  gulp.watch("css/**/*.css", ["styles"]);
});

gulp.task("default", ["dist", "watch"]);
gulp.task("prod", ["dist"]);
