/* LIB */

var authorize = require('./authorize');
var sendRequest = require('./sendRequest');

/* CONSTRUCTOR */

(function() {

  var PhoneID = {};

  /* PRIVATE VARIABLES */

  var params;

  /* PUBLIC FUNCTIONS */

  PhoneID.setup = function(setupParams) {
    params = setupParams;
    sendRequest.setup(setupParams);
  };

  PhoneID.score = function(options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling PhoneID Standard - no params object provided.');
    } else if (!options.phoneNumber) {
      throw new Error('Error calling PhoneID Standard - "phoneNumber" not provided in the request params.');
    } else if (!options.ucid) {
      throw new Error('Error calling PhoneID Standard - "ucid" not provided in the request params.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling PhoneID Standard - no callback function provided.');
    }
    return callback();
  };

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = PhoneID;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
