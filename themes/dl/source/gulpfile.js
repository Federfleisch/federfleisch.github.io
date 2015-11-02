var gulp = require('gulp'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    watch = require('gulp-watch'),
    cssnext = require('gulp-cssnext'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');


gulp.task('styles', function() {
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
gulp.task("dev", [
  "styles", "js"
])

gulp.task("watch", ["dev"], function() {
  gulp.watch("js/**/*.js", ["js"])
  gulp.watch("css/**/*.css", ["styles"])
})

gulp.task("default", ["dev", "watch"])
gulp.task("prod", ["dev"]) // gulp prod --production
