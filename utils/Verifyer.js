'use strict';

export default class Verifyer{

    static verifyListId(id){
        if(!id)
            throw Error(`Hey, list id is required`);
    }

    static verifyMergeId(id){
        if(!id)
            throw Error(`Hey, merge id is required`);
    }

    static verifySegmentId(id){
        if(!id)
            throw Error(`Hey, segment id is required`);
    }

    static verifyCampaignId(id){
        if(!id)
            throw Error(`Hey, campaign id is required`);
    }

    static verifyWebhookId(id){
        if(!id)
            throw Error(`Hey, webhook id is required`);
    }

    static verifyBody(body){
        if(!body)
            throw Error('Body of list is required');
    }

    static verifySubscriberHash(subscriberHash){
        if(!subscriberHash)
            throw Error('Subscriber Hash is required');
    }

    static verifyRequiredFieldsInBody(body, requiredFields){
        Verifyer.verifyBody(body);
        requiredFields.forEach((field) =>{
            if(!body[field])
                throw Error(`Hey, you left something: ${field} is a required parameter for this operation.`)
        });
    }
}
