/* LIB */

var phoneId = require('./lib/phoneId');
var verify = require('./lib/verify');

/* CONSTRUCTOR */

(function() {

  var TeleSign = {};

  /* PRIVATE VARIABLES */

  var params;
  var defaults = {
    version: '1'
  };

  /* PUBLIC FUNCTIONS */

  TeleSign.setup = function(setupParams) {
    if (!setupParams) {
      throw new Error('Please include params for the TeleSign module constructor.');
    } else if (!setupParams.customerId) {
      throw new Error('Missing "customerId" in the TeleSign module params.');
    } else if (!setupParams.apiKey) {
      throw new Error('Missing "apiKey" in the TeleSign module params.');
    }

    params = setupParams;
    params.version = setupParams.version ? setupParams.version.toString() : defaults.version;

    TeleSign.phoneId = phoneId.setup(params);
    TeleSign.verify = verify.setup(params);

    return this;
  };

  /* NPM EXPORT */

  if (typeof module === 'object' && module.exports) {
    module.exports = TeleSign;
  } else {
    throw new Error('This module only works with NPM in NodeJS/IO.JS environments.');
  }

}());
