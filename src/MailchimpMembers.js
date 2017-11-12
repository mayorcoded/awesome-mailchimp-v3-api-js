'use strict';
import verifyer from '../utils/Verifyer';

export default class MailchimpMembers{

    constructor(mailchimpClient){
        this.mailchimp = mailchimpClient();
    }

    addMembers(listId , body){
        verifyer.verifyListId(listId);
        verifyer.verifyRequiredFieldsInBody(body, ['email', 'status']);

        return this.mailchimp.call('POST',`/lists/${listId}/members`,body);
    }

    readMembersInfo(listId, query ={}){
        verifyer.verifyListId(listId);

        return this.mailchimp.call('GET', `/lists/${listId}/members`, query);
    }

    readMemberInfo(listId, subscriberHash, query = {}){
        verifyer.verifyListId(listId);
        verifyer.verifySubscriberHash(subscriberHash);

        return this.mailchimp.call('GET', `/lists/${listId}/members/${subscriberHash}`, query);
    }

    updateMemberInfo(listId, subscriberHash, body ){
        verifyer.verifyListId(listId);
        verifyer.verifySubscriberHash(subscriberHash);

        return this.mailchimp.call('PATCH',`/lists/${listId}/members/${subscriberHash}`, body);
    }

    deleteMember(listId, subscriberHash){
        verifyer.verifyListId(listId);
        verifyer.verifySubscriberHash(subscriberHash);

        return this.mailchimp.call('DELETE',`/lists/${listId}/members/${subscriberHash}`);
    }
}