"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AwsCredentialsSingleton_1 = __importDefault(require("./AwsCredentialsSingleton"));
class AwsOperations {
    getFile(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: fileName,
            };
            try {
                const response = yield AwsCredentialsSingleton_1.default.getInstance().getS3().getObject(params).promise();
                return response.Body;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    postFile(fileName, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: fileName,
                Body: data
            };
            try {
                yield AwsCredentialsSingleton_1.default.getInstance().getS3().putObject(params).promise();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    deleteFile(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: fileName,
            };
            try {
                yield AwsCredentialsSingleton_1.default.getInstance().getS3().deleteObject(params).promise();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.default = AwsOperations;
//# sourceMappingURL=AwsOperations.js.map