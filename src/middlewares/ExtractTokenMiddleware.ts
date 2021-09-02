import ApplicationMiddleware from "./ApplicationMiddleware";
import {RequestHandler} from "express";
import cookie from "cookie";
import jwt from "jsonwebtoken"
import Roles from "../enums/Roles";
import CookiesGenerator from "../business/models/login/CookiesGenerator";
import UserLoginVM from "../business/models/login/viewmodels/UserLoginVM";

export default class ExtractTokenMiddleware extends ApplicationMiddleware{
    constructor() {
        super();
    }


    defineMiddlewareFunction(): RequestHandler {
        return (req, res, next) => {
            const cookies = cookie.parse(req.headers.cookie || '');
            const sign = cookies.signature;
            const payload = cookies.payload;
            if(sign && payload) {
                const token = `${payload}.${sign}`;
                const decrypt = <any>jwt.verify(token, process.env.JWT_SECRET);
                // @ts-ignore
                req.userRole = Roles[decrypt.role];
                req.userId = decrypt.userId;
                const user = new UserLoginVM(req.userId, req.userRole);
                const cookieGenerator = new CookiesGenerator(user);
                res.setHeader('Set-Cookie', [cookieGenerator.getSignatureCookie(), cookieGenerator.getPayloadCookie()]);
            }
            next();
        }
    }

}