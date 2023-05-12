"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class BreakfastEntity extends sequelize_1.Model {
    getBreakfastId() {
        return this.breakfastId;
    }
    getDate() {
        return this.date;
    }
}
exports.default = BreakfastEntity;
BreakfastEntity.init({
    breakfastId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    show: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'breakfasts',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=BreakfastEntity.js.map