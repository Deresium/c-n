"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_1 = __importDefault(require("cookie"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class CookiesGenerator {
    constructor(user) {
        if (user.getUserId() && user.getRole()) {
            this.user = user;
            this.generateAuthenticationCookies();
        }
        else {
            this.deleteAuthenticationCookies();
        }
    }
    getSignatureCookie() {
        return this.signatureCookie;
    }
    getPayloadCookie() {
        return this.payloadCookie;
    }
    generateAuthenticationCookies() {
        const token = jsonwebtoken_1.default.sign({ userId: this.user.getUserId(), role: this.user.getRole() }, process.env.JWT_SECRET, { expiresIn: CookiesGenerator.getTimeToLive(false) }).split('.');
        const signatureCookieValue = token[2];
        const payloadCookieValue = `${token[0]}.${token[1]}`;
        this.signatureCookie = CookiesGenerator.generateSignatureCookie(signatureCookieValue);
        this.payloadCookie = CookiesGenerator.generatePayloadCookie(payloadCookieValue);
    }
    deleteAuthenticationCookies() {
        this.signatureCookie = CookiesGenerator.generateSignatureCookie('', true);
        this.payloadCookie = CookiesGenerator.generatePayloadCookie('', true);
    }
    static generateSignatureCookie(value, deleteCookie = false) {
        return cookie_1.default.serialize('signature', value, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: CookiesGenerator.getTimeToLive(deleteCookie),
            sameSite: true,
            path: '/'
        });
    }
    static generatePayloadCookie(value, deleteCookie = false) {
        return cookie_1.default.serialize('payload', value, {
            secure: process.env.NODE_ENV === 'production',
            maxAge: CookiesGenerator.getTimeToLive(deleteCookie),
            sameSite: true,
            path: '/'
        });
    }
    static getTimeToLive(toDelete) {
        if (toDelete) {
            return 0;
        }
        return 60 * 60 * 24;
    }
}
exports.default = CookiesGenerator;
//# sourceMappingURL=CookiesGenerator.js.map