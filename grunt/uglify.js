module.exports = function(grunt) {
  return {
    options: {
      compress: true,
      sourceMap: true
    },

    hpUglify: {
      //dynamic files
      expand: true,
      cwd: 'home/<%= home.name %>/js',
      src: ['*.js'],
      dest: 'home/<%= home.name %>/js/output/',
      ext: '.min.js',
    },

  }
};