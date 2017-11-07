import MailchimpLists from '../src/MailchimpLists';
import MailChimp from '../src/index';

let list = new  MailchimpLists(new MailChimp('mayowa.tuodnu','some key'));

test('validate create method empty parameter ',() => {
    expect(()=>{
        list.create()
    }).toThrow('Body of list is required');
});

test('validate create method empty body parameter', () => {
   expect(()=>{
       list.create({name:'M',contact:'jd',permission_reminder:'jk',campaign_defaults:'ef'})
   }).toThrow(/Hey/)
});



