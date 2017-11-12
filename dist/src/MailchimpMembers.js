'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Verifyer = require('../utils/Verifyer');

var _Verifyer2 = _interopRequireDefault(_Verifyer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MailchimpMembers = function () {
    function MailchimpMembers(mailchimpClient) {
        _classCallCheck(this, MailchimpMembers);

        this.mailchimp = mailchimpClient();
    }

    _createClass(MailchimpMembers, [{
        key: 'addMembers',
        value: function addMembers(listId, body) {
            _Verifyer2.default.verifyListId(listId);
            _Verifyer2.default.verifyRequiredFieldsInBody(body, ['email', 'status']);

            return this.mailchimp.call('POST', '/lists/' + listId + '/members', body);
        }
    }, {
        key: 'readMembersInfo',
        value: function readMembersInfo(listId) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _Verifyer2.default.verifyListId(listId);

            return this.mailchimp.call('GET', '/lists/' + listId + '/members', query);
        }
    }, {
        key: 'readMemberInfo',
        value: function readMemberInfo(listId, subscriberHash) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            _Verifyer2.default.verifyListId(listId);
            _Verifyer2.default.verifySubscriberHash(subscriberHash);

            return this.mailchimp.call('GET', '/lists/' + listId + '/members/' + subscriberHash, query);
        }
    }, {
        key: 'updateMemberInfo',
        value: function updateMemberInfo(listId, subscriberHash, body) {
            _Verifyer2.default.verifyListId(listId);
            _Verifyer2.default.verifySubscriberHash(subscriberHash);

            return this.mailchimp.call('PATCH', '/lists/' + listId + '/members/' + subscriberHash, body);
        }
    }, {
        key: 'deleteMember',
        value: function deleteMember(listId, subscriberHash) {
            _Verifyer2.default.verifyListId(listId);
            _Verifyer2.default.verifySubscriberHash(subscriberHash);

            return this.mailchimp.call('DELETE', '/lists/' + listId + '/members/' + subscriberHash);
        }
    }]);

    return MailchimpMembers;
}();

exports.default = MailchimpMembers;
//# sourceMappingURL=MailchimpMembers.js.map