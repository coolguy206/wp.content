module.exports = function(grunt) {

  return {

    options: {
      flatten: true
    },


    // HOMEPAGE  ---------------------------------------------------------------------------
    hpIncludes: {

      files: [
        //toolkit
        {
          cwd: 'home/<%= hp.name %>',
          src: ['dev/*.html'],
          dest: 'home/<%= hp.name %>/build/home.html',
        },
      ],

    },

    // PAGES  ---------------------------------------------------------------------------
    pagesIncludes: {

      files: [
        //toolkit
        {
          cwd: 'pages/<%= pages.name %>',
          src: ['dev/*.html'],
          dest: 'pages/<%= pages.name %>/build/pages.html',
        },
      ],

    },

    // POSTS  ---------------------------------------------------------------------------
    postsIncludes: {

      files: [
        //toolkit
        {
          cwd: 'posts/<%= posts.name %>',
          src: ['dev/*.html'],
          dest: 'posts/<%= posts.name %>/build/posts.html',
        },
      ],

    },

  }
};