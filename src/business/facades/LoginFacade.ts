import ILoginRequester from "../requesters/ILoginRequester";
import jwt from "jsonwebtoken"
import MicrosoftPublicKey from "../models/login/MicrosoftPublicKey";
import IUserDataGateway from "../../database/datagateways/IUserDataGateway";
import UserLoginVM from "../models/login/viewmodels/UserLoginVM";

export default class LoginFacade implements ILoginRequester{
    private userDataGateway: IUserDataGateway;

    constructor(userDataGateway: IUserDataGateway) {
        this.userDataGateway = userDataGateway;
    }

    async login(token: string): Promise<UserLoginVM> {
        if(!token) {
            return null;
        }

        const publicKey = await LoginFacade.getPublicKey(token);
        if(!publicKey){
            return null;
        }

        let microsoftId = null;
        try {
            const verifiedToken = jwt.verify(token, publicKey);
            microsoftId = verifiedToken.sub;
            if(!microsoftId) {
                return null;
            }
        }catch(error){
            return null;
        }

        return await this.findOrCreateUser(microsoftId);
    }

    private static async getPublicKey(token: string): Promise<string | null>{
        const decodeToken = jwt.decode(token, {complete: true});

        if(!decodeToken || !decodeToken.header || !decodeToken.header.kid) {
            return null;
        }

        const kid = decodeToken.header.kid;
        const microsoftPublicKey = new MicrosoftPublicKey();
        return await microsoftPublicKey.getPublicKey(kid);
    }

    private async findOrCreateUser(microsoftId: string): Promise<UserLoginVM>{
        let user = await this.userDataGateway.findUser(microsoftId);
        if(!user) {
            user = await this.userDataGateway.createUser(microsoftId);
        }
        return new UserLoginVM(user.getUserId(), user.getRole());
    }

}