/* CONSTRUCTOR */

(function() {

  var Authorize = {};

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = Authorize;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
