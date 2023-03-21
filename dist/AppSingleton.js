"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const AllowLocahostMiddleware_1 = __importDefault(require("./middlewares/AllowLocahostMiddleware"));
const RedirectHttpsMiddleware_1 = __importDefault(require("./middlewares/RedirectHttpsMiddleware"));
const ReturnIndexMiddleware_1 = __importDefault(require("./middlewares/ReturnIndexMiddleware"));
const LoginRouter_1 = __importDefault(require("./routers/LoginRouter"));
const LoginFacade_1 = __importDefault(require("./business/facades/LoginFacade"));
const UserDataMapper_1 = __importDefault(require("./database/datamappers/UserDataMapper"));
const ExtractTokenMiddleware_1 = __importDefault(require("./middlewares/ExtractTokenMiddleware"));
const SolutionFileCategoryRouter_1 = __importDefault(require("./routers/SolutionFileCategoryRouter"));
const SolutionFileFacade_1 = __importDefault(require("./business/facades/SolutionFileFacade"));
const SolutionFilesDataMapper_1 = __importDefault(require("./database/datamappers/SolutionFilesDataMapper"));
const PublicFilesRouter_1 = __importDefault(require("./routers/PublicFilesRouter"));
const ContactRouter_1 = __importDefault(require("./routers/ContactRouter"));
const ContactFacade_1 = __importDefault(require("./business/facades/ContactFacade"));
const ContactDataMapper_1 = __importDefault(require("./database/datamappers/ContactDataMapper"));
const AwsFileDataMapper_1 = __importDefault(require("./external/aws/files/AwsFileDataMapper"));
const AwsOperations_1 = __importDefault(require("./external/aws/files/AwsOperations"));
const SendMailSESDataMapper_1 = __importDefault(require("./external/aws/mail/SendMailSESDataMapper"));
const GuestRouter_1 = __importDefault(require("./routers/GuestRouter"));
const GuestFacade_1 = __importDefault(require("./business/facades/GuestFacade"));
const GuestDataMapper_1 = __importDefault(require("./database/datamappers/GuestDataMapper"));
class AppSingleton {
    constructor() {
        this.expressApp = express_1.default();
        this.initApp();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new AppSingleton();
        }
        return this.instance;
    }
    getExpressApp() {
        return this.expressApp;
    }
    initApp() {
        const publicDirectoryPath = path_1.default.join(__dirname, '../public');
        this.expressApp.use(express_1.default.static(publicDirectoryPath));
        if (process.env.NODE_ENV === 'production') {
            this.expressApp.use(new RedirectHttpsMiddleware_1.default().getRequestHandler());
        }
        else {
            this.expressApp.use(new AllowLocahostMiddleware_1.default().getRequestHandler());
        }
        this.expressApp.use(new PublicFilesRouter_1.default(new SolutionFileFacade_1.default(new AwsFileDataMapper_1.default(new AwsOperations_1.default()), new SolutionFilesDataMapper_1.default())).getRouter());
        this.expressApp.use(new ReturnIndexMiddleware_1.default().getRequestHandler());
        this.expressApp.use(express_1.default.json());
        this.expressApp.use(new ExtractTokenMiddleware_1.default().getRequestHandler());
        this.expressApp.use(new LoginRouter_1.default(new LoginFacade_1.default(new UserDataMapper_1.default())).getRouter());
        this.expressApp.use(new ContactRouter_1.default(new ContactFacade_1.default(new ContactDataMapper_1.default(), new SendMailSESDataMapper_1.default())).getRouter());
        this.expressApp.use(new SolutionFileCategoryRouter_1.default(new SolutionFileFacade_1.default(new AwsFileDataMapper_1.default(new AwsOperations_1.default()), new SolutionFilesDataMapper_1.default())).getRouter());
        this.expressApp.use('/api', new GuestRouter_1.default(new GuestFacade_1.default(new GuestDataMapper_1.default(), new SendMailSESDataMapper_1.default())).getRouter());
    }
}
exports.default = AppSingleton;
//# sourceMappingURL=AppSingleton.js.map