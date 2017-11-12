'use strict';
import verifyer from '../utils/Verifyer';

export default class MailchimpWebhooks{
    constructor(MailchimpClient){
        this.mailchimp = MailchimpClient;
    }
    
    createWebhook(listId, body){
        verifyer.verifyListId(listId);

        return this.mailchimp.call('POST',`/lists/${listId}/webhooks`,body);
    }

    batch(listId, webhookId, body){
        verifyer.verifyListId(listId);
        verifyer.verifyWebhookId(webhookId);

        return this.mailchimp.call('POST', `/lists/${listId}/webhooks/${webhookId}`, body);
    }

    readWebhooksInfo(listId, query = {}){
        verifyer.verifyListId(listId);

        return this.mailchimp.call('GET', `/list/${listId}/webhooks`, query);
    }

    readWebhookInfo(listId, webhookId, query ={}){
        verifyer.verifyListId(listId);
        verifyer.verifyWebhookId(webhookId);

        return this.mailchimp.call('GET', `/lists/${listId}/webhooks/${webhookId}`, query);
    }

    updateWebhook(listId, webhookId, body){
        verifyer.verifyListId(listId);
        verifyer.verifyWebhookId(webhookId);

        return this.mailchimp.call('PATCH',`/lists/${listId}/webhooks/${webhookId}`, body)
    }

    deleteWehook(listId, webhookId){
        verifyer.verifyListId(listId);
        verifyer.verifyWebhookId(webhookId);

        return this.mailchimp.call('DELETE',`/lists/${listId}/webhooks/${webhookId}`);
    }
}