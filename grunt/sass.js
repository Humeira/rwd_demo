module.exports = {
    // Development settings
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: false
        },
        files: [{
            'assets/css/main.css' : 'assets/scss/main.scss'
        }]
    },
    // Production settings
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
			'assets/css/main.min.css' : 'assets/scss/main.scss'
        }]
    }
};