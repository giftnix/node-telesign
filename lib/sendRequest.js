/* LIB */

var authorize = require('./authorize');

/* MODULES */

var request = require('request');

/* CONSTRUCTOR */

(function() {

  var SendRequest = {};

  /* PRIVATE VARIABLES */

  var params;
  var baseUri = 'https://rest.telesign.com';

  /* PUBLIC FUNCTIONS */

  SendRequest.setup = function(setupParams) {
    params = setupParams;
    authorize.setup(setupParams);
  };

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = SendRequest;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
