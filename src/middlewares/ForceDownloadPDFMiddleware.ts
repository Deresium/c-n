import ApplicationMiddleware from "./ApplicationMiddleware";
import {RequestHandler} from "express";

export default class ForceDownloadPDFMiddleware extends ApplicationMiddleware{
    constructor() {
        super();
    }

    defineMiddlewareFunction(): RequestHandler {
        return (req, res, next) => {
            if(req.query.download){
                res.attachment();
            }
            next();
        };
    }
}