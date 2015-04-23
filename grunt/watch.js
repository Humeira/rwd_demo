module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'assets/js/**/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },

    styles: {
        files: [
            'assets/scss/**/*.scss'
        ],
        tasks: [
            'sass:dev'
        ]
    },
	
	site: {
        files: ['**/*.hbs']
    }
};