'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Verifyer = function () {
    function Verifyer() {
        _classCallCheck(this, Verifyer);
    }

    _createClass(Verifyer, null, [{
        key: 'verifyListId',
        value: function verifyListId(id) {
            if (!id) throw Error('Hey, list id is required');
        }
    }, {
        key: 'verifyMergeId',
        value: function verifyMergeId(id) {
            if (!id) throw Error('Hey, merge id is required');
        }
    }, {
        key: 'verifySegmentId',
        value: function verifySegmentId(id) {
            if (!id) throw Error('Hey, segment id is required');
        }
    }, {
        key: 'verifyCampaignId',
        value: function verifyCampaignId(id) {
            if (!id) throw Error('Hey, campaign id is required');
        }
    }, {
        key: 'verifyWebhookId',
        value: function verifyWebhookId(id) {
            if (!id) throw Error('Hey, webhook id is required');
        }
    }, {
        key: 'verifyBody',
        value: function verifyBody(body) {
            if (!body) throw Error('Body of list is required');
        }
    }, {
        key: 'verifySubscriberHash',
        value: function verifySubscriberHash(subscriberHash) {
            if (!subscriberHash) throw Error('Subscriber Hash is required');
        }
    }, {
        key: 'verifyRequiredFieldsInBody',
        value: function verifyRequiredFieldsInBody(body, requiredFields) {
            Verifyer.verifyBody(body);
            requiredFields.forEach(function (field) {
                if (!body[field]) throw Error('Hey, you left something: ' + field + ' is a required parameter for this operation.');
            });
        }
    }]);

    return Verifyer;
}();

exports.default = Verifyer;
//# sourceMappingURL=Verifyer.js.map