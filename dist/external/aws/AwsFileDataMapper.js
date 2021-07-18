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
Object.defineProperty(exports, "__esModule", { value: true });
class AwsFileDataMapper {
    constructor(awsOperations) {
        this.awsOperations = awsOperations;
    }
    deleteIconSolutionCategory(solutionFileCategoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.awsOperations.deleteFile(`icons/${solutionFileCategoryId}`);
        });
    }
    deleteSolutionFile(solutionFileId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.awsOperations.deleteFile(`solution/${solutionFileId}`);
        });
    }
    getIconSolutionCategory(solutionFileCategoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.awsOperations.getFile(`icons/${solutionFileCategoryId}`);
        });
    }
    getSolutionFile(solutionFileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.awsOperations.getFile(`solution/${solutionFileId}`);
        });
    }
    postIconSolutionCategory(solutionFileCategoryId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.awsOperations.postFile(`icons/${solutionFileCategoryId}`, data);
        });
    }
    postSolutionFile(solutionFileId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.awsOperations.postFile(`solution/${solutionFileId}`, data);
        });
    }
}
exports.default = AwsFileDataMapper;
//# sourceMappingURL=AwsFileDataMapper.js.map