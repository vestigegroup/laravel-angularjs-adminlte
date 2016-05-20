var elixir = require('laravel-elixir'),
    liveReload = require('gulp-livereload'),
    clean = require('rimraf'),
    gulp = require('gulp');

var config = {
    assets_path: "./resources/assets",
    bower_path: "./resources/bower_components",

    build_path: "./public/build",

    build_path_js: "./public/build/js",
    build_path_css: "./public/build/css",
    build_path_font: "./public/build/fonts",
    build_path_images: "./public/build/images",
    build_path_html: "./public/build/views",

    build_vendor_path_js: "./public/build/vendor/js",
    build_vendor_path_css: "./public/build/vendor/css",
    build_vendor_path_font: "./public/build/vendor/fonts",
};

config.vendor_path_js = [
    config.bower_path + '/jquery/dist/jquery.min.js',
    config.bower_path + '/bootstrap/dist/js/bootstrap.min.js',
    config.bower_path + '/angular/angular.min.js',
    config.bower_path + '/angular-sanitize/angular-sanitize.min.js',
    config.bower_path + '/angular-strap/dist/angular-strap.min.js',
    config.bower_path + '/angular-animate/angular-animate.min.js',
    config.bower_path + '/angular-route/angular-route.min.js',
    config.bower_path + '/angular-resource/angular-resource.min.js',
    config.bower_path + '/angular-messages/angular-messages.min.js',
    config.bower_path + '/angular-bootstrap/ui-bootstrap-tpls.min.js',
    config.bower_path + '/angular-cookies/angular-cookies.min.js',
    config.bower_path + '/query-string/query-string.js',
    config.bower_path + '/angular-oauth2/dist/angular-oauth2.min.js',
    config.bower_path + '/angularUtils-pagination/dirPagination.js',
    config.bower_path + '/pusher/dist/web/pusher.js',
    config.bower_path + '/pusher-angular/lib/pusher-angular.min.js',
    config.bower_path + '/angular-ui-notification/dist/angular-ui-notification.min.js',
    config.bower_path + '/moment/min/moment.min.js',
    config.bower_path + '/moment/locale/pt-br.js',
    config.bower_path + '/angular-loading-bar/src/loading-bar.js',
];
config.vendor_path_css = [
    config.bower_path + '/bootstrap/dist/css/bootstrap.min.css',
    config.bower_path + '/bootstrap/dist/css/bootstrap-theme.min.css',
    config.bower_path + '/angular-ui-notification/dist/angular-ui-notification.min.css',
    config.bower_path + '/angular-loading-bar/src/loading-bar.css',
    config.bower_path + '/angular-motion/dist/angular-motion.min.css',
];
config.vendor_path_font = [
    config.bower_path + '/bootstrap/dist/fonts/*'
];

gulp.task('copy-views', function () {
    gulp.src([config.assets_path + "/js/views/**/*.html"])
        .pipe(gulp.dest(config.build_path_html))
        .pipe(liveReload());
});

gulp.task('copy-fonts', function () {
    gulp.src([config.assets_path + "/fonts/**/*"])
        .pipe(gulp.dest(config.build_path_font))
        .pipe(liveReload());

    gulp.src(config.vendor_path_font)
        .pipe(gulp.dest(config.build_vendor_path_font))
        .pipe(liveReload());
});

gulp.task('copy-images', function () {
    gulp.src([config.assets_path + "/images/**/*"])
        .pipe(gulp.dest(config.build_path_images))
        .pipe(liveReload());
});

gulp.task('copy-styles', function () {
    gulp.src([config.assets_path + "/css/**/*.css"])
        .pipe(gulp.dest(config.build_path_css))
        .pipe(liveReload());

    gulp.src(config.vendor_path_css)
        .pipe(gulp.dest(config.build_vendor_path_css))
        .pipe(liveReload());
});

gulp.task('copy-scripts', function () {
    gulp.src([config.assets_path + "/js/**/*.js"])
        .pipe(gulp.dest(config.build_path_js))
        .pipe(liveReload());

    gulp.src(config.vendor_path_js)
        .pipe(gulp.dest(config.build_vendor_path_js))
        .pipe(liveReload());
});

gulp.task('clear-build-folder', function () {
    clean.sync(config.build_path);
});

gulp.task('default', ['clear-build-folder'], function () {
    gulp.start('copy-views', 'copy-fonts', 'copy-images');
    elixir(function (mix) {
        mix.styles(config.vendor_path_css.concat([config.assets_path + '/css/**/*.css']),
            'public/css/all.css', config.assets_path);
        mix.scripts(config.vendor_path_js.concat([config.assets_path + '/js/**/*.js']),
            'public/js/all.js', config.assets_path);
        mix.version(['js/all.js', 'css/all.css']);
    });
});

gulp.task('watch-dev', ['clear-build-folder'], function () {
    liveReload.listen();
    gulp.start('copy-styles', 'copy-scripts', 'copy-views', 'copy-fonts', 'copy-images');
    gulp.watch(config.assets_path + '/**', [
        'copy-styles',
        'copy-scripts',
        'copy-views',
        'copy-fonts',
        'copy-images'
    ]);
});