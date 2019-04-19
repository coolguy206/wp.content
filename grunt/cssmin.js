module.exports = function(grunt) {
  return {
    // HP  ---------------------------------------------------------------------------
    hpCssMin: {
      files: {
        'home/<%= hp.name %>/css/styles.css': 'home/<%= hp.name %>/css/styles.css'
      }
    },

    // PAGES  ---------------------------------------------------------------------------
    pagesCssMin: {
      files: {
        'pages/<%= pages.name %>/css/styles.css': 'pages/<%= pages.name %>/css/styles.css'
      }
    },

    // POSTS  ---------------------------------------------------------------------------
    postsCssMin: {
      files: {
        'posts/<%= posts.name %>/css/styles.css': 'posts/<%= posts.name %>/css/styles.css'
      }
    },
  }
};