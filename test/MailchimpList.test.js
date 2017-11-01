const maichimplist = require('../src/MailchimpLists').default;

test('validate empty fields', () =>{
    expect(() =>{ maichimplist.requiredFieldIsComplete({})}).toThrow();
});

test('validate one field', () =>{
   expect( () => {
       maichimplist.requiredFieldIsComplete({name:'Mayowa'})
   }).toThrow();
});

test('validate two fields', ()=>{
   expect(()=>{
       maichimplist.requiredFieldIsComplete({name:'Mayowa',contact:'1'})
   }).toThrow();
});

test('validate three fields', ()=>{
   expect(()=>{
       maichimplist.requiredFieldIsComplete({name:'Mayowa',contact:'1',permission_reminder:'yes'})
   }).toThrow();
});

test('validate all fields', ()=>{
   expect(maichimplist.requiredFieldIsComplete({name:'Mayowa',contact:'1',permission_reminder:'yes',campaign_defaults:'yes'})).toBe(true);
});