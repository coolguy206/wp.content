module.exports = function(grunt) {
  return {
    hpCssMin: {
      files: {
        'home/<%= hp.name %>/css/styles.css': 'home/<%= hp.name %>/css/styles.css'
      }
    },
  }
};