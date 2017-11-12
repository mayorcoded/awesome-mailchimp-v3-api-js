import MailchimpLists from '../src/MailchimpLists';
import MailChimp from '../src/index';

/**
 * Remember to replace (email, api-key, list-id) with real values
 */

let mailChimp = new MailChimp('something@somthing.com','babjdi');

test('read mailchimp list with valid list id',()=>{
    expect.assertions(1);

    return mailChimp.list.readListInfo('ccb8a60b4b',{}).then(data => {
        expect(data.status).toBe(200);
    });
});

test('read mailchimp list with invalid list id',()=>{
    expect.assertions(1);

    return mailChimp.list.readListInfo('invalid-id',{}).catch(error => {
        expect(error.status).toBe(404);
    });
});

test('create list',()=>{
    expect.assertions(1);

    return mailChimp.list.createList({'name':'Library Test List', 'contact':{'company':'Jumia'},"permission_reminder":"You signed the fuck up",
        "campaign_defaults":{"from_name":"Freddie","from_email":"freddie@freddiehats.com","subject":"","language":"en"},
        "email_type_option":true}).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    })
});