'use strict';
import verifyer from '../utils/Verifyer';

export default class MailchimpLists{

    constructor (mailchimpClient){
        this.mailchimp = mailchimpClient;
    }

    createList(body){
        verifyer.verifyBody(body);
        verifyer.verifyRequiredFieldsInBody(body,['name', 'contact', 'permission_reminder', 'campaign_defaults','email_type_option']);

        return this.mailchimp.call('POST','/lists',body);
    }

    readListsInfo(query){
        return this.mailchimp.call('GET', '/lists', query);
    }

    readListInfo(id, query={}){
        verifyer.verifyListId(id);
        return this.mailchimp.call('GET', `/lists/${id}`, query);
    }

    updateList(id, body){
        verifyer.verifyListId(id)
        return this.mailchimp.call('PATCH', `/lists/${id}`, body);
    }

    deleteList(id){
        return this.mailchimp.call('DELETE', `/lists/${id}`);
    }

    batchSubscribe(id, body) {
        verifyer.verifyListId(id);
        verifyer.verifyRequiredFieldsInBody(body,['members']);
        return this.mailchimp.call('POST', `/lists/${id}`, body);
    }
}
