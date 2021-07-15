import UserEntity from "../entities/UserEntity";

export default interface IUserDataGateway{
    findUser(microsoftId: string): Promise<UserEntity>;
    createUser(microsoftId: string): Promise<UserEntity>;
}