module.exports = function(grunt) {
  return {
    options: {
      compress: true,
      sourceMap: true
    },

    // HOMEPAGE ---------------------------------------------------------------------------
    hpUglify: {
      //dynamic files
      expand: true,
      cwd: 'home/<%= home.name %>/js',
      src: ['*.js'],
      dest: 'home/<%= home.name %>/js/output/',
      ext: '.min.js',
    },

    // PAGES ---------------------------------------------------------------------------
    pagesUglify: {
      //dynamic files
      expand: true,
      cwd: 'pages/<%= pages.name %>/js',
      src: ['*.js'],
      dest: 'pages/<%= pages.name %>/js/output/',
      ext: '.min.js',
    },

    // POSTS ---------------------------------------------------------------------------
    postsUglify: {
      //dynamic files
      expand: true,
      cwd: 'posts/<%= posts.name %>/js',
      src: ['*.js'],
      dest: 'posts/<%= posts.name %>/js/output/',
      ext: '.min.js',
    },

  }
};