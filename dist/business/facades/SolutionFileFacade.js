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
const SolutionFileCategoryVM_1 = __importDefault(require("../models/solutionfile/viewmodels/SolutionFileCategoryVM"));
const SolutionFileVM_1 = __importDefault(require("../models/solutionfile/viewmodels/SolutionFileVM"));
const SolutionFileDS_1 = __importDefault(require("../models/solutionfile/datastores/SolutionFileDS"));
class SolutionFileFacade {
    constructor(fileDataGateway, solutionFileDataGateway) {
        this.fileDataGateway = fileDataGateway;
        this.solutionFileDataGateway = solutionFileDataGateway;
    }
    addSolutionFileCategory(solutionCategoryName, icon) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this.solutionFileDataGateway.getNextSolutionFileCategoryOrder();
            const solutionFileCategoryEntity = yield this.solutionFileDataGateway.addSolutionFileCategory(solutionCategoryName, order);
            yield this.fileDataGateway.postIconSolutionCategory(solutionFileCategoryEntity.getSolutionFileCategoryId(), icon);
        });
    }
    addSolutionFile(solutionFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this.solutionFileDataGateway.getNextSolutionFileOrder(solutionFile.getSolutionFileCategoryId());
            const solutionFileDS = new SolutionFileDS_1.default(solutionFile.getTitle(), solutionFile.getDescription(), order, solutionFile.getSolutionFileCategoryId(), solutionFile.getPdfFile());
            const solutionFileEntity = yield this.solutionFileDataGateway.addSolutionFile(solutionFileDS);
            yield this.fileDataGateway.postSolutionFile(solutionFileEntity.getSolutionFileId(), solutionFileDS.getPdfFile());
        });
    }
    getSolutionFileCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const solutionFileCategories = new Array();
            const solutionFilesCategoriesEntity = yield this.solutionFileDataGateway.getSolutionFilesCategories();
            for (const solutionFileCategoryEntity of solutionFilesCategoriesEntity) {
                const solutionFileCategoryVM = new SolutionFileCategoryVM_1.default(solutionFileCategoryEntity.getSolutionFileCategoryId(), solutionFileCategoryEntity.getName());
                solutionFileCategories.push(solutionFileCategoryVM);
                SolutionFileFacade.addSolutionFilesToCategory(solutionFileCategoryVM, solutionFileCategoryEntity.getSolutionFiles());
            }
            return solutionFileCategories;
        });
    }
    static addSolutionFilesToCategory(solutionFileCategory, solutionFiles) {
        for (const solutionFileEntity of solutionFiles) {
            const solutionFileVM = new SolutionFileVM_1.default(solutionFileEntity.getSolutionFileId(), solutionFileEntity.getTitle(), solutionFileEntity.getDescription());
            solutionFileCategory.addSolutionFile(solutionFileVM);
        }
    }
    getSolutionFileCategoryIcon(solutionFileCategoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fileDataGateway.getIconSolutionCategory(solutionFileCategoryId);
        });
    }
    deleteSolutionFileCategory(solutionFileCategoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.solutionFileDataGateway.deleteSolutionFileCategory(solutionFileCategoryId);
        });
    }
}
exports.default = SolutionFileFacade;
//# sourceMappingURL=SolutionFileFacade.js.map