/*globals module: true */
module.exports = function(grunt) {
	"use strict";

	// Project configuration.
	grunt.initConfig({
		uglify: {
			main: {
				files: {
					"js/game.js": [
                        "js/src/class.js",
                        "js/src/levels.js",
                        "js/src/until.js",
                        "js/src/game.js",
                        "js/src/controller.js"
                    ]
				}
			}
		}
    });

	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["uglify"]);
};
