import ApplicationMiddleware from "./ApplicationMiddleware";
import {RequestHandler} from "express";
import Roles from "../enums/Roles";

export default class OnlyAdminMiddleware extends ApplicationMiddleware{
    constructor() {
        super();
    }

    defineMiddlewareFunction(): RequestHandler {
        return (req, res, next) => {
            if(req.userRole === Roles.ADMIN) {
                next();
                return;
            }
            res.status(401).send('Accès refusé');
        }
    }

}