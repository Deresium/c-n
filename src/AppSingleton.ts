import express from "express";
import path from "path";
import AllowLocalhostMiddleware from "./middlewares/AllowLocahostMiddleware";
import RedirectHttpsMiddleware from "./middlewares/RedirectHttpsMiddleware";
import ForceDownloadPDFMiddleware from "./middlewares/ForceDownloadPDFMiddleware";
import ReturnIndexMiddleware from "./middlewares/ReturnIndexMiddleware";
import LoginRouter from "./routers/LoginRouter";
import LoginFacade from "./business/facades/LoginFacade";


export default class AppSingleton{
    private static instance: AppSingleton;
    private readonly expressApp;

    private constructor() {
        this.expressApp = express();
        this.initApp();
    }

    public static getInstance(): AppSingleton{
        if(!this.instance)
            this.instance = new AppSingleton();
        return this.instance;
    }

    public getExpressApp(){
        return this.expressApp;
    }

    private initApp(){
        const publicDirectoryPath = path.join(__dirname, '../public');
        this.expressApp.use(express.static(publicDirectoryPath));

        if(process.env.NODE_ENV === 'production')
            this.expressApp.use(new RedirectHttpsMiddleware().getRequestHandler());
        else
            this.expressApp.use(new AllowLocalhostMiddleware().getRequestHandler());

        this.expressApp.use(new ForceDownloadPDFMiddleware().getRequestHandler());

        this.expressApp.use(new ReturnIndexMiddleware().getRequestHandler());

        this.expressApp.use(express.json());
        this.expressApp.use(new LoginRouter(new LoginFacade()).getRouter());

    }
}