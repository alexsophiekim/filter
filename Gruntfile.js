module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css':'scss/style.scss'
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
   grunt.registerTask('compile', ['sass']);

};
