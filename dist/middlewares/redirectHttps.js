"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redirectHttps = (req, res, next) => {
    var _a, _b;
    if (((_a = req.headers.accept) === null || _a === void 0 ? void 0 : _a.includes('text/html')) && ((_b = req.headers.host) === null || _b === void 0 ? void 0 : _b.includes('captiveportal'))) {
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
