const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
sass.compiler = require('node-sass');
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})
gulp.task('sassAll', function () {
  return gulp.src(['*.{scss,sass}', "!07.scss"])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});
gulp.task("images",function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
});
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
});
gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
gulp.task("build",["scripts","copy-html","data","sassAll"],function(){
    console.log("项目成功")
})
gulp.task("watch", function(){
    gulp.watch("*.html",["copy-html"])
    gulp.watch(['*.{scss,sass}', "!07.scss"],['sassAll'])
    gulp.watch(["images/**/*"],["images"])
    gulp.watch(["*.js","!gulpfile.js"],["scripts"])
    gulp.watch(["*.json","!package.json"],["data"])
})
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:200,
        livereload:true
    })
})
gulp.task("default",["watch","server"]);