var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browser-sync', function () {
	browserSync.init(null, {
		notify: false,
		server: {
			baseDir: './'
		},
		port: 8889
	});
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', gulp.parallel('browser-sync', function () {
  gulp.watch("*.html", gulp.series('bs-reload'));
  gulp.watch("*.js", gulp.series('bs-reload'));
}));