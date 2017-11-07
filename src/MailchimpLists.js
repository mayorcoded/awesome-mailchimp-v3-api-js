'use strict';
import verifyer from '../utils/Verifyer';

export default class MailchimpLists{

    constructor (mailchimpClient){
        this.mailchimp = mailchimpClient;
    }

    create(body){
        verifyer.verifyBody(body);
        verifyer.verifyRequiredFieldsInBody(body,['name', 'contact', 'permission_reminder', 'campaign_defaults']);

        return this.mailchimp.call('POST','/lists',body);
    }

    list(query){
        return this.mailchimp.call('GET', '/lists', query);
    }

    read(id, query){
        verifyer.verifyId(id);
        return this.mailchimp.call('GET', `/lists/${id}`, query);
    }

    update(id, body){
        verifyer.verifyId(id)
        return this.mailchimp.call('PATCH', `/lists/${id}`, body);
    }

    delete(id){
        return this.mailchimp.call('DELETE', `/lists/${id}`);
    }

    batch(id, body) {
        verifyer.verifyId(id);
        verifyer.verifyRequiredFieldsInBody(body,['members']);
        return this.mailchimp.call('POST', `/lists/${id}`, body);
    }
}
