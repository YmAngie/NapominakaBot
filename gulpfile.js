var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
);
