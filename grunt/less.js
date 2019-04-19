module.exports = function(grunt) {

  return {

    options: {
      sourceMap: true,
      compress: true,
    },

    // HOMEPAGE CSS ---------------------------------------------------------------------------
    hpCSS: {
      expand: true,
      cwd: 'home/<%= hp.name %>/css/',
      src: '*.less',
      dest: 'home/<%= hp.name %>/css/',
      ext: '.css',
    },

  }
};