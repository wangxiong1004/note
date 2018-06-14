
var gulp = require('gulp');
var pump = require('pump');
var plugins = require('gulp-load-plugins')();
// var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var browser = require('browser-sync');
var imagemin = require('gulp-imagemin');
var sequence = require('run-sequence');
var pngquant = require('imagemin-pngquant');

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
    pump([
        gulp.src('./src/static/sass/index.scss'),
        plugins.sourcemaps.init(),
        plugins.changed('./src/static/sass/**/*.scss', {
            extension: '.scss'
        }),
        plugins.sass({
            outputStyle: 'expanded'
        }).on('error', plugins.sass.logError),
        plugins.autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }),
        plugins.cleanCss({
            advanced: false,
            compatibility: 'ie8',
            keepBreaks: true,
            keepSpecialComments: '*'
        }),
        // plugins.rename({
        //     suffix: '.min'
        // }),
        plugins.sourcemaps.write('.'),
        gulp.dest('./dist/static/css')
    ]);
});

// css添加前缀
gulp.task('autofix', function() {
    pump([
        gulp.src('./dist/static/css/*.css'),
        plugins.autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
                cascade: true,
                remove: true
        }),
        gulp.dest('./dist/static/css')
    ]);
});

// 引入公共html文件
gulp.task('fileinclude', function() {
    pump([
        gulp.src(['./src/project/**/*.html', '!./src/project/include/*.html']),
        plugins.fileInclude({
            prefix: '@@',
            basepath: '@file'
        }),
        gulp.dest('./dist/project')
    ])
});

// html压缩
gulp.task('htmlmin', function() {
    pump([
        gulp.src('./dist/project/**/*.html'),
        plugins.htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true
        }),
        gulp.dest('./dist/project')
    ])
});

// js
gulp.task('js', function() {
    pump([
        gulp.src('./src/static/js/**/*.js'),
        plugins.changed('./src/static/js/**/*.js', {
            extension: '.js'
        }),
        plugins.sourcemaps.init(),
        plugins.uglify(),
        plugins.sourcemaps.write('.'),
        gulp.dest('./dist/static/js')
    ])
})

// 自动开启浏览器并自动刷新
gulp.task('server', function() {
    browser.init({
        server: './dist/'
    });
    gulp.watch('./dist/static/css/**/*.css').on('change', browser.reload)
    gulp.watch('./dist/**/*.html').on('change', browser.reload)
    gulp.watch('./dist/static/js/**/*.js', browser.reload)
});

// 监听
gulp.task('watch', function() {
    gulp.watch('./src/static/sass/**/*.scss', ['sass', 'autofix'])
    gulp.watch('./src/project/**/*.html', ['fileinclude'])
    gulp.watch('./dist/project/**/*.html', ['htmlmin'])
    gulp.watch('./src/static/js/**/*.js', ['js'])
});

gulp.task('default', function() {
    sequence('sass', 'js', 'fileinclude', 'htmlmin', ['watch', 'server'])
});
