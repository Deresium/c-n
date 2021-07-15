"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const AllowLocahostMiddleware_1 = __importDefault(require("./middlewares/AllowLocahostMiddleware"));
const RedirectHttpsMiddleware_1 = __importDefault(require("./middlewares/RedirectHttpsMiddleware"));
const ForceDownloadPDFMiddleware_1 = __importDefault(require("./middlewares/ForceDownloadPDFMiddleware"));
const ReturnIndexMiddleware_1 = __importDefault(require("./middlewares/ReturnIndexMiddleware"));
const LoginRouter_1 = __importDefault(require("./routers/LoginRouter"));
const LoginFacade_1 = __importDefault(require("./business/facades/LoginFacade"));
const UserDataMapper_1 = __importDefault(require("./database/datamappers/UserDataMapper"));
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
        this.expressApp.use(new ForceDownloadPDFMiddleware_1.default().getRequestHandler());
        this.expressApp.use(new ReturnIndexMiddleware_1.default().getRequestHandler());
        this.expressApp.use(express_1.default.json());
        this.expressApp.use(new LoginRouter_1.default(new LoginFacade_1.default(new UserDataMapper_1.default())).getRouter());
    }
}
exports.default = AppSingleton;
//# sourceMappingURL=AppSingleton.js.map