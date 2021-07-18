"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class SolutionFileEntity extends sequelize_1.Model {
    getSolutionFileId() {
        return this.solutionFileId;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
}
exports.default = SolutionFileEntity;
SolutionFileEntity.init({
    solutionFileId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING(4000),
        allowNull: false
    },
    order: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    solutionFileCategoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'SolutionFiles',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=SolutionFileEntity.js.map