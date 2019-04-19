module.exports = function(grunt) {

  return {
    options: {
      livereload: true
    },

    // HOMEPAGE ---------------------------------------------------------------------------
    HP: {
      files: ['home/<%= hp.name %>/css/*.less', 'home/<%= hp.name %>/dev/*.html', 'home/<%= hp.name %>/js/*.js'],
      tasks: ['less:hpCSS', 'cssmin:hpCssMin', 'includes:hpIncludes', 'concat:hpConcat', 'uglify:hpUglify'],
    },

  }
};