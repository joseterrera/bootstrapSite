module.exports = function(grunt){
  //configure task(s)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify:{
      build:{
        src: 'js/*.js',
        dest: 'js/script.min.js'
      },
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        src: 'js/*.js',
        dest: 'js/script.min.js' 
      }  
    }, 
    watch: {
      js: {
        files: ['js/*.js'],
        tasks: ['uglify:dev']
      }
    }
  });

  //Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Register task(s)
  grunt.registerTask('default', ['uglify:dev']);
  grunt.registerTask('build', ['uglify:build']);


};