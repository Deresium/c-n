"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
const SolutionFileEntity_1 = __importDefault(require("./SolutionFileEntity"));
class SolutionFileCategoryEntity extends sequelize_1.Model {
    getSolutionFileCategoryId() {
        return this.solutionFileCategoryId;
    }
    getName() {
        return this.name;
    }
    getOrder() {
        return this.order;
    }
    getSolutionFiles() {
        return this.solutionFiles;
    }
}
exports.default = SolutionFileCategoryEntity;
SolutionFileCategoryEntity.init({
    solutionFileCategoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(256),
        allowNull: false
    },
    order: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'solutionfilecategories',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
SolutionFileCategoryEntity.hasMany(SolutionFileEntity_1.default, { sourceKey: 'solutionFileCategoryId', foreignKey: 'solutionFileCategoryId', as: 'solutionFiles' });
//# sourceMappingURL=SolutionFileCategoryEntity.js.map