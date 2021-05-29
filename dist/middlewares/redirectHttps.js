"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redirectHttps = (req, res, next) => {
    var _a;
    if ((_a = req.headers.host) === null || _a === void 0 ? void 0 : _a.includes('captiveportal.')) {
        next();
    }
    else if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.hostname}${req.url}`);
    else if (!req.hostname.startsWith('www.'))
        res.redirect(`https://www.${req.hostname}${req.url}`);
    else
        next();
};
exports.default = redirectHttps;
