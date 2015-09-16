var gulp = require('gulp'),
    watch = require('gulp-watch'),
    cssnext = require("gulp-cssnext");

gulp.task('styles', function() {
  gulp.src("css/style.css")
  .pipe(cssnext({
    compress: false,
    import: {
      path: [
        "node_modules"
      ]
    }
  }))
  .pipe(gulp.dest("./dist/"))
});


// build
gulp.task("dist", [
  "styles",
])

gulp.task("watch", ["dist"], function() {
  gulp.watch("css/**/*.css", ["styles"])
})

gulp.task("default", ["dist", "watch"])
