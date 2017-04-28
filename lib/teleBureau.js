/* LIB */

var authorize = require('./authorize');
var sendRequest = require('./sendRequest');

/* MODULES */

var moment = require('moment');

/* CONSTRUCTOR */

(function () {

  var TeleBureau = {};

  /* PRIVATE VARIABLES */

  var params;

  /* PUBLIC FUNCTIONS */

  TeleBureau.setup = function (setupParams) {
    params = setupParams;
    sendRequest.setup(setupParams);
  };

  TeleBureau.getEvent = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling TeleBureau Get - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling TeleBureau Get - no callback function provided.');
    } else if (!options.referenceId) {
      return callback('Error calling TeleBureau Get - "referenceId" not provided in the request params.');
    }

    sendRequest.request({
      method: 'GET',
      resource: '/telebureau/event/' + options.referenceId,
      qs: options.qs || null
    }, function (err, data) {
      return callback(err, data);
    });
  };

  TeleBureau.submitEvent = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling TeleBureau Submit - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling TeleBureau Submit - no callback function provided.');
    } else if (!options.phoneNumber) {
      return callback('Error calling TeleBureau Submit - "phoneNumber" not provided in the request params.');
    } else if (!options.fraudType) {
      return callback('Error calling TeleBureau Submit - "fraudType" not provided in the request params.');
    } else if (!options.occurredAt) {
      return callback('Error calling TeleBureau Submit - "occurredAt" not provided in the request params.');
    }

    var dateFormat = 'YYYY-MM-DDTHH:mm:ss';

    options.occurredAt = moment.utc(options.occurredAt).format(dateFormat) + 'Z';
    if (options.discoveredAt) options.discoveredAt = moment.utc(options.discoveredAt).format(dateFormat) + 'Z';
    if (options.verifiedAt) options.verifiedAt = moment.utc(options.verifiedAt).format(dateFormat) + 'Z';

    var fields = {
      phone_number: options.phoneNumber,
      fraud_type: options.fraudType,
      occurred_at: options.occurredAt,
      discovered_at: options.discoveredAt,
      fraud_ip: options.fraudIp,
      impact_type: options.impactType,
      impact: options.impact,
      verified_by: options.verifiedBy,
      verified_at: options.verifiedAt
    };

    sendRequest.request({
      method: 'POST',
      resource: '/telebureau/event',
      qs: options.qs || null,
      fields: fields
    }, function (err, data) {
      return callback(err, data);
    });
  };

  TeleBureau.deleteEvent = function (options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error('Error calling TeleBureau Delete - no params object provided.');
    } else if (!callback || typeof callback !== 'function') {
      throw new Error('Error calling TeleBureau Delete - no callback function provided.');
    } else if (!options.referenceId) {
      return callback('Error calling TeleBureau Delete - "referenceId" not provided in the request params.');
    }

    sendRequest.request({
      method: 'DELETE',
      resource: '/telebureau/event/' + options.referenceId,
      qs: options.qs || null
    }, function (err, data) {
      return callback(err, data);
    });
  };

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = TeleBureau;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
