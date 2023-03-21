import {RequestHandler} from "express";

const forceDownloadPDF: RequestHandler = (req, res, next) => {
    if(req.query.download){
        res.attachment();
    }
    next();
};

export default forceDownloadPDF;