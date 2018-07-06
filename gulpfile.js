var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pump = require('pump');
var runSequence = require('run-sequence');
var browser = require('browser-sync');

var config = {
    srcScss: './src/static/sass',
    distCss: './dist/static/css',
    distRev: './dist/rev',
    srcViews: './src/views',
    distViews: './dist/views',
    srcImages: './src/static/images',
    distImages: './dist/static/images',
    srcJs: './src/static/js',
    distJs: './dist/static/js'
};

/*
 * gulp sass
 * 编译、自动添加前缀、压缩、重命名、添加sourcemap
 * 嵌套输出方式 nested
 * 展开输出方式 expanded 
 * 紧凑输出方式 compact 
 * 压缩输出方式 compressed
 */
gulp.task('sass', function() {
    pump([
        gulp.src([config.srcScss + '/index.scss', config.srcScss + '/common.scss']),
        plugins.sourcemaps.init(),
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
        plugins.rename({
            suffix: '.min' 
        }),
        plugins.assetRev(),
        plugins.rev(),
        plugins.sourcemaps.write('.'),
        gulp.dest(config.distCss),
        plugins.rev.manifest('rev-css-mainfest.json'), 
        gulp.dest(config.distRev)
    ]);    
});

gulp.task('js', function() {
    pump([
        gulp.src('./src/static/**/*.js'),
        plugins.sourcemaps.init(),
        plugins.uglify(),
        plugins.rev(),
        plugins.assetRev(),
        plugins.sourcemaps.write('.'),
        gulp.dest('./dist/static'),
        plugins.rev.manifest('rev-js-manifest.json'),
        gulp.dest(config.distRev)
    ]);
});

gulp.task('images', function() {
    pump([
        gulp.src([config.srcImages + '/**/*.{png,jpg,gif,ico,jpeg}']),
        plugins.rev(),
        plugins.assetRev(),
        gulp.dest(config.distImages),
        plugins.rev.manifest('rev-img-manifest.json'),
        gulp.dest(config.distRev)
    ]);
});

gulp.task('fileinclude', function () {
    pump([
        gulp.src([config.srcViews + '/**/*.html', '!./src/views/include/*.html']),
        plugins.fileInclude({
            prefix: '@@',
            basepath: '@file'
        }),
        gulp.dest(config.distViews)
    ])
});

gulp.task('fileincludeindex', function () {
    pump([
        gulp.src(['./src/index.html']),
        plugins.fileInclude({
            prefix: '@@',
            basepath: '@file'
        }),
        gulp.dest('./dist')
    ])
});

gulp.task('html', function () {
    pump([
        gulp.src([config.distRev + '/*.json', config.distViews + '/**/*.html']),
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
        plugins.revCollector(),
        gulp.dest(config.distViews)
    ]);
});

gulp.task('htmlindex', function () {
    pump([
        gulp.src([config.distRev + '/*.json', './dist/index.html']),
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
        plugins.revCollector(),
        gulp.dest('./dist')
    ]);
});

gulp.task('clean', function(cb) {
    pump([
        gulp.src([config.distViews, config.distCss, config.distImages, config.distJs, config.distRev]),
        plugins.clean()
    ], cb);
});

gulp.task('watch', function() {
    gulp.watch(config.srcScss + '/**/*.scss', ['sass', 'html', 'htmlindex']);
    gulp.watch(config.srcJs + '/**/*.js', ['js', 'html', 'htmlindex']);
    gulp.watch(config.srcImages + '/**/*.{png,jpg,gif,ico,jpeg}', ['images', 'html', 'htmlindex']);
    gulp.watch(config.srcViews + '/**/*.html', ['fileinclude', 'html']);
    gulp.watch('./src/index.html', ['fileincludeindex', 'htmlindex']);
});

gulp.task('server', function () {
    browser.init({
        server: './dist/'
    });
    gulp.watch(config.distScss + '/**/*.css').on('change', browser.reload)
    gulp.watch(config.distImages + '/**/*.{png,jpg,gif,ico,jpeg}').on('change', browser.reload)
    gulp.watch(config.distViews + '/**/*.html').on('change', browser.reload)
    gulp.watch('./dist/index.html').on('change', browser.reload)
    gulp.watch(config.distJs + '/**/*.js', browser.reload)
});

gulp.task('default', function() {
    condition = false;
    runSequence(
        ['clean'],
        ['sass'],
        ['js'],
        ['images'],
        ['fileinclude', 'html'],
        ['watch'],
        ['server']
    )
});

gulp.task('openServer', function() {
    runSequence('watch', 'server');
})
