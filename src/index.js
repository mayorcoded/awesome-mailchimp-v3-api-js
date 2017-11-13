import request from 'superagent';
import Environment from '../utils/Environment';
import MailchimpLists from './MailchimpLists';
import MailchimpCampaigns from  './MailchimpCampaigns';
import MailchimpMembers from './MailchimpMembers';
import MailchimpMergeFields from './MailchimpMergeFields';
import MailchimpSegments from './MailchimpSegments';
import MailchimpWebhooks from './MailchimpWebhooks';

export default class MailChimp {

    constructor(userName, apiKey) {
        this.env = new Environment(userName,apiKey);
        this.list = new MailchimpLists(this);
        this.campaigns = new MailchimpCampaigns(this);
        this.members = new MailchimpMembers(this);
        this.mergefields = new MailchimpMergeFields(this);
        this.segments = new MailchimpSegments(this);
        this.webhooks = new MailchimpWebhooks(this);
    }

    call(http, method, params){
        const req = request(http,`${this.env.endpoint}${method}`)
            .set('content-type', 'application/json')
            .auth(this.env.username, this.env.apikey);

        return MailChimp.makeRequest(http,params,req);
    }

    static makeRequest(http, params,request ){
        const requestType = {'POST': request.send(params), 'PATCH':request.send(params), 'GET':request.query(params)};
        return requestType[http]||request;
    }
}
