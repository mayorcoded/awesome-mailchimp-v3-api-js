import MailchimpLists from '../src/MailchimpLists';
import MailChimp from '../src/index';

/**
 * Remember to replace (email, api-key, list-id) with real values
 */


let mailChimp = new MailChimp('email','api-key');

test('Get info about mailchimp list',()=>{
    expect.assertions(1);

    return mailChimp.list.readListInfo('ccb8a60b4b',{}).then((data) => {
        expect(data.status).toBe(200);
    }).catch((error) => {
        expect(error.status).toBe(404);
    });
});

test('Create new list',()=>{
    expect.assertions(1);

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

    return mailChimp.list.createList(listData).then((data)=>{
        /**
         * write your other codes here
         */
        expect(data.status).toBe(200); /*Test code - You can ignore this line of code*/
    }).catch((error)=>{
        expect(error.status).toBe(400); /*Test code - You can ignore this line of code*/
    })
});