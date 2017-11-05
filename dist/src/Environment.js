'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = function () {
    function Environment(userName, apiKey) {
        _classCallCheck(this, Environment);

        this._userName = userName;
        this._apiKey = apiKey;
        this._version = Environment.defaults().VERSION;
        this._dataCenter = apiKey;
        this._endPoint = "" + Environment.defaults().PROTOCOL + this.datacenter + Environment.defaults().DOMAIN + Environment.defaults().VERSION;
    }

    _createClass(Environment, [{
        key: "_userName",
        set: function set(userName) {
            if (Environment._checkUserName(userName)) this.userName = userName;
        }
    }, {
        key: "username",
        get: function get() {
            return this.userName;
        }
    }, {
        key: "_apiKey",
        set: function set(apiKey) {
            if (Environment._checkApiKey(apiKey)) this.apiKey = apiKey;
        }
    }, {
        key: "apikey",
        get: function get() {
            return this.apiKey;
        }
    }, {
        key: "_version",
        set: function set(version) {
            this.ver = version;
        }
    }, {
        key: "version",
        get: function get() {
            return this.ver;
        }
    }, {
        key: "_dataCenter",
        set: function set(apiKey) {
            if (Environment._checkApiKey(apiKey)) this.dataCenter = apiKey.split('-')[1];
        }
    }, {
        key: "datacenter",
        get: function get() {
            return this.dataCenter;
        }
    }, {
        key: "_endPoint",
        set: function set(endpoint) {
            this.endPoint = endpoint;
        }
    }, {
        key: "endpoint",
        get: function get() {
            return this.endPoint;
        }
    }], [{
        key: "_checkUserName",
        value: function _checkUserName(userName) {
            if (!userName) throw Error("You gotta have a Username dawg.");
            return true;
        }
    }, {
        key: "_checkApiKey",
        value: function _checkApiKey(apiKey) {
            if (!apiKey) throw Error("Hey dawg, ApiKey is required.");
            return true;
        }
    }, {
        key: "defaults",
        value: function defaults() {
            return { VERSION: '3', DOMAIN: '.api.mailchimp.com', PROTOCOL: 'https://' };
        }
    }]);

    return Environment;
}();

exports.default = Environment;
//# sourceMappingURL=Environment.js.map