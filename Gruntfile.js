module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          js: {
              src: [
                "js/src/jquery.min.js",
                "js/src/bootstrap.min.js",
                "js/src/jquery.plugin.min.js",
                "js/src/skrollr.min.js",
                "js/src/twitterfetcher.min.js",
                "js/src/spectragram.min.js",
                "js/src/smooth-scroll.min.js",
                "js/src/placeholder.min.js",
                "js/src/tweenmax.min.js",
                "js/src/scrolltoplugin.min.js",
                "js/src/flexslider.min.js",
                "js/src/scripts.js"
              ],
              dest: "js/final.js"
          },
          css: {
              src: [
                "css/src/pe-icon-7-stroke.min.css",
                "css/src/bootstrap.min.css",
                "css/src/elegant-icons.min.css",
                "css/src/flexslider.min.css",
                "css/src/lightbox.min.css",
                "css/src/theme-gemstone.css",
                "css/src/custom.css"
              ],
              dest: "css/final.css"
          }
        },

        uglify: {
            dist: {
                src: "js/final.js",
                dest: "js/final.min.js"
            },

        },
        cssmin:{
          dist: {
              src: "css/final.css",
              dest: "css/final.min.css"
          }
        },

        imagemin: {
            png: {
              options: {
                optimizationLevel: 7
              },
              files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  src: '**/*.png',
                  cwd: 'img/',
                  dest: 'img/',
                  ext: '.png'
                }
              ]
            },
            jpg: {
              options: {
                progressive: true,
                optimizationLevel: 7
              },
              files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  src: '**/*.jpg',
                  cwd: 'img/',
                  dest: 'img/',
                  ext: '.jpg'
                }
              ]
            }
          },

          sitemap: {
              dist: {
                  pattern: ['**/*.html', '!**/*.html/.*'],
                  siteRoot: "./",
                  homepage: 'http://www.desafiolatam.com/'
              },
          },

          unused: {
             options: {
               reference: 'img/',
               directory: ['**/*.handlebars', '**/*.html', '**/*.css', '**/*.js'],
               days: 30,
               remove: false // set to true to delete unused files from project
             }
           }

    });




    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-unused');
    grunt.loadNpmTasks('grunt-sitemap');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sitemap']);
};
