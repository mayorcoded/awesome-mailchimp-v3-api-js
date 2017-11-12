import MailChimp from '../src/index';
/**
 * Remember to replace (email, api-key, campaign-id) with real values
 */

let mailChimp = new MailChimp('email','api-key');

test('Create Campaigns',()=>{
    expect.assertions(1);

    const body = {
        'type':'regular',
        'settings':{'subject_line':'Your library'},
        'title':'Library campaigns'
    };

    return mailChimp.campaigns.createCampaign(body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Read all campaign info', ()=>{
    expect.assertions(1);

    const query = {};
    return mailChimp.campaigns.readCampaignsInfo(query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Read single campaign info', ()=>{
    expect.assertions(1);

    const query = {};
    return mailChimp.campaigns.readCampaignInfo('campaign-id',query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Update campaign', ()=>{
    expect.assertions(1);

    const body = {
        'subject_line':'Update library',
        'from_name':'Mayowa',
        'reply_to':'mtudonu85@gmail.com'
    };
    return mailChimp.campaigns.updateCampaign('campaign-id',body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Delete Campaign', ()=>{
    expect(mailChimp.campaigns.deleteCampaign('campaign-id')).toBeUndefined();
});