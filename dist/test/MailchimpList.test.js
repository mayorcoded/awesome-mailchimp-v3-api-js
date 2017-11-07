'use strict';

var _MailchimpLists = require('../src/MailchimpLists');

var _MailchimpLists2 = _interopRequireDefault(_MailchimpLists);

var _index = require('../src/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = new _MailchimpLists2.default(new _index2.default('mayowa.tuodnu', 'some key'));

test('validate create method empty parameter ', function () {
    expect(function () {
        list.create();
    }).toThrow('Body of list is required');
});

test('validate create method empty body parameter', function () {
    expect(function () {
        list.create({ name: 'M', contact: 'jd', permission_reminder: 'jk', campaign_defaults: 'ef' });
    }).toThrow(/Hey/);
});
//# sourceMappingURL=MailchimpList.test.js.map