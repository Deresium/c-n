import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class SolutionFileEntity extends Model{
    private solutionFileId: number;
    private title: string;
    private description: string;
    private order: number;
    private solutionFileCategoryId: number;

    public getSolutionFileId(){
        return this.solutionFileId;
    }

    public getTitle(){
        return this.title;
    }

    public getDescription(){
        return this.description;
    }
}

SolutionFileEntity.init({
    solutionFileId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(1024),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(4000),
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    solutionFileCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'SolutionFiles',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});