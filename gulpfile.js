var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync').create(),
		bourbon = require('node-bourbon');

gulp.task('sass', function(){
	gulp.src('./app/sass/**/*.sass')
		  .pipe(sass({includePaths: bourbon.includePaths}).on('error', sass.logError))
		  .pipe(autoprefixer({
      	browsers: ['last 10 versions', '> 1%', 'ie 8', 'ie 7'],
      	cascade: !0
      }))
		  .pipe(gulp.dest('./app/css'))
		  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "./app/",
		notify: !1
	});
	gulp.watch("./app/sass/**/*.sass", ['sass']);
	gulp.watch("./app/**/*.html").on('change', browserSync.reload);
	gulp.watch("./app/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);