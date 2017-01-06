
const gulp 		= require('gulp')
const less 		= require('gulp-less')
const cleanCSS 	= require('gulp-clean-css')
const uglify 	= require('gulp-uglify')
const reload	= require('gulp-livereload')
const run		= require('gulp-run')

const dist = './dist/'

gulp.task('css', ()=>{
    return gulp.src('app/www/style.less')
        .pipe(less())
		//.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(dist))
		.pipe(reload())
})
gulp.task('js',()=>{
	return run('webpack --config webpack.dev.js')
		.exec('', ()=>{
			gulp.src('gulpfile.js').pipe(reload())
		})
})
gulp.task('html', ()=>{
    return gulp.src('app/www/*.html')
        .pipe(gulp.dest(dist))
		.pipe(reload())
})
gulp.task('assets', ()=>{
	return gulp.src("assets/*.png")
        .pipe(gulp.dest(dist + 'assets/'))
		.pipe(reload())
})


gulp.task('vendor',()=>{

	run('webpack --config webpack.dll.js').exec()

	gulp.src('app/www/vendor/vendor.less')
        .pipe(less())
		.pipe(cleanCSS({compatibility:'ie8'}))
		.pipe(gulp.dest(dist))

	gulp.src('semantic/src/themes/default/assets/fonts/*')
		.pipe(gulp.dest(dist+'fonts/'))
})

gulp.task('default',['css','js','html','assets'])

gulp.task('watch',()=>{
	reload.listen()
     gulp.watch('app/www/index.html', 	['html']) 
     gulp.watch('app/www/style.less', 	['css']) 
     gulp.watch('app/**/*.js', 			['js']) 
     gulp.watch('assets/*.png', 		['assets']) 
})
