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

  PhoneID.standard = function(options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling PhoneID Standard - no params object provided.');
    } else if (!options.phoneNumber) {
      throw new Error('Error calling PhoneID Score - "phoneNumber" not provided in the request params.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling PhoneID Score - no callback function provided.');
    }

    sendRequest.request({
      method: 'GET',
      contentType: null,
      resource: '/phoneid/standard/' + options.phoneNumber,
      qs: null
    }, function(err, data) {
      return callback(err, data);
    });
  };

  PhoneID.score = function(options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling PhoneID Score - no params object provided.');
    } else if (!options.phoneNumber) {
      throw new Error('Error calling PhoneID Score - "phoneNumber" not provided in the request params.');
    } else if (!options.ucid) {
      throw new Error('Error calling PhoneID Score - "ucid" not provided in the request params.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling PhoneID Score - no callback function provided.');
    }

    sendRequest.request({
      method: 'GET',
      contentType: null,
      resource: '/phoneid/score/' + options.phoneNumber,
      qs: {
        ucid: options.ucid
      }
    }, function(err, data) {
      return callback(err, data);
    });
  };

  PhoneID.contact = function(options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling PhoneID Contact - no params object provided.');
    } else if (!options.phoneNumber) {
      throw new Error('Error calling PhoneID Contact - "phoneNumber" not provided in the request params.');
    } else if (!options.ucid) {
      throw new Error('Error calling PhoneID Contact - "ucid" not provided in the request params.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling PhoneID Contact - no callback function provided.');
    }

    sendRequest.request({
      method: 'GET',
      contentType: null,
      resource: '/phoneid/contact/' + options.phoneNumber,
      qs: {
        ucid: options.ucid
      }
    }, function(err, data) {
      return callback(err, data);
    });
  };

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = PhoneID;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
