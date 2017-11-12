'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Verifyer = require('../utils/Verifyer');

var _Verifyer2 = _interopRequireDefault(_Verifyer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MailchimpMergeFields = function () {
    function MailchimpMergeFields(mailchimpClient) {
        _classCallCheck(this, MailchimpMergeFields);

        this.mailchimp = mailchimpClient;
    }

    _createClass(MailchimpMergeFields, [{
        key: 'addMergeFields',
        value: function addMergeFields(listId, body) {
            _Verifyer2.default.verifyListId(listId);

            return this.mailchimp.call('POST', '/lists/' + listId + '/merge-fields', body);
        }
    }, {
        key: 'readMergeFieldInfo',
        value: function readMergeFieldInfo(listId, mergeId) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            _Verifyer2.default.verifyListId(listId);
            _Verifyer2.default.verifyMergeId(mergeId);

            return this.mailchimp.call('GET', '/lists/' + listId + '/merge-fields/' + mergeId, query);
        }
    }, {
        key: 'updateMergeField',
        value: function updateMergeField(listId, mergeId, body) {
            _Verifyer2.default.verifyListId(listId);
            _Verifyer2.default.verifyMergeId(mergeId);

            return this.mailchimp.call('PATCH', '/lists/' + listId + '/merge-fields/' + mergeId, body);
        }
    }, {
        key: 'deleteMergeField',
        value: function deleteMergeField(listId, mergerId) {
            _Verifyer2.default.verifyListId(listId);

            return this.mailchimp.call('DELETE', '/lists/' + listId + '/merge-fields/' + mergerId);
        }
    }]);

    return MailchimpMergeFields;
}();

exports.default = MailchimpMergeFields;
//# sourceMappingURL=MailchimpMergeFields.js.map