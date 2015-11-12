/* LIB */

var authorize = require('./authorize');
var sendRequest = require('./sendRequest');

/* CONSTRUCTOR */

(function() {

  var Verify = {};

  /* PRIVATE VARIABLES */

  var params;

  /* PUBLIC FUNCTIONS */

  Verify.setup = function(setupParams) {
    params = setupParams;
    return this;
  };

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = Verify;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
