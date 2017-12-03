'use strict';
import verifyer from '../utils/Verifyer';

 export default class MailchimpSegments{

    constructor(MailchimpClient){
        this.mailchimp = MailchimpClient;
    }

    createSegment(listId, body){
        verifyer.verifyListId(listId);
        verifyer.verifyRequiredFieldsInBody(body,['name']);

        return this.mailchimp.call('POST', `/lists/${listId}/segments`, body);
    }

    batch(listId, segmentId, body){
        verifyer.verifyListId(listId);
        verifyer.verifySegmentId(segmentId);

        return this.mailchimp.call('POST', `/lists/${listId}/segments/${segmentId}`, body);
    }

    readSegmentsInfo(listId, query = {}){
        verifyer.verifyListId(listId);

        return this.mailchimp.call('GET', `/lists/${listId}/segments`, query);
    }

    readSegmentInfo(listId, segmentId, query = {}){
        verifyer.verifyListId(listId);
        verifyer.verifySegmentId(segmentId);

        return this.mailchimp.call('GET', `/list/${listId}/segments/${segmentId}`, query);
    }

    updateSegment(listId, segmentId, body){
        verifyer.verifyListId(listId);
        verifyer.verifySegmentId(segmentId);

        return this.mailchimp.call('PATCH', `/list/${listId}/segment/${segmentId}`, body);
    }

    deleteSegment(listId, segmentId){
        verifyer.verifyListId(listId);
        verifyer.verifySegmentId(segmentId);

        return this.mailchimp.call('DELETE',`/list/${listId}/segment/${segmentId}`);
    }
}