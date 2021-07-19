"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const returnIndex_1 = __importDefault(require("./middlewares/returnIndex"));
const forceDownloadPDF_1 = __importDefault(require("./middlewares/forceDownloadPDF"));
//connect();
const app = express_1.default();
const publicDirectoryPath = path_1.default.join(__dirname, '../public');
app.use(forceDownloadPDF_1.default);
app.use(express_1.default.static(publicDirectoryPath));
app.use(returnIndex_1.default);
app.use(express_1.default.json());
exports.default = app;
//# sourceMappingURL=app.js.map