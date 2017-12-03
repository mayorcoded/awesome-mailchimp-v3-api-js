import MailChimp from '../src/index';

/**
 * Remember to replace (email, api-key, list-id) with real values
 */

let mailChimp = new MailChimp('email','api-key');
const listId = 'list-id';
test('Create Segment',()=>{
    expect.assertions(1);

    const body = {name:'Solomon Grundy'};
    return mailChimp.segments.createSegment(listId,body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Batch Segment Operations', ()=>{
    expect.assertions(1);

    const body = {};
    return mailChimp.segments.batch(listId,'segment-id',body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Read Segment Info', ()=>{
    expect.assertions(1);

    const query = {};
    return mailChimp.segments.readSegmentInfo(listId,'segment-id',query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Read Segments Info', ()=>{
    expect.assertions(1);

    const query = {};
    return mailChimp.segments.readSegmentsInfo(listId,query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Update Segment',()=>{
    expect.assertions(1);

    const body ={};
    return mailChimp.segments.updateSegment(listId,'segment-id',body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Delete Segment',()=>{
    expect.assertions(1);
    expect(mailChimp.segments.deleteSegment(listId,'segment-id')).toBeUndefined();
})