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
        key: 'createList',
        value: function createList(body) {
            _Verifyer2.default.verifyBody(body);
            _Verifyer2.default.verifyRequiredFieldsInBody(body, ['name', 'contact', 'permission_reminder', 'campaign_defaults', 'email_type_option']);

            return this.mailchimp.call('POST', '/lists', body);
        }
    }, {
        key: 'readListsInfo',
        value: function readListsInfo(query) {
            return this.mailchimp.call('GET', '/lists', query);
        }
    }, {
        key: 'readListInfo',
        value: function readListInfo(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _Verifyer2.default.verifyListId(id);
            return this.mailchimp.call('GET', '/lists/' + id, query);
        }
    }, {
        key: 'updateList',
        value: function updateList(id, body) {
            _Verifyer2.default.verifyListId(id);
            return this.mailchimp.call('PATCH', '/lists/' + id, body);
        }
    }, {
        key: 'deleteList',
        value: function deleteList(id) {
            return this.mailchimp.call('DELETE', '/lists/' + id);
        }
    }, {
        key: 'batchSubscribe',
        value: function batchSubscribe(id, body) {
            _Verifyer2.default.verifyListId(id);
            _Verifyer2.default.verifyRequiredFieldsInBody(body, ['members']);
            return this.mailchimp.call('POST', '/lists/' + id, body);
        }
    }]);

    return MailchimpLists;
}();

exports.default = MailchimpLists;
//# sourceMappingURL=MailchimpLists.js.map