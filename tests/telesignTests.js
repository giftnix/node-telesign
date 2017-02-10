/* MODULES */

var chai = require('chai');
var expect = chai.expect;

var telesign = require('../telesign').setup({
  customerId: 'customer-id-is-2934234',
  apiKey: 'an-api-key-mightlooklikethis'
});

/* TEST */

telesign.phoneId.score({
  phoneNumber: '15125844348',
  ucid: 'CHBK'
}, function (err, data) {
  console.log('err::', err);
  console.log('data::', data);
});
