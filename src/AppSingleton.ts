import express from "express";
import path from "path";
import AllowLocalhostMiddleware from "./middlewares/AllowLocahostMiddleware";
import RedirectHttpsMiddleware from "./middlewares/RedirectHttpsMiddleware";
import ForceDownloadPDFMiddleware from "./middlewares/ForceDownloadPDFMiddleware";
import ReturnIndexMiddleware from "./middlewares/ReturnIndexMiddleware";
import LoginRouter from "./routers/LoginRouter";
import LoginFacade from "./business/facades/LoginFacade";
import UserDataMapper from "./database/datamappers/UserDataMapper";
import ExtractTokenMiddleware from "./middlewares/ExtractTokenMiddleware";
import SolutionFileCategoryRouter from "./routers/SolutionFileCategoryRouter";
import SolutionFileFacade from "./business/facades/SolutionFileFacade";
import SolutionFilesDataMapper from "./database/datamappers/SolutionFilesDataMapper";
import PublicFilesRouter from "./routers/PublicFilesRouter";
import ContactRouter from "./routers/ContactRouter";
import ContactFacade from "./business/facades/ContactFacade";
import ContactDataMapper from "./database/datamappers/ContactDataMapper";
import AwsFileDataMapper from "./external/aws/files/AwsFileDataMapper";
import AwsOperations from "./external/aws/files/AwsOperations";
import SendMailSESDataMapper from "./external/aws/mail/SendMailSESDataMapper";
import GuestRouter from "./routers/GuestRouter";
import GuestFacade from "./business/facades/GuestFacade";
import GuestDataMapper from "./database/datamappers/GuestDataMapper";


export default class AppSingleton{
    private static instance: AppSingleton;
    private readonly expressApp;

    private constructor() {
        this.expressApp = express();
        this.initApp();
    }

    public static getInstance(): AppSingleton{
        if(!this.instance) {
            this.instance = new AppSingleton();
        }
        return this.instance;
    }

    public getExpressApp(){
        return this.expressApp;
    }

    private initApp(){
        const publicDirectoryPath = path.join(__dirname, '../public');
        this.expressApp.use(express.static(publicDirectoryPath));

        if(process.env.NODE_ENV === 'production') {
            this.expressApp.use(new RedirectHttpsMiddleware().getRequestHandler());
        }
        else {
            this.expressApp.use(new AllowLocalhostMiddleware().getRequestHandler());
        }

        this.expressApp.use(new PublicFilesRouter(new SolutionFileFacade(new AwsFileDataMapper(new AwsOperations()), new SolutionFilesDataMapper())).getRouter());

        this.expressApp.use(new ReturnIndexMiddleware().getRequestHandler());

        this.expressApp.use(express.json());

        this.expressApp.use(new ExtractTokenMiddleware().getRequestHandler());

        this.expressApp.use(new LoginRouter(new LoginFacade(new UserDataMapper())).getRouter());
        this.expressApp.use(new ContactRouter(new ContactFacade(new ContactDataMapper(), new SendMailSESDataMapper())).getRouter());
        this.expressApp.use(new SolutionFileCategoryRouter(new SolutionFileFacade(new AwsFileDataMapper(new AwsOperations()), new SolutionFilesDataMapper())).getRouter());
        this.expressApp.use('/api', new GuestRouter(new GuestFacade(new GuestDataMapper(), new SendMailSESDataMapper())).getRouter());
    }
}