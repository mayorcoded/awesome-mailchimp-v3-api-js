'use strict';

export default class Environment{

    constructor(userName, apiKey) {
        this._userName = userName;
        this._apiKey = apiKey;
        this._version = Environment.defaults().VERSION;
        this._dataCenter = apiKey;
        this._endPoint = `${Environment.defaults().PROTOCOL}${this.datacenter}${Environment.defaults().DOMAIN}${Environment.defaults().VERSION}`;
    }

    static _checkUserName(userName) {
        if (!userName)
            throw Error("You gotta have a Username dawg.");
        return true;
    }

    static _checkApiKey(apiKey) {
        if (!apiKey)
            throw Error("Hey dawg, ApiKey is required.");
        return true;
    }

    set _userName(userName) {
        if (Environment._checkUserName(userName))
            this.userName = userName;
    }

    get username(){
        return this.userName;
    }

    set _apiKey(apiKey) {
        if (Environment._checkApiKey(apiKey))
            this.apiKey = apiKey;
    }

    get apikey(){
        return this.apiKey;
    }

    set _version(version) {
        this.ver = version;
    }

    get version(){
        return this.ver;
    }

    set _dataCenter(apiKey){
        if(Environment._checkApiKey(apiKey))
            this.dataCenter = apiKey.split('-')[1];
    }

    get datacenter(){
        return this.dataCenter;
    }

    set _endPoint(endpoint){
        this.endPoint = endpoint;
    }

    get endpoint(){
        return this.endPoint;
    }

    static defaults(){
        return { VERSION:'3', DOMAIN:'.api.mailchimp.com', PROTOCOL:'https://'}
    }
}
