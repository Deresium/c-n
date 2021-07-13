import ApplicationRouter from "./ApplicationRouter";
import axios from "axios";
import url from "url";
import ILoginRequester from "../business/requesters/ILoginRequester";

export default class LoginRouter extends ApplicationRouter{
    private readonly loginRequester: ILoginRequester;

    constructor(loginRequester: ILoginRequester) {
        super();
        this.loginRequester = loginRequester;
    }

    initRoutes(): void {
        this.getRouter().get('/login', async(req, res) => {
            res.redirect(url.format({
                pathname: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
                query: {
                    client_id: process.env.AZURE_APP_ID,
                    response_type: 'id_token',
                    scope: 'openid',
                    nonce: `cn_${new Date().getTime()}`
                }
            }))
        })

        this.getRouter().post('/login', async(req, res) => {
            const token = req.body.idToken;

            if(!token)
                res.status(400).send();

            const successLogin = await this.loginRequester.login(token);

            if(successLogin)
                res.status(200).send();
            else
                res.status(401).send();
        })
    }

}