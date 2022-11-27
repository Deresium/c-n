import {Model, DataTypes, Association} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";
import SolutionFileEntity from "./SolutionFileEntity";

export default class SolutionFileCategoryEntity extends Model{
    private solutionFileCategoryId: number;
    private name: string;
    private order: number;
    private solutionFiles: SolutionFileEntity[];

    public static associations: {
        solutionFiles: Association<SolutionFileCategoryEntity, SolutionFileEntity>;
    };

    public getSolutionFileCategoryId(){
        return this.solutionFileCategoryId;
    }

    public getName(){
        return this.name;
    }

    public getOrder(){
        return this.order;
    }

    public getSolutionFiles(){
        return this.solutionFiles;
    }
}

SolutionFileCategoryEntity.init({
    solutionFileCategoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'solutionfilecategories',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});

SolutionFileCategoryEntity.hasMany(SolutionFileEntity, {sourceKey: 'solutionFileCategoryId', foreignKey: 'solutionFileCategoryId', as: 'solutionFiles'});