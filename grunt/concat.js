module.exports = function(grunt) {
  return {
    options: {
      //sourceMap:true,
    },

    // HOMEPAGE ---------------------------------------------------------------------------
    hpConcat: {
      files: {
        'home/<%= hp.name %>/concat/home.html': [''],
      }
    },

    // POSTS ---------------------------------------------------------------------------
    postsConcat: {
      files: {
        'posts/<%= posts.name %>/concat/posts.html': [''],
      }
    },

    // PAGES ---------------------------------------------------------------------------
    pagesConcat: {
      files: {
        'pages/<%= pages.name %>/concat/pages.html': [''],
      }
    },


  }
};