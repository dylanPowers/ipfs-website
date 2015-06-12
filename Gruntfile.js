module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    linkChecker: {  
      options: {
      },
      all: {
        site: 'localhost',
        options: {
          initialPort: 8081,
          initialPath: '/ipfs.io/index.html',
          interval: 4,
          maxConcurrency: 4,
          parseHTMLComments: false
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-link-checker');

  grunt.registerTask('default', 'linkChecker');
}