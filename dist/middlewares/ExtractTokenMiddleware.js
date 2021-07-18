"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationMiddleware_1 = __importDefault(require("./ApplicationMiddleware"));
const cookie_1 = __importDefault(require("cookie"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Roles_1 = __importDefault(require("../enums/Roles"));
const CookiesGenerator_1 = __importDefault(require("../business/models/login/CookiesGenerator"));
const UserLoginVM_1 = __importDefault(require("../business/models/login/viewmodels/UserLoginVM"));
class ExtractTokenMiddleware extends ApplicationMiddleware_1.default {
    constructor() {
        super();
    }
    defineMiddlewareFunction() {
        return (req, res, next) => {
            const cookies = cookie_1.default.parse(req.headers.cookie || '');
            const sign = cookies.signature;
            const payload = cookies.payload;
            if (sign && payload) {
                const token = `${payload}.${sign}`;
                const decrypt = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                // @ts-ignore
                req.userRole = Roles_1.default[decrypt.role];
                req.userId = decrypt.userId;
                req.customerId = decrypt.customerId;
                const user = new UserLoginVM_1.default(req.userId, req.userRole);
                const cookieGenerator = new CookiesGenerator_1.default(user);
                res.setHeader('Set-Cookie', [cookieGenerator.getSignatureCookie(), cookieGenerator.getPayloadCookie()]);
            }
            next();
        };
    }
}
exports.default = ExtractTokenMiddleware;
//# sourceMappingURL=ExtractTokenMiddleware.js.map