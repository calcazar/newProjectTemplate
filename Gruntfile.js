module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	jshint: {
	  files: ['Gruntfile.js', 'js/**/*.js'],
	  options: {
		globals: {
		  jQuery: true
		}
	  }
	},
	uglify: {
		build: {
			src: 'js/**/*.js',
			dest: 'dist/js/main.js'
		}
	},
	compass: {
	  dist: {                   // Target 
		options: {              // Target options 
		  sassDir: 'scss',
		  cssDir: 'dist/css',
		  environment: 'production'
		}
	  }
	},
	watch: {
	  files: ['<%= jshint.files %>'],
	  tasks: ['jshint']
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //Concatenates files and makes them in to one
  //NPM: npm install grunt-contrib-concat --save-dev
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'compass']);

};