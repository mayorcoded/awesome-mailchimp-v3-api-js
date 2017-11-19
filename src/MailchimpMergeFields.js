'use strict';
import verifyer from '../utils/Verifyer';
export default class MailchimpMergeFields{

    constructor(mailchimpClient){
        this.mailchimp = mailchimpClient;
    }

    addMergeFields(listId, body){
        verifyer.verifyListId(listId);
        verifyer.verifyRequiredFieldsInBody(body,['name', 'type']);
        return this.mailchimp.call('POST', `/lists/${listId}/merge-fields`, body);
    }

    readMergeFieldInfo(listId, mergeId, query = {}){
        verifyer.verifyListId(listId);
        verifyer.verifyMergeId(mergeId);

        return this.mailchimp.call('GET', `/lists/${listId}/merge-fields/${mergeId}`, query);
    }

    readMergeFieldsInfo(listId, query ={}){
        verifyer.verifyListId(listId);

        return this.mailchimp.call('GET', `/lists/${listId}/merge-fields`, query);
    }

    updateMergeField(listId, mergeId, body){
        verifyer.verifyListId(listId);
        verifyer.verifyMergeId(mergeId);

        return this.mailchimp.call('PATCH', `/lists/${listId}/merge-fields/${mergeId}`, body);
    }

    deleteMergeField(listId, mergeId){
        verifyer.verifyListId(listId);
        verifyer.verifyMergeId(mergeId);

        return this.mailchimp.call('DELETE', `/lists/${listId}/merge-fields/${mergeId}`);
    }
}