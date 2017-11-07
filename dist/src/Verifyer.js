'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Verifyer = function () {
    function Verifyer() {
        _classCallCheck(this, Verifyer);
    }

    _createClass(Verifyer, null, [{
        key: 'verifyId',
        value: function verifyId(id) {
            if (!id) throw Error('Hey, list ID is required');
        }
    }, {
        key: 'verifyBody',
        value: function verifyBody(body) {
            if (!body) throw Error('Body of list is required');
        }
    }, {
        key: 'verifyRequiredFieldsInBody',
        value: function verifyRequiredFieldsInBody(body, requiredFields) {
            requiredFields.forEach(function (field) {
                if (!body[field]) throw Error('Hey, you left something: ' + field + ' is a required parameter for this operation.');
            });
        }
    }]);

    return Verifyer;
}();

exports.default = Verifyer;
//# sourceMappingURL=Verifyer.js.map