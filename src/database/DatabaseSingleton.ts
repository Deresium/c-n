import {Sequelize} from "sequelize";

export default class DatabaseSingleton{
    private static instance: DatabaseSingleton
    private readonly sequelize: Sequelize
    private constructor() {
        let dialectOptions = {};
        if(process.env.NODE_ENV === 'production'){
            dialectOptions = {
                ssl: {
                    rejectUnauthorized: false
                }
            }
        }
        this.sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialectOptions
        })
    }

    public static getInstance(): DatabaseSingleton{
        if(!this.instance)
            this.instance = new DatabaseSingleton();
        return this.instance;
    }

    getSequelize(){
        return this.sequelize;
    }

    async connect(){
        console.log('try to connect...');
        try {
            await this.sequelize.authenticate();
            console.log(`sequelize connexion ok to ${this.sequelize.getDatabaseName()}`);
        }catch(error){
            console.log('sequelize connexion failed');
        }
    }

    async disconnect(){
        try{
            await this.sequelize.close();
            console.log('disconnected');
        }catch(error){
            console.log('error during disconnect');
        }
    }
}