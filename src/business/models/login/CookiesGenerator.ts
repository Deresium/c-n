import cookie from "cookie";
import UserLoginVM from "./viewmodels/UserLoginVM";
import jwt from "jsonwebtoken";

export default class CookiesGenerator{
    private readonly user: UserLoginVM;
    private signatureCookie: string;
    private payloadCookie: string;

    constructor(user: UserLoginVM) {
        if(user.getUserId() && user.getRole()) {
            this.user = user;
            this.generateAuthenticationCookies();
        }else {
            this.deleteAuthenticationCookies();
        }
    }

    public getSignatureCookie(){
        return this.signatureCookie;
    }

    public getPayloadCookie(){
        return this.payloadCookie;
    }

    private generateAuthenticationCookies(): void {
        const token = jwt.sign({userId: this.user.getUserId(), role: this.user.getRole()}, process.env.JWT_SECRET,{expiresIn: CookiesGenerator.getTimeToLive(false)}).split('.');
        const signatureCookieValue = token[2];
        const payloadCookieValue = `${token[0]}.${token[1]}`;
        this.signatureCookie = CookiesGenerator.generateSignatureCookie(signatureCookieValue);
        this.payloadCookie = CookiesGenerator.generatePayloadCookie(payloadCookieValue);
    }

    private deleteAuthenticationCookies(): void {
        this.signatureCookie = CookiesGenerator.generateSignatureCookie('', true);
        this.payloadCookie = CookiesGenerator.generatePayloadCookie('', true);
    }

    private static generateSignatureCookie(value: string, deleteCookie = false): string{
        return cookie.serialize('signature', value, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: CookiesGenerator.getTimeToLive(deleteCookie),
            sameSite: true,
            path: '/'
        });
    }

    private static generatePayloadCookie(value: string, deleteCookie = false): string{
        return cookie.serialize('payload', value, {
            secure: process.env.NODE_ENV === 'production',
            maxAge: CookiesGenerator.getTimeToLive(deleteCookie),
            sameSite: true,
            path:'/'
        });
    }

    private static getTimeToLive(toDelete: boolean): number{
        if(toDelete){
            return 0;
        }
        return 60*60*24;
    }
}