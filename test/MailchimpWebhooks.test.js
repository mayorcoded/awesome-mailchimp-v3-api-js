import MailChimp from '../src/index';

/**
 * Remember to replace (email, api-key, list-id) with real values
 */

let mailChimp = new MailChimp('email','api-key');
const listId = 'list-id';

test('Create Webhook',()=>{
    expect.assertions(1);
    const body = {};
    return mailChimp.webhooks.createWebhook(listId,body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Webhook Batch Operations',()=>{
    expect.assertions(1);
    const body = {};
    return mailChimp.webhooks.batch(listId,'webhookId',body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Read Webhooks', ()=>{
    expect.assertions(1);
    const query = {};
    return mailChimp.webhooks.readWebhooksInfo(listId,query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Read Webhook', ()=>{
    expect.assertions(1);
    const query = {};
    return mailChimp.webhooks.readWebhookInfo(listId,'webhookId',query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Update Webhook', ()=>{
    expect.assertions(1);
    const body ={};
    return mailChimp.webhooks.updateWebhook(listId,'webhookId',body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    });
});

test('Delete Webhook', ()=>{
    expect.assertions(1);
    expect(mailChimp.webhooks.deleteWehook(listId,'webhookId')).toBeUndefined();
});