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
          dest: 'home/<%= hp.name %>/wp/wp-homepage.html',
        },
      ],

    },

  }
};