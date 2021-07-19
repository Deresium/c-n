"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SolutionFileDS_1 = __importDefault(require("./SolutionFileDS"));
class SolutionFileUpdateDS extends SolutionFileDS_1.default {
    constructor(solutionFileId, title, description, solutionFileCategoryId, pdfFile) {
        super(title, description, null, solutionFileCategoryId, pdfFile);
        this.solutionFileId = solutionFileId;
    }
    getSolutionFileId() {
        return this.solutionFileId;
    }
}
exports.default = SolutionFileUpdateDS;
//# sourceMappingURL=SolutionFileUpdateDS.js.map