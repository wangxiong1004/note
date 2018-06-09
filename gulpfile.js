
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var browser = require('browser-sync');
var imagemin = require('gulp-imagemin');


// 测试
gulp.task('test', function() {
    console.log('gulp is ok!');
});

// sass编译
// 嵌套输出方式 nested
// 展开输出方式 expanded 
// 紧凑输出方式 compact 
// 压缩输出方式 compressed
gulp.task('sass', function() {
    return gulp.src('./src/static/sass/index.scss')
        .pipe(sass())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/static/css'))
        // .pipe(livereload());
});

gulp.task('server', function() {
    browser.init({
        server: './'
    });
    gulp.watch('./dist/static/css/**/*.css').on('change', browser.reload)
    gulp.watch('./index.html').on('change', browser.reload)
    gulp.watch('./dist/static/js/**/*.js', browser.reload)
});

// 监听
gulp.task('watch', function() {
    // livereload.listen();
    gulp.watch('./src/static/sass/**/*.scss', ['sass'])
});

gulp.task('default', ['watch', 'server'])