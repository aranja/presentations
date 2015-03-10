module.exports = function(gulp, gutil) {
  var gulpJade = require('gulp-jade');
  var connect = require('gulp-connect');
  var jade = require('jade');
  var prod = gutil.env.prod;

  jade.filters.babel = require('jade-babel')({});

  gulp.task('jade', function() {
    return gulp.srcWithErrorHandling(gulp.config.source + '/views/*.jade')
      .pipe(gulpJade({
        jade: jade,
        pretty: !prod
      }))
      .pipe(gulp.dest(gulp.config.target))
      .pipe(prod ? gutil.noop() : connect.reload());
  });
};
