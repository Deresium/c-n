"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class GuestEntity extends sequelize_1.Model {
    getGuestId() {
        return this.guestId;
    }
}
exports.default = GuestEntity;
GuestEntity.init({
    guestId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING(512),
        allowNull: false
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING(512),
        allowNull: false
    },
    company: {
        type: sequelize_1.DataTypes.STRING(512)
    },
    ownerGuest: {
        type: sequelize_1.DataTypes.INTEGER
    },
    breakfastId: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: 'guests',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=GuestEntity.js.map