"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const MicrosoftPublicKey_1 = __importDefault(require("../models/login/MicrosoftPublicKey"));
class LoginFacade {
    login(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token)
                return false;
            const decodeToken = jsonwebtoken_1.default.decode(token, { complete: true });
            if (!decodeToken || !decodeToken.header || !decodeToken.header.kid)
                return false;
            const kid = decodeToken.header.kid;
            const publicKey = yield new MicrosoftPublicKey_1.default().getPublicKey(kid);
            if (!publicKey)
                return false;
            try {
                const verifiedToken = jsonwebtoken_1.default.verify(token, publicKey);
                const microsoftId = verifiedToken.sub;
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.default = LoginFacade;
