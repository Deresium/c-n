import jwksClient from "jwks-rsa";
import axios from "axios";

export default class MicrosoftPublicKey{
    public async getPublicKey(kid: string){
        const jwksUri = await this.getJwksUri();

        if(!jwksUri)
            return null;

        const client = jwksClient({
            jwksUri
        })
        const key = await client.getSigningKey(kid);
        return key.getPublicKey();
    }

    private async getJwksUri() {
        const uri = `https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration?appid=${process.env.AZURE_APP_ID}`;
        try {
            const response = await axios.get(uri);
            return response.data.jwks_uri;
        }catch(error){
            return null;
        }
    }
}