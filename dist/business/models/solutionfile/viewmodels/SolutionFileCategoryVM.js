"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SolutionFileCategoryVM {
    constructor(solutionFileCategoryId, name) {
        this.solutionFileCategoryId = solutionFileCategoryId;
        this.name = name;
        this.solutionFiles = new Array();
    }
    addSolutionFile(solutionFile) {
        this.solutionFiles.push(solutionFile);
    }
}
exports.default = SolutionFileCategoryVM;
//# sourceMappingURL=SolutionFileCategoryVM.js.map