import MailChimp from '../src/index';

/**
 * Remember to replace (email, api-key, list-id) with real values
 */

let mailChimp = new MailChimp('mayowa.tudonu@jumia.com','cb4d52d554a35f1fe92cbeeebc6b010e-us1');

test('Add Merge Fields',()=>{
    expect.assertions(1);

    const body = {
        name: 'Merge field name',
        type: 'merge field type'
    };

    return mailChimp.mergefields.addMergeFields('9c83c1d8ca',body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Read Merge field info',()=>{
    expect.assertions(1);

    const query = {};
    return mailChimp.mergefields.readMergeFieldInfo('9c83c1d8ca','2',query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(404);
    });
});

test('Read merge field info', ()=>{
    expect.assertions(1);

    const query = {};
    return mailChimp.mergefields.readMergeFieldsInfo('9c83c1d8ca',query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(404);
    });
});

test('update merge fields',()=>{
    expect.assertions(1);

    const body = {name:'Older'};
    return mailChimp.mergefields.updateMergeField('9c83c1d8ca',2,body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(404);
    });
});

test('Delete Merge field',()=>{
    expect(mailChimp.mergefields.deleteMergeField('9c83c1d8ca',1)).toBeUndefined();
});