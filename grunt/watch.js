module.exports = function(grunt) {

  return {
    options: {
      livereload: true
    },

    // HOMEPAGE ---------------------------------------------------------------------------
    HP: {
      files: ['home/<%= hp.name %>/css/*.less', 'home/<%= hp.name %>/dev/*.html', 'home/<%= hp.name %>/js/*.js'],
      tasks: ['less:hpCSS', 'cssmin:hpCssMin', 'uglify:hpUglify', 'includes:hpIncludes', ],
    },

    // PAGES ---------------------------------------------------------------------------
    Pages: {
      files: ['pages/<%= pages.name %>/css/*.less', 'pages/<%= pages.name %>/dev/*.html', 'pages/<%= pages.name %>/js/*.js'],
      tasks: ['less:pagesCSS', 'cssmin:pagesCssMin', 'uglify:pagesUglify', 'includes:pagesIncludes', ],
    },

    // POSTS ---------------------------------------------------------------------------
    Posts: {
      files: ['posts/<%= posts.name %>/css/*.less', 'posts/<%= posts.name %>/dev/*.html', 'posts/<%= posts.name %>/js/*.js'],
      tasks: ['less:postsCSS', 'cssmin:postsCssMin', 'uglify:postsUglify', 'includes:postsIncludes', ],
    },

  }
};