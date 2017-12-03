# awesome-mailchimp-v3-api-js
A simple library for mailchimp API V3 written in Js

### Usage
This can be installed via npm using:
`$ npm install awesome-mailchimp-v3-api-js`

Then require the module in your code:
```js
const Mailchimp = require('awesome-mailchimp-v3-api-js');

// or ES6 import
import Mailchimp from 'awesome-mailchimp-v3-api-js';
```
### API Examples
Create a list
```js
const mailChimp = new MailChimp('email','api-key');

const listData = {'name':'Library Test List',
        'contact':{
            'company':'Mailchimp',
            'address1':'France',
            'city':'Paris',
            'state':'Paris',
            'zip':'000',
            'country':'France'
        },
        "permission_reminder":"You gave us permission",
        "campaign_defaults":{
            "from_name":",Mayowa",
            "from_email":"Mayowa@mayor.com",
            "subject":"New list created",
            "language":"en"
        },
        "email_type_option":true
    };

mailChimp.list.createList(listData).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
```
Get info about a list
```js
mailChimp.list.readListInfo('ccb8a60b4b',{}).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
```
Subscribe Members to a list
```js
mailChimp.members.addMembers('list-id',body).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
```
Batch Subscribe members to a list
```js
mailChimp.list.batchSubscribe('list-id',body).then((data) =>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    });
```
Update Member info
```js
mailChimp.members.updateMemberInfo('list-id', 'subscriber-hash',body).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
```
Delete Member
```js
mailChimp.members.deleteMember('list-id', 'subscriber-hash').then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
```

--- More examples in the test folder. ---