import MailChimp from '../src/index';

/**
 * Remember to replace (email, api-key, list-id) with real values
 */

let mailChimp = new MailChimp('email','api-key');

test('Add Merge Fields',()=>{
    expect.assertions(1);

    const body = {
        name: 'Merge field name',
        type: 'merge field type'
    };

    return mailChimp.mergefields.addMergeFields('list-id',body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Read Merge field info',()=>{
    expect.assertions(1);

    const query = {};
    return mailChimp.mergefields.readMergeFieldInfo('list-id','merge-id',query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(404);
    });
});

test('Read merge field info', ()=>{
    expect.assertions(1);

    const query = {};
    return mailChimp.mergefields.readMergeFieldsInfo('list-id',query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(404);
    });
});

test('update merge fields',()=>{
    expect.assertions(1);

    const body = {name:'Older'};
    return mailChimp.mergefields.updateMergeField('list-id','merge-id',body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(404);
    });
});

test('Delete Merge field',()=>{
    expect(mailChimp.mergefields.deleteMergeField('list-id','merge-id')).toBeUndefined();
});