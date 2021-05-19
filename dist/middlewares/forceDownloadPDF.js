"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forceDownloadPDF = (req, res, next) => {
    if (req.query.download) {
        res.attachment();
    }
    next();
};
exports.default = forceDownloadPDF;
