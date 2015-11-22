var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babel = require('babelify');


gulp.task('build', function () {
	browserify("./src/index.jsx")
		.transform(babel, { presets: ["es2015", "react"]})
		.bundle()
		.pipe(source('index.js'))
		.pipe(gulp.dest('build'));
});


gulp.task('default', ['build']);