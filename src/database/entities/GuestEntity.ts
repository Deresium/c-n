import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class GuestEntity extends Model {
    private guestId: number;
    private email: string;
    private name: string;
    private firstName: string;
    private company: string;
    private ownerGuest: number;
    private breakfastId: number;

    public getGuestId(){
        return this.guestId;
    }
}

GuestEntity.init({
    guestId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(1024),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    company: {
        type: DataTypes.STRING(512)
    },
    ownerGuest: {
        type: DataTypes.INTEGER
    },
    breakfastId: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'guests',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});