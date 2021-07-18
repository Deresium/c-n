"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SolutionFileDS {
    constructor(title, description, order, solutionFileCategoryId, pdfFile) {
        this.title = title;
        this.description = description;
        this.order = order;
        this.solutionFileCategoryId = solutionFileCategoryId;
        this.pdfFile = pdfFile;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getOrder() {
        return this.order;
    }
    getSolutionFileCategoryId() {
        return this.solutionFileCategoryId;
    }
    getPdfFile() {
        return this.pdfFile;
    }
}
exports.default = SolutionFileDS;
//# sourceMappingURL=SolutionFileDS.js.map