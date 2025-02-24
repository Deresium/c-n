"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationMiddleware_1 = __importDefault(require("./ApplicationMiddleware"));
const path_1 = __importDefault(require("path"));
class ReturnIndexMiddleware extends ApplicationMiddleware_1.default {
    constructor() {
        super();
    }
    defineMiddlewareFunction() {
        return (req, res, next) => {
            var _a, _b, _c, _d, _e;
            if (((_a = req.headers.accept) === null || _a === void 0 ? void 0 : _a.includes('text/html')) && ((_b = req.headers.host) === null || _b === void 0 ? void 0 : _b.includes('captiveportal'))) {
                const captivePortalFile = path_1.default.join(__dirname, '../../public/captiveportal.html');
                res.sendFile(captivePortalFile);
            }
            else if (((_c = req.headers.accept) === null || _c === void 0 ? void 0 : _c.includes('text/html')) && ((_d = req.headers.host) === null || _d === void 0 ? void 0 : _d.includes('portailcaptif'))) {
                const portailCaptifFile = path_1.default.join(__dirname, '../../public/portailcaptif.html');
                res.sendFile(portailCaptifFile);
            }
            else if (((_e = req.headers.accept) === null || _e === void 0 ? void 0 : _e.includes('text/html')) && !req.url.includes('solutionsfiles')) {
                const publicDirectoryPath = path_1.default.join(__dirname, '../../public/c-n');
                res.sendFile(publicDirectoryPath + '/index.html');
            }
            else {
                next();
            }
        };
    }
}
exports.default = ReturnIndexMiddleware;
//# sourceMappingURL=ReturnIndexMiddleware.js.map