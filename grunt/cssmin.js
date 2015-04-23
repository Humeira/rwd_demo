module.exports = {
target: {
    files: [{
      expand: true,
      src: ['*assets/css/**/*.css', '!*.min.css'],
      ext: '.min.css'
    }]
  }
}