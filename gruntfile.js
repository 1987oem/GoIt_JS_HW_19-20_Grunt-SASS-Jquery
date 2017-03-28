module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                // src: ['js/src/*.js'],
                // dest: 'js/script.main.js'
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    'js/script.min.js': ['js/src/*.js']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'css/main.css': 'css/src/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['uglify','sass']);

};