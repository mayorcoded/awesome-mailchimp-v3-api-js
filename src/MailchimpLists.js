'use strict';

class MailchimLists{
    /*
    constructor (mailchimpConfig){
        this.mailchimp = mailchimpConfig;
    }*/

    create(body){
        if(this.requiredFieldIsComplete(body))
            return this.mailchimp.call();
    }

    requiredFieldIsComplete(body){
        const requiredFields = ['name', 'contact', 'permission_reminder', 'campaign_defaults'];
        requiredFields.forEach((field) =>{
            if(!body[field])
                throw Error(`Hey, you left something: ${field} is a required parameter for this operation.`)
        });

        return true;
    }
}


exports.default = new MailchimLists();