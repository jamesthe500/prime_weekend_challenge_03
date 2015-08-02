module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                /*src: 'client/scripts/app.js',  // will also need to redirect index when this changes
                dest: 'server/public/assets/scripts/app.min.js' */
            }
        },
        copy: {
            jquery: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map",
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                "dest": "server/public/vendors/"
            }, // delete this later when minifying.
            scripts: {
                expand: true,
                cwd: "client/scripts/",
                src: 'app.js',
                dest: 'server/public/assets/scripts/'
            },
            css: {
                expand: true,
                cwd: 'client/css/',
                src: 'style.css',
                dest: 'server/public/assets/css/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};