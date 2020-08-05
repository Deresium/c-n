"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const redirectHttps_1 = __importDefault(require("./middlewares/redirectHttps"));
const mongodb_1 = require("./mongodb");
const returnIndex_1 = __importDefault(require("./middlewares/returnIndex"));
const CnRouter_1 = __importDefault(require("./routers/CnRouter"));
const allowLocalhost_1 = __importDefault(require("./middlewares/allowLocalhost"));
mongodb_1.connect();
const app = express_1.default();
const publicDirectoryPath = path_1.default.join(__dirname, '../public');
if (process.env.NODE_ENV === 'production') {
    app.use(redirectHttps_1.default);
}
else {
    app.use(allowLocalhost_1.default);
}
app.use(returnIndex_1.default);
app.use(express_1.default.json());
app.use(CnRouter_1.default);
app.use(express_1.default.static(publicDirectoryPath));
exports.default = app;
