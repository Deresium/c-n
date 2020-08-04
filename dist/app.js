"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const publicDirectoryPath = path_1.default.join(__dirname, '../public');
// redirect https if production
// returnIndex
app.use(express_1.default.json());
// routers
app.use(express_1.default.static(publicDirectoryPath));
exports.default = app;
