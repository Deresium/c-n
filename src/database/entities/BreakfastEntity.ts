import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class BreakfastEntity extends Model {
    private breakfastId: number;
    private date: Date;
    private show: boolean;

    public getBreakfastId(){
        return this.breakfastId;
    }

    public getDate(){
        return this.date;
    }
}

BreakfastEntity.init({
    breakfastId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    show: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'breakfasts',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});