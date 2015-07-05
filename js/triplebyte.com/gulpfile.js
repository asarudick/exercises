var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
	var src = 'tests/';

	return gulp.src(src + 'List.js', { read: false })
		.pipe(mocha({ reporter: 'nyan' } ));

});
