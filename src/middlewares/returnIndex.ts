import {RequestHandler} from "express";
import path from "path";

const returnIndex: RequestHandler = (req, res, next) => {
    if(req.headers.accept?.includes('text/html') && req.headers.host?.includes('captiveportal')){
        const captivePortalFile = path.join(__dirname, '../../public/captiveportal.html');
        res.sendFile(captivePortalFile);
    }
    else if(req.headers.accept?.includes('text/html') && !req.url.includes('solutionsfiles')){
        const publicDirectoryPath = path.join(__dirname, '../../public/c-n');
        res.sendFile(publicDirectoryPath + '/index.html');
    }else
        next();
}

export default returnIndex;