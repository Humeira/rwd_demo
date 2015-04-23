module.exports = {
    devFirst: [
        'sass:dev',
        'jshint',
    ],
	
	 // Production tasks
    prodFirst: [
        'cssmin',
		'uglify',
		'processhtml'
    ]
	
	
};