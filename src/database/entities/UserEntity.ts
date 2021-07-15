import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";
import Roles from "../../enums/Roles";

export default class UserEntity extends Model{
    private userId: number;
    private name: string;
    private email: string;
    private microsoftId: string;
    private role: Roles;

    public getUserId(){
        return this.userId
    }

    public getEmail(){
        return this.email;
    }

    public getRole(){
        return this.role;
    }
}

UserEntity.init({
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    microsoftId: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    role: {
        type: DataTypes.STRING(256),
        allowNull: true
    }
},{
    tableName: 'Users',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});