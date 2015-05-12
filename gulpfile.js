"use strict"; /*jslint indent: 2 */
/* 
==== NODE MODULES ==== */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var notifier = require('node-notifier');
var NotificationCenter = require('node-notifier').NotificationCenter;
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var deleted = require('gulp-deleted');

/* 
==== VARIABLES PERSONNELLES ==== */
var paths = {
  dev: 'dev/',
  build: 'htdocs/',
  index: 'index.+(html|php)',
  site: [
    'dev/**/*',
    'dev/.htaccess',
    '!dev/scss{,/**}',        // specific task!
    '!dev/scripts/*',           // specific task!
    '!dev/scripts/libs{,/**}',   // specific task!
    '!dev/img{,/**}'         // specific task!
  ]
};



/* 
==== TÂCHE DEFAULT ==== */

gulp.task('default', ['copy','styles','scripts','watch'],
	function() {
    var notification = new NotificationCenter();
        notification.notify({
        title: 'Gulp notification',
        message: 'DEFAULT TASK COMPLETE!'
    });
});


/* 
==== TÂCHE COPY ==== */
// copy (all) changed files except styles/scripts/images + .htaccess + remove deleted files
gulp.task('copy', function () {
  return gulp
    .src(paths.site)
    .pipe(deleted(paths.dev, paths.build, paths.site))
    .pipe(changed(paths.build))
    .pipe(gulp.dest(paths.build))
    .pipe(livereload())
    .pipe(notify({
      onLast: true,
      message: 'COPY task SUCCESS!',
      icon: null
    }));
});


/* 
==== TÂCHE STYLES ==== */

gulp.task('styles', function() {
  return sass('dev/scss/styles.scss', { sourcemap: true })
  // pour éviter que gulp s'arrête à chaque erreur
    .pipe(plumber())
// l'autoprefixer
    .pipe(autoprefixer(
        'last 2 versions',
        '> 5%',
        'ie >= 9',
        'Firefox ESR'
    ))
// écriture des sourcemaps
    .pipe(sourcemaps.write(
      './',
      {
        includeContent: false,  // par défaut, le code source est copié/inclus dans le fichier .map
        sourceRoot:'../../dev/scss/'  // on spécifie l'emplacement des fichiers sources
      }
    ))
// destination du fichier
    .pipe(gulp.dest('htdocs/css/'))
// refresh livereload
    .pipe(livereload());
});


/* 
==== TÂCHE SCRIPTS ==== */

gulp.task('scripts', function() {
  gulp.src(['dev/scripts/main.js', 'dev/scripts/libs/*.js'])
// initialisation des sourcemaps
    .pipe(plumber())
    .pipe(sourcemaps.init())
// concat
    .pipe(concat('main.js'))
// minification
  	.pipe(uglify())
// ajout du .min
  	.pipe(rename({
  		suffix: '.min'
  	}))
// écriture des sourcemaps
    .pipe(sourcemaps.write(
    	'./',
    	{
    		includeContent: false,  // par défaut, le code source est copié/inclus dans le fichier .map
    		sourceRoot:'../../dev/scripts/'	// on spécifie l'emplacement des fichiers sources
    	}
    ))
// destination du fichier
  	.pipe(gulp.dest('htdocs/scripts/'))
// refresh livereload
  	.pipe(livereload());
});


/* 
==== TÂCHE STATIC ==== */

gulp.task('static', function() {
  livereload.reload();
});



/* 
==== TÂCHE WATCH ==== */

gulp.task('watch', function() {
// demarre le serveur livereload
	livereload.listen();
// gulp est a l'écoute des changements du main.js et il exécute minify avant !
	gulp.watch('dev/scripts/**/*.js', ['scripts'])
  gulp.watch('dev/scss/**/*.scss', ['styles'])
  gulp.watch(['htdocs/**/*.html', 'htdocs/**/*.php'], ['static'])
});



/* 
==== TÂCHE MINIMG ==== */

gulp.task('minimg', function () {
    return gulp.src('dev/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('htdocs/img/'));
});