'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MailchimLists = function () {
    function MailchimLists(mailchimpClient) {
        _classCallCheck(this, MailchimLists);

        this.mailchimp = mailchimpClient;
    }

    _createClass(MailchimLists, [{
        key: 'create',
        value: function create(body) {
            if (this.requiredFieldIsComplete(body)) return this.mailchimp.call();
        }
    }, {
        key: 'requiredFieldIsComplete',
        value: function requiredFieldIsComplete(body) {
            var requiredFields = ['name', 'contact', 'permission_reminder', 'campaign_defaults'];
            requiredFields.forEach(function (field) {
                if (!body[field]) throw Error('Hey, you left something: ' + field + ' is a required parameter for this operation.');
            });

            return true;
        }
    }]);

    return MailchimLists;
}();

exports.default = MailchimLists;
//# sourceMappingURL=MailchimpLists.js.map