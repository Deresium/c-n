"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRouter_1 = __importDefault(require("./ApplicationRouter"));
const url_1 = __importDefault(require("url"));
class LoginRouter extends ApplicationRouter_1.default {
    constructor(loginRequester) {
        super();
        this.loginRequester = loginRequester;
    }
    initRoutes() {
        this.getRouter().get('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.redirect(url_1.default.format({
                pathname: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
                query: {
                    client_id: process.env.AZURE_APP_ID,
                    response_type: 'id_token',
                    scope: 'openid',
                    nonce: `cn_${new Date().getTime()}`
                }
            }));
        }));
        this.getRouter().post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.body.idToken;
            if (!token)
                res.status(400).send();
            const successLogin = yield this.loginRequester.login(token);
            if (successLogin)
                res.status(200).send();
            else
                res.status(401).send();
        }));
    }
}
exports.default = LoginRouter;
