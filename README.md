[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

# TeleSign SDK for NodeJS

A NodeJS wrapper for the TeleSign REST APIs

Install via npm:

    npm install --save telesign

## SDK Setup

Require the module and call ``setup``:

    var telesign = require('telesign').setup({
      customerId: 'AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE',
      apiKey: 'your/APIKey=='
    });

You can find your Customer ID and API Key on the TelePortal at [https://teleportal.telesign.com/](https://teleportal.telesign.com/) (leave your API Key in the base64 format as listed).

**Optional Setup Parameters**

- ``version`` - API version *defaults to '1'*
- ``authMethod`` - either ``sha1`` or ``sha256`` *defaults to 'sha1'*
- ``timeout`` - request timeout, in milliseconds, before returning an error *defaults to 3000*

## Available Endpoints

For resources that require a ``ucid``, see the list of available Use Case Codes at [http://docs.telesign.com/rest/content/xt/xt-use-case-codes.html#xref-use-case-codes](http://docs.telesign.com/rest/content/xt/xt-use-case-codes.html#xref-use-case-codes).

### PhoneID

#### Score

    var options = {
      phoneNumber: '15555555', **required**
      ucid: '' **required**
    };

    telesign.phoneId.score(options, function(err, response) {
      // err includes errors returned in TeleSign response
    });

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://github.com/giftnix/telesign/blob/master/LICENSE

[npm-version-image]: http://img.shields.io/npm/v/telesign.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/telesign.svg?style=flat-square
[npm-url]: https://npmjs.org/package/telesign

[travis-image]: http://img.shields.io/travis/giftnix/telesign.svg?style=flat-square
[travis-url]: http://travis-ci.org/giftnix/telesign