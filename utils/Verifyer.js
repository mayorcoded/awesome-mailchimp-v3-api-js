'use strict';

export default class Verifyer{

    static verifyId(id){
        if(!id)
            throw Error('Hey, list ID is required');
    }

    static verifyBody(body){
        if(!body)
            throw Error('Body of list is required');
    }

    static verifyRequiredFieldsInBody(body, requiredFields){
        requiredFields.forEach((field) =>{
            if(!body[field])
                throw Error(`Hey, you left something: ${field} is a required parameter for this operation.`)
        });
    }
}
