import ILoginRequester from "../requesters/ILoginRequester";
import jwt from "jsonwebtoken"
import MicrosoftPublicKey from "../models/login/MicrosoftPublicKey";

export default class LoginFacade implements ILoginRequester{
    async login(token: string): Promise<boolean> {
        if(!token)
            return false;

        const decodeToken = jwt.decode(token, {complete: true});

        if(!decodeToken || !decodeToken.header || !decodeToken.header.kid)
            return false;

        const kid = decodeToken.header.kid;
        const publicKey = await new MicrosoftPublicKey().getPublicKey(kid);

        if(!publicKey)
            return false;

        try {
            const verifiedToken = jwt.verify(token, publicKey);
            const microsoftId = verifiedToken.sub;
            return true;
        }catch(error){
            return false;
        }
    }

}