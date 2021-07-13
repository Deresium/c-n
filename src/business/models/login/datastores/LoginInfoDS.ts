export default class LoginInfoDS {
    private readonly token: string;
    private readonly microsoftId: string;

    constructor(token: string, microsoftId: string) {
        this.token = token;
        this.microsoftId = microsoftId;
    }

    public getToken(){
        return this.token
    }

    public getMicrosoftId(){
        return this.microsoftId;
    }
}