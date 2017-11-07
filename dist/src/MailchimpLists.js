'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Verifyer = require('../utils/Verifyer');

var _Verifyer2 = _interopRequireDefault(_Verifyer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MailchimpLists = function () {
    function MailchimpLists(mailchimpClient) {
        _classCallCheck(this, MailchimpLists);

        this.mailchimp = mailchimpClient;
    }

    _createClass(MailchimpLists, [{
        key: 'create',
        value: function create(body) {
            _Verifyer2.default.verifyBody(body);
            _Verifyer2.default.verifyRequiredFieldsInBody(body, ['name', 'contact', 'permission_reminder', 'campaign_defaults']);

            return this.mailchimp.call('POST', '/lists', body);
        }
    }, {
        key: 'list',
        value: function list(query) {
            return this.mailchimp.call('GET', '/lists', query);
        }
    }, {
        key: 'read',
        value: function read(id, query) {
            _Verifyer2.default.verifyId(id);
            return this.mailchimp.call('GET', '/lists/' + id, query);
        }
    }, {
        key: 'update',
        value: function update(id, body) {
            _Verifyer2.default.verifyId(id);
            return this.mailchimp.call('PATCH', '/lists/' + id, body);
        }
    }, {
        key: 'delete',
        value: function _delete(id) {
            return this.mailchimp.call('DELETE', '/lists/' + id);
        }
    }, {
        key: 'batch',
        value: function batch(id, body) {
            _Verifyer2.default.verifyId(id);
            _Verifyer2.default.verifyRequiredFieldsInBody(body, ['members']);
            return this.mailchimp.call('POST', '/lists/' + id, body);
        }
    }]);

    return MailchimpLists;
}();

exports.default = MailchimpLists;
//# sourceMappingURL=MailchimpLists.js.map