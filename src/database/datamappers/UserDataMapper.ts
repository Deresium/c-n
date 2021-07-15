import IUserDataGateway from "../datagateways/IUserDataGateway";
import UserEntity from "../entities/UserEntity";
import Roles from "../../enums/Roles";

export default class UserDataMapper implements IUserDataGateway{
    async createUser(microsoftId: string): Promise<UserEntity> {
        try{
            return await UserEntity.create({
                microsoftId,
                role: Roles.USER
            })
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async findUser(microsoftId: string): Promise<UserEntity> {
        const user = await UserEntity.findOne({where: {microsoftId}});
        if(user){
            return user;
        }
        return null;
    }


}