"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class AwsCredentialsSingleton {
    constructor() {
        const credentials = new aws_sdk_1.default.Credentials(process.env.AWS_KEY_ID, process.env.AWS_KEY_SECRET);
        this.s3 = new aws_sdk_1.default.S3({
            credentials: credentials
        });
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return new AwsCredentialsSingleton();
    }
    getS3() {
        return this.s3;
    }
}
exports.default = AwsCredentialsSingleton;
//# sourceMappingURL=AwsCredentialsSingleton.js.map