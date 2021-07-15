import ApplicationRouter from "./ApplicationRouter";
import ILoginRequester from "../business/requesters/ILoginRequester";
import CookiesGenerator from "../business/models/login/CookiesGenerator";

export default class LoginRouter extends ApplicationRouter {
    private readonly loginRequester: ILoginRequester;

    constructor(loginRequester: ILoginRequester) {
        super();
        this.loginRequester = loginRequester;
    }

    initRoutes(): void {
        this.getRouter().post('/login', async (req, res) => {
            const token = req.body.idToken;

            if (!token) {
                res.status(400).send();
            }

            const userVM = await this.loginRequester.login(token);

            if(!userVM){
                res.status(401).send();
            }

            const cookieGenerator = new CookiesGenerator(userVM);
            res.setHeader('Set-Cookie', [cookieGenerator.getSignatureCookie(), cookieGenerator.getPayloadCookie()]);
            res.status(200).send();
        });

        this.getRouter().post('/logout', async(req, res) => {
            const cookieGenerator = new CookiesGenerator(null);
            res.setHeader('Set-Cookie', [cookieGenerator.getSignatureCookie(), cookieGenerator.getPayloadCookie()]);
            res.status(200).send();
        })
    }
}