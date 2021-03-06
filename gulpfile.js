var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var fs = require('fs');

var pkgInfo = require('./package.json');
const { version } = pkgInfo;

gulp.task("node", function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("lib"));
});

gulp.task("browserify", function () {
  return build = browserify({
      basedir: '.',
      debug: true,
      entries: ['./typescript/index.ts'],
      cache: {},
      packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source(`fpmc-v${ version }.min.js`))
    // .pipe(source(`fpmc-latest.min.js`))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task('copy', function(done){
  fs.copyFileSync(`dist/fpmc-v${ version }.min.js`, 'dist/fpmc-latest.min.js');
  done();
})

gulp.task('default', gulp.series('node', 'browserify', 'copy') );