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
    request = request.defaults({
      baseUrl: 'https://rest.telesign.com/v' + setupParams.version
    });
    authorize.setup(setupParams);
  };

  SendRequest.request = function(options, fn) {
    var headers = authorize.getHeaders(options.method, options.resource, options.fields);
    request({
      uri: options.resource,
      method: options.method,
      headers: headers,
      qs: options.qs,
      timeout: params.timeout
    }, function(err, response, body) {
      if (err) {
        return fn('Error on request: ' + err);
      } else if (!response || !body) {
        return fn('Error - no response on request');
      } else if (response.status !== 200) {
        return fn(body);
      }
      return fn(null, body);
    });
  }

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = SendRequest;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
