import MailChimp from '../src/index';

/**
 * Remember to replace (email, api-key, list-id) with real values
 */


let mailChimp = new MailChimp('email','api-key');

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
         * The code below is a test code - You can do whatever you like with 'data'
         */
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    })
});

test('Get info about mailchimp list',()=>{
    expect.assertions(1);

    return mailChimp.list.readListInfo('list-id',{}).then((data) => {
        /**
         * The code below is a test code - You can do whatever you like with 'data'
         */
        expect(data.status).toBe(200);
    }).catch((error) => {
        expect(error.status).toBe(404);
    });
});

test('Batch subscribe members to list', ()=>{
    expect.assertions(1);
    const body ={
        'members':[{
            'email_address':'mayowa@mayor.com',
            'email_type':'text',
            'status':'subscribed'
        }]
    };
    return mailChimp.list.batchSubscribe('list-id',body).then((data) =>{
        /**
         * The code below is a test code - You can do whatever you like with 'data'
         */
        expect(data.status).toBe(200);
    }).catch((error)=>{
        console.log(error);
        expect(error.status).toBe(400);
    });
});

test('Update list', ()=>{
    expect.assertions(1);

    const body ={
        'name':'Library Test List',
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
    return mailChimp.list.updateList('list-id',body).then((data)=>{
        /**
         * The code below is a test code - You can do whatever you like with 'data'
         */
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(404);
    });
});

test('Delete a list',()=>{
   expect(mailChimp.list.deleteList('list-id')).toBeUndefined();
});