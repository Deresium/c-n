"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationMiddleware_1 = __importDefault(require("./ApplicationMiddleware"));
class ForceDownloadPDFMiddleware extends ApplicationMiddleware_1.default {
    constructor() {
        super();
    }
    defineMiddlewareFunction() {
        return (req, res, next) => {
            if (req.query.download) {
                res.attachment();
            }
            next();
        };
    }
}
exports.default = ForceDownloadPDFMiddleware;
//# sourceMappingURL=ForceDownloadPDFMiddleware.js.map