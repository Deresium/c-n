import {RequestHandler} from "express";
import path from "path";

const returnIndex: RequestHandler = (req, res, next) => {
    console.log(req.headers.host);
    if(req.headers.accept?.includes('text/html') && req.headers.host?.includes('captiveportal')){
        const captivePortalFile = path.join(__dirname, '../../public/captiveportal.html');
        res.sendFile(captivePortalFile);
    }
    else if(req.headers.accept?.includes('text/html') && req.headers.host?.includes('portailcaptif')){
        const portailCaptifFile = path.join(__dirname, '../../public/portailcaptif.html');
        res.sendFile(portailCaptifFile);
    }
    else if(req.headers.accept?.includes('text/html') && req.headers.host?.startsWith('www.menu.')){
        const portailCaptifFile = path.join(__dirname, '../../public/menudiables.html');
        res.sendFile(portailCaptifFile);
    }
    else if(req.headers.accept?.includes('text/html') && !req.url.includes('solutionsfiles')){
        const publicDirectoryPath = path.join(__dirname, '../../public/c-n');
        res.sendFile(publicDirectoryPath + '/index.html');
    }else
        next();
}

export default returnIndex;