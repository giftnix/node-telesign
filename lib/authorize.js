/* MODULES */

var crypto = require('crypto');
var utf8 = require('utf8');
var moment = require('moment');

/* CONSTRUCTOR */

(function() {

  var Authorize = {};

  /* PRIVATE VARIABLES */

  var params;

  /* PUBLIC FUNCTIONS */

  Authorize.setup = function(setupParams) {
    params = setupParams;
  };

  Authorize.getAuthorizationHeader = function(method, contentType, resource) {
    var dateString = getDateString();
    var stringToSign = method + '\n' + contentType + '\n' +
      dateString + '\n' + resource;
    var stringToSignUtf8 = utf8.encode(stringToSign);
    var signature = crypto.createHmac('sha1', params.apiKey)
      .update(stringToSignUtf8).digest('base64');
    var authorization = 'TSA ' + params.customerId + ':' + signature;
    return authorization;
  }

  /* PRIVATE FUNCTIONS */

  function getDateString() {
    return moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ');
  }

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = Authorize;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
