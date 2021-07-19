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
const SolutionFileEntity_1 = __importDefault(require("../entities/SolutionFileEntity"));
const SolutionFileCategoryEntity_1 = __importDefault(require("../entities/SolutionFileCategoryEntity"));
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class SolutionFilesDataMapper {
    updateSolutionFile(solutionFileUpdateDS) {
        return __awaiter(this, void 0, void 0, function* () {
            yield SolutionFileEntity_1.default.update({
                title: solutionFileUpdateDS.getTitle(),
                description: solutionFileUpdateDS.getDescription()
            }, {
                where: {
                    solutionFileId: solutionFileUpdateDS.getSolutionFileId()
                }
            });
        });
    }
    updateSolutionFileCategory(solutionFileCategoryId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield SolutionFileCategoryEntity_1.default.update({
                name
            }, {
                where: {
                    solutionFileCategoryId
                }
            });
        });
    }
    getNextSolutionFileCategoryOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const solutionFileCategoryCount = yield SolutionFileCategoryEntity_1.default.count();
            return solutionFileCategoryCount + 1;
        });
    }
    getNextSolutionFileOrder(solutionFileCategoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const solutionFileCount = yield SolutionFileEntity_1.default.count({
                where: {
                    solutionFileCategoryId
                }
            });
            return solutionFileCount + 1;
        });
    }
    addSolutionFileCategory(name, order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SolutionFileCategoryEntity_1.default.create({
                name,
                order
            });
        });
    }
    addSolutionFile(solutionFile) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SolutionFileEntity_1.default.create({
                title: solutionFile.getTitle(),
                description: solutionFile.getDescription(),
                order: solutionFile.getOrder(),
                solutionFileCategoryId: solutionFile.getSolutionFileCategoryId()
            });
        });
    }
    getSolutionFilesCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SolutionFileCategoryEntity_1.default.findAll({
                include: [{ association: SolutionFileCategoryEntity_1.default.associations.solutionFiles, required: false }],
                order: [['order', 'ASC'], [SolutionFileCategoryEntity_1.default.associations.solutionFiles, 'order', 'ASC']]
            });
        });
    }
    static decreaseSolutionFileCategoryOrderByOne(solutionFileCategoryId, t) {
        return __awaiter(this, void 0, void 0, function* () {
            yield SolutionFileCategoryEntity_1.default.increment({ order: -1 }, { where: { solutionFileCategoryId }, transaction: t });
        });
    }
    static getSolutionFileCategoriesWithHigherOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SolutionFileCategoryEntity_1.default.findAll({
                where: {
                    order: {
                        [sequelize_1.Op.gt]: order
                    }
                }
            });
        });
    }
    deleteSolutionFileCategory(solutionFileCategoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DatabaseSingleton_1.default.getInstance().getSequelize().transaction((t) => __awaiter(this, void 0, void 0, function* () {
                const destroyedSolutionFileCategory = yield SolutionFileCategoryEntity_1.default.findByPk(solutionFileCategoryId, { attributes: ['order'] });
                yield SolutionFileCategoryEntity_1.default.destroy({
                    where: {
                        solutionFileCategoryId
                    },
                    cascade: true,
                    transaction: t,
                });
                const solutionFileCategories = yield SolutionFilesDataMapper.getSolutionFileCategoriesWithHigherOrder(destroyedSolutionFileCategory.getOrder());
                for (const solutionFileCategory of solutionFileCategories) {
                    yield SolutionFilesDataMapper.decreaseSolutionFileCategoryOrderByOne(solutionFileCategory.getSolutionFileCategoryId(), t);
                }
            }));
        });
    }
    static getSolutionFilesWithHigherOrder(solutionFileCategoryId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SolutionFileEntity_1.default.findAll({
                where: {
                    solutionFileCategoryId,
                    order: {
                        [sequelize_1.Op.gt]: order
                    }
                }
            });
        });
    }
    static decreaseSolutionFileOrderByOne(solutionFileId, t) {
        return __awaiter(this, void 0, void 0, function* () {
            yield SolutionFileEntity_1.default.increment({ order: -1 }, { where: { solutionFileId }, transaction: t });
        });
    }
    deleteSolutionFile(solutionFileId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DatabaseSingleton_1.default.getInstance().getSequelize().transaction((t) => __awaiter(this, void 0, void 0, function* () {
                const destroyedFileSolution = yield SolutionFileEntity_1.default.findByPk(solutionFileId);
                yield SolutionFileEntity_1.default.destroy({
                    where: {
                        solutionFileId
                    },
                    transaction: t
                });
                const solutionFiles = yield SolutionFilesDataMapper.getSolutionFilesWithHigherOrder(destroyedFileSolution.getSolutionFileCategoryId(), destroyedFileSolution.getOrder());
                for (const solutionFile of solutionFiles) {
                    yield SolutionFilesDataMapper.decreaseSolutionFileOrderByOne(solutionFile.getSolutionFileId(), t);
                }
            }));
        });
    }
    reorderSolutionFileCategories(solutionFileCategoryIds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DatabaseSingleton_1.default.getInstance().getSequelize().transaction((t) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < solutionFileCategoryIds.length; ++i) {
                    yield SolutionFileCategoryEntity_1.default.update({
                        order: i + 1
                    }, {
                        where: {
                            solutionFileCategoryId: solutionFileCategoryIds[i]
                        },
                        transaction: t
                    });
                }
            }));
        });
    }
    reorderSolutionFiles(solutionFileIds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DatabaseSingleton_1.default.getInstance().getSequelize().transaction((t) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < solutionFileIds.length; ++i) {
                    yield SolutionFileEntity_1.default.update({
                        order: i + 1
                    }, {
                        where: {
                            solutionFileId: solutionFileIds[i]
                        },
                        transaction: t
                    });
                }
            }));
        });
    }
}
exports.default = SolutionFilesDataMapper;
//# sourceMappingURL=SolutionFilesDataMapper.js.map