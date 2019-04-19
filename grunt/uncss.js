module.exports = function(grunt) {
  return {
    // HOMEPAGE ---------------------------------------------------------------------------
    hpUnCss: {
      files: {
        'home<%= home.name %>/css/uncss/styles.css': ['home/<%= home.name %>/build/home.html']
      }
    },

    // PAGES ---------------------------------------------------------------------------
    pagesUnCss: {
      files: {
        'pages/<%= pages.name %>/css/uncss/styles.css': ['pages/<%= pages.name %>/build/pages.html']
      }
    },

    // POSTS ---------------------------------------------------------------------------
    postsUnCss: {
      files: {
        'posts/<%= posts.name %>/css/uncss/styles.css': ['posts/<%= posts.name %>/build/posts.html']
      }
    },
  }
};