module.exports = function(grunt) {
  return {
    options: {
      //sourceMap:true,
    },

    // HOMEPAGE ---------------------------------------------------------------------------
    hpConcat: {
      files: {
        'home/<%= hp.name %>/build/hp.html': [''],
      }
    },

    // POSTS ---------------------------------------------------------------------------
    postsConcat: {
      files: {
        'posts/<%= posts.name %>/build/posts.html': [''],
      }
    },

    // PAGES ---------------------------------------------------------------------------
    pagesConcat: {
      files: {
        'pages/<%= pages.name %>/build/pages.html': [''],
      }
    },


  }
};