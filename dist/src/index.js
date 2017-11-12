'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _Environment = require('../utils/Environment');

var _Environment2 = _interopRequireDefault(_Environment);

var _MailchimpLists = require('./MailchimpLists');

var _MailchimpLists2 = _interopRequireDefault(_MailchimpLists);

var _MailchimpCampaigns = require('./MailchimpCampaigns');

var _MailchimpCampaigns2 = _interopRequireDefault(_MailchimpCampaigns);

var _MailchimpMembers = require('./MailchimpMembers');

var _MailchimpMembers2 = _interopRequireDefault(_MailchimpMembers);

var _MailchimpMergeFields = require('./MailchimpMergeFields');

var _MailchimpMergeFields2 = _interopRequireDefault(_MailchimpMergeFields);

var _MailchimpSegments = require('./MailchimpSegments');

var _MailchimpSegments2 = _interopRequireDefault(_MailchimpSegments);

var _MailchimpWebhooks = require('./MailchimpWebhooks');

var _MailchimpWebhooks2 = _interopRequireDefault(_MailchimpWebhooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MailChimp = function () {
    function MailChimp(userName, apiKey) {
        _classCallCheck(this, MailChimp);

        this.env = new _Environment2.default(userName, apiKey);
        this.list = new _MailchimpLists2.default(this);
        this.campaigns = new _MailchimpCampaigns2.default(this);
        this.members = new _MailchimpMembers2.default(this);
        this.mergefields = new _MailchimpMergeFields2.default(this);
        this.segments = new _MailchimpSegments2.default(this);
        this.webhooks = new _MailchimpWebhooks2.default(this);
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

exports.default = MailChimp;
//# sourceMappingURL=index.js.map