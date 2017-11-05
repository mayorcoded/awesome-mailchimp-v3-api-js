'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _Environment = require('./Environment');

var _Environment2 = _interopRequireDefault(_Environment);

var _MailchimpLists = require('./MailchimpLists');

var _MailchimpLists2 = _interopRequireDefault(_MailchimpLists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MailChimp = function () {
    function MailChimp(userName, apiKey) {
        _classCallCheck(this, MailChimp);

        this.env = new _Environment2.default(userName, apiKey);
        this.list = new _MailchimpLists2.default(this);
    }

    _createClass(MailChimp, [{
        key: 'call',
        value: function call(http, method, params) {
            var req = (0, _superagent2.default)(http, '' + this.env.endpoint + method).set('content-type', 'application/json').auth(this.env.username, this.env.apikey);

            return MailChimp.makeRequest(http, params, req);
        }
    }], [{
        key: 'makeRequest',
        value: function makeRequest(http, params, request) {
            var requestType = { 'POST': request.send(params), 'PATCH': request.send(params), 'GET': request.query(params) };
            return requestType[http];
        }
    }]);

    return MailChimp;
}();

var m = new MailChimp('dfa', 'afa');
m.call();
//# sourceMappingURL=index.js.map