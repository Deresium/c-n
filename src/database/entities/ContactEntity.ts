import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class ContactEntity extends Model{
    private contactId: number;
    private name: string;
    private firstName: string;
    private email: string;
    private company: string;
    private request: string;
}

ContactEntity.init({
    contactId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(256),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(1024),
        allowNull: false,
    },
    company: {
        type: DataTypes.STRING(256),
        allowNull: true,
    },
    request: {
        type: DataTypes.STRING(4000),
        allowNull: false,
    }
},{
    tableName: 'Contacts',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});