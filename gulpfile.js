
var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

var scriptsFolder = "./src";

gulp.task('default', function() {
  
});
 
gulp.task('concat', function() {
  return gulp.src(scriptsFolder+'/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('watch', function(){
	gulp.start('concat');
	
	watch(scriptsFolder+'/**/*.js', batch(function(){
		gulp.start('concat');
	}))
})