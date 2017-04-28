/* LIB */

var sendRequest = require('./sendRequest');

/* CONSTRUCTOR */

(function () {

  var Verify = {};

  /* PRIVATE VARIABLES */

  var params;

  /* PUBLIC FUNCTIONS */

  Verify.setup = function (setupParams) {
    params = setupParams;
    sendRequest.setup(setupParams);
  };

  Verify.get = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify Get - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify Get - no callback function provided.');
    } else if (!options.referenceId) {
      return callback('Error calling Verify Get - "referenceId" not provided in the request params.');
    }

    sendRequest.request({
      method: 'GET',
      resource: '/verify/' + options.referenceId,
      qs: options.qs || null
    }, function (err, data) {
      return callback(err, data);
    });
  };

  Verify.call = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify Call - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify Call - no callback function provided.');
    } else if (!options.phoneNumber) {
      return callback('Error calling Verify Call - "phoneNumber" not provided in the request params.');
    } else if (!options.ucid) {
      return callback('Error calling Verify Call - "ucid" not provided in the request params.');
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
      resource: '/verify/call',
      qs: options.qs || null,
      fields: fields
    }, function (err, data) {
      return callback(err, data);
    });
  };

  Verify.sms = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify SMS - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify SMS - no callback function provided.');
    } else if (!options.phoneNumber) {
      return callback('Error calling Verify SMS - "phoneNumber" not provided in the request params.');
    } else if (!options.ucid) {
      return callback('Error calling Verify SMS - "ucid" not provided in the request params.');
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
      resource: '/verify/sms',
      qs: options.qs || null,
      fields: fields
    }, function (err, data) {
      return callback(err, data);
    });
  };

  Verify.twoWaySms = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify 2-Way SMS - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify 2-Way SMS - no callback function provided.');
    } else if (!options.phoneNumber) {
      return callback('Error calling Verify 2-Way SMS - "phoneNumber" not provided in the request params.');
    } else if (!options.ucid) {
      return callback('Error calling Verify 2-Way SMS - "ucid" not provided in the request params.');
    } else if (!options.message) {
      return callback('Error calling Verify 2-Way SMS - "message" not provided in the request params.');
    } else if (!options.validityPeriod) {
      return callback('Error calling Verify 2-Way SMS - "validityPeriod" not provided in the request params.');
    }

    var fields = {
      phone_number: options.phoneNumber,
      ucid: options.ucid,
      message: options.message,
      validity_period: options.validityPeriod
    };

    sendRequest.request({
      method: 'POST',
      resource: '/verify/two_way_sms',
      qs: options.qs || null,
      fields: fields
    }, function (err, data) {
      return callback(err, data);
    });
  };

  Verify.push = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify Push - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify Push - no callback function provided.');
    } else if (!options.phoneNumber) {
      return callback('Error calling Verify Push - "phoneNumber" not provided in the request params.');
    } else if (!options.template) {
      return callback('Error calling Verify Push - "template" not provided in the request params.');
    }

    var fields = {
      phone_number: options.phoneNumber,
      notification_type: options.notificationType,
      notification_value: options.notificationValue,
      template: options.template,
      message: options.message
    };

    sendRequest.request({
      method: 'POST',
      resource: '/verify/push',
      qs: options.qs || null,
      fields: fields
    }, function (err, data) {
      return callback(err, data);
    });
  };

  Verify.softToken = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify Soft Token - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify Soft Token - no callback function provided.');
    } else if (!options.phoneNumber) {
      return callback('Error calling Verify Soft Token - "phoneNumber" not provided in the request params.');
    } else if (!options.verifyCode) {
      return callback('Error calling Verify Soft Token - "verifyCode" not provided in the request params.');
    }

    var fields = {
      phone_number: options.phoneNumber,
      soft_token_id: options.softTokenId,
      verify_code: options.verifyCode
    };

    sendRequest.request({
      method: 'POST',
      resource: '/verify/soft_token',
      qs: options.qs || null,
      fields: fields
    }, function (err, data) {
      return callback(err, data);
    });
  };

  Verify.verifyRegistration = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling Verify Registration - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling Verify Registration - no callback function provided.');
    } else if (!options.phoneNumber) {
      return callback('Error calling Verify Registration - "phoneNumber" not provided in the request params.');
    }

    sendRequest.request({
      method: 'GET',
      resource: '/verify/registration/' + options.phoneNumber,
      qs: {
        mobile_app_signature: options.mobileAppSignature
      }
    }, function (err, data) {
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
