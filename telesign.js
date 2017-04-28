/* LIB */

var phoneId = require('./lib/phoneId');
var verify = require('./lib/verify');
var teleBureau = require('./lib/teleBureau');

/* CONSTRUCTOR */

(function () {

  var TeleSign = {};

  /* PRIVATE VARIABLES */

  var params;
  var defaults = {
    version: '1',
    authMethod: 'sha256',
    timeout: 3000
  };

  /* PUBLIC FUNCTIONS */

  TeleSign.setup = function (setupParams) {
    if (!setupParams) {
      throw new Error('Please include params for the TeleSign module constructor.');
    } else if (!setupParams.customerId) {
      throw new Error('Missing "customerId" in the TeleSign module params.');
    } else if (!setupParams.apiKey) {
      throw new Error('Missing "apiKey" in the TeleSign module params.');
    }

    params = setupParams;
    params.version = setupParams.version ? setupParams.version.toString() : defaults.version;
    params.authMethod = setupParams.authMethod ? setupParams.authMethod.toLowerCase() : defaults.authMethod;

    if (params.authMethod !== 'sha1' && params.authMethod !== 'sha256') {
      throw new Error('Param "authMethod" must be either "sha1" or "sha256".');
    } else {
      if (params.authMethod === 'sha1') {
        params.authMethod = {
          hash: 'sha1',
          name: 'HMAC-SHA1'
        };
      } else {
        params.authMethod = {
          hash: 'sha256',
          name: 'HMAC-SHA256'
        };
      }
    }

    params.timeout = setupParams.timeout ? parseInt(setupParams.timeout) : defaults.timeout;

    TeleSign.phoneId.setup(params);
    TeleSign.verify.setup(params);
    TeleSign.teleBureau.setup(params);

    return this;
  };

  TeleSign.phoneId = phoneId;
  TeleSign.verify = verify;
  TeleSign.teleBureau = teleBureau;

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = TeleSign;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
