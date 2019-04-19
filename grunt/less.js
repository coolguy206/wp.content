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

    // PAGES CSS ---------------------------------------------------------------------------
    pagesCSS: {
      expand: true,
      cwd: 'pages/<%= pages.name %>/css/',
      src: '*.less',
      dest: 'pages/<%= pages.name %>/css/',
      ext: '.css',
    },

    // POSTS CSS ---------------------------------------------------------------------------
    postsCSS: {
      expand: true,
      cwd: 'posts/<%= posts.name %>/css/',
      src: '*.less',
      dest: 'posts/<%= posts.name %>/css/',
      ext: '.css',
    },

  }
};