module.exports = function(grunt) {

  return {

    // HP  ---------------------------------------------------------------------------
    hpCopy: {

      files: [
        //copy the styles.css
        {
          expand: true,
          cwd: 'home/',
          src: [''],
          dest: 'homepage/<%= hp.name %>/'
        },
      ],
    },

    // PAGES  ---------------------------------------------------------------------------
    pagesCopy: {

      files: [
        //copy the styles.css
        {
          expand: true,
          cwd: 'pages/',
          src: [''],
          dest: 'pages/<%= pages.name %>/'
        },
      ],
    },

    // POSTS  ---------------------------------------------------------------------------
    postsCopy: {

      files: [
        //copy the styles.css
        {
          expand: true,
          cwd: 'posts/',
          src: [''],
          dest: 'posts/<%= posts.name %>/'
        },
      ],
    },


    // PROMOS  ---------------------------------------------------------------------------
    // promosCopy: {
    //
    //     CODE EXAMPLE OF COPY WITH MODIFICAITONS ADDED
    //     options: {
    //         process:function(content, srcpath){
    //             //log the content or srcPath
    //             grunt.log.write(srcpath);
    //
    //             //if srcpath
    //             if(srcpath == 'promos/labor-day/170831/dev/content.html'){
    //                 return 'include "d-header-hp.html" \n' + content + '\n include "d-footer-hp.html"';
    //             } else {
    //                 return content;
    //             }
    //         }
    //     },
    //
    //     files: [
    //
    //         COPY LABOR DAY CSS
    //         {expand: true, cwd: 'promos/labor-day/170831/css', src: ['*.css'], dest: 'promos/labor-day/170831/include/'},
    //         COPY INFLUENCER CSS
    //         {expand: true, cwd: 'promos/influencer/170828/css', src: ['*.css'], dest: 'promos/influencer/170828/include/'},
    //     ],
    // },
  }
};