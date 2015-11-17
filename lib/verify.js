/* LIB */

var sendRequest = require('./sendRequest');

/* CONSTRUCTOR */

(function() {

  var Verify = {};

  /* PRIVATE VARIABLES */

  var params;

  /* PUBLIC FUNCTIONS */

  Verify.setup = function(setupParams) {
    params = setupParams;
    sendRequest.setup(setupParams);
  };

  Verify.get = function(options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify Get - no params object provided.');
    } else if (!options.referenceId || typeof options.referenceId !== 'string') {
      throw new Error('Error calling Verify Get - "referenceId" not provided in the request params.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify Get - no callback function provided.');
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

  Verify.call = function(options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify Call - no params object provided.');
    } else if (!options.phoneNumber) {
      throw new Error('Error calling Verify Call - "phoneNumber" not provided in the request params.');
    } else if (!options.ucid) {
      throw new Error('Error calling Verify Call - "ucid" not provided in the request params.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify Call - no callback function provided.');
    } else if (options.originatingIp && typeof options.originatingIp !== 'string') {
      throw new Error('Error calling Verify Call - "originatingIp" must be a string.');
    } else if (options.language && typeof options.language !== 'string') {
      throw new Error('Error calling Verify Call - "language" must be a string.');
    } else if (options.verifyCode && typeof options.verifyCode !== 'number') {
      options.verifyCode = parseInt(options.verifyCode);
      if (isNaN(options.verifyCode)) {
        throw new Error('Error calling Verify Call - "verifyCode" must be a string.');
      }
    } else if (options.extensionType && typeof options.extensionType !== 'number') {
      throw new Error('Error calling Verify Call - "extensionType" must be a number (1 or 2).');
    } else if (options.extensionTemplate && typeof options.extensionTemplate !== 'string') {
      throw new Error('Error calling Verify Call - "extensionTemplate" must be a string.');
    } else if (options.redial && typeof options.redial !== 'boolean') {
      throw new Error('Error calling Verify Call - "redial" must be a boolean.');
    }

    var fields = {
      phone_number: options.phoneNumber,
      ucid: options.ucid,
      originating_ip: options.originatingIp,
      language: options.language,
      verify_code: options.verifyCode,
      extension_type: options.extensionType,
      extension_template: options.extensionTemplate,
      redial: options.redial
    };

    sendRequest.request({
      method: 'POST',
      contentType: null,
      resource: '/verify/call',
      qs: null,
      fields: fields
    }, function(err, data) {
      return callback(err, data);
    });
  };

  Verify.sms = function(options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify SMS - no params object provided.');
    } else if (!options.phoneNumber) {
      throw new Error('Error calling Verify SMS - "phoneNumber" not provided in the request params.');
    } else if (!options.ucid) {
      throw new Error('Error calling Verify SMS - "ucid" not provided in the request params.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify SMS - no callback function provided.');
    } else if (options.originatingIp && typeof options.originatingIp !== 'string') {
      throw new Error('Error calling Verify SMS - "originatingIp" must be a string.');
    } else if (options.language && typeof options.language !== 'string') {
      throw new Error('Error calling Verify SMS - "language" must be a string.');
    } else if (options.verifyCode && typeof options.verifyCode !== 'number') {
      options.verifyCode = parseInt(options.verifyCode);
      if (isNaN(options.verifyCode)) {
        throw new Error('Error calling Verify SMS - "verifyCode" must be a string.');
      }
    } else if (options.template && typeof options.template !== 'string') {
      throw new Error('Error calling Verify SMS - "template" must be a string.');
    }

    var fields = {
      phone_number: options.phoneNumber,
      ucid: options.ucid,
      originating_ip: options.originatingIp,
      language: options.language,
      verify_code: options.verifyCode,
      template: options.template
    };

    sendRequest.request({
      method: 'POST',
      contentType: null,
      resource: '/verify/call',
      qs: null,
      fields: fields
    }, function(err, data) {
      return callback(err, data);
    });
  };

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = Verify;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
