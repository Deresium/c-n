"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let db;
exports.db = db;
const connect = () => {
    mongoose_1.default.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, replicaSet: 'rs' })
        .then((result) => {
        console.log('connection ok', result);
        exports.db = db = result;
    })
        .catch((error) => {
        console.log('connection failed', error);
    });
};
exports.connect = connect;
//# sourceMappingURL=mongodb.js.map