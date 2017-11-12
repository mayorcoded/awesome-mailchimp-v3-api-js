'use strict';
import verifyer from '../utils/Verifyer';
export default class MailchimpCampaigns{
    constructor(MailchimpClient){
        this.mailchimp = MailchimpClient;
    }

    createCampaign(body){
        verifyer.verifyRequiredFieldsInBody(body,['type', 'settings']);

        return this.mailchimp.call('POST', `/campaigns`, body);
    }

    readCampaignsInfo(query){
        return this.mailchimp.call('GET', '/campaigns', query);
    }

    readCampaignInfo(campaignId, query){
        verifyer.verifyCampaignId(campaignId);

        return this.mailchimp.call('GET', `/campaigns/${campaignId}`, query);
    }

    updateCampaign(campaignId, body){
        verifyer.verifyCampaignId(campaignId);

        return this.mailchimp.call('PATCH', `/campaigns/${campaignId}`,body);
    }

    deleteCampaign(campaignId){
        verifyer.verifyCampaignId(campaignId);

        return this.mailchimp.call('DELETE', `/campaigns/${campaignId}`);
    }
}