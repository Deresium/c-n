"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const returnIndex = (req, res, next) => {
    var _a, _b, _c;
    if (((_a = req.headers.accept) === null || _a === void 0 ? void 0 : _a.includes('text/html')) && ((_b = req.headers.host) === null || _b === void 0 ? void 0 : _b.includes('captiveportal'))) {
        const captivePortalFile = path_1.default.join(__dirname, '../../public/captiveportal.html');
        res.sendFile(captivePortalFile);
    }
    else if (((_c = req.headers.accept) === null || _c === void 0 ? void 0 : _c.includes('text/html')) && !req.url.includes('solutionsfiles')) {
        const publicDirectoryPath = path_1.default.join(__dirname, '../../public/c-n');
        res.sendFile(publicDirectoryPath + '/index.html');
    }
    else
        next();
};
exports.default = returnIndex;
