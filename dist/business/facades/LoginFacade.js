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
const UserLoginVM_1 = __importDefault(require("../models/login/viewmodels/UserLoginVM"));
class LoginFacade {
    constructor(userDataGateway) {
        this.userDataGateway = userDataGateway;
    }
    login(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token) {
                return null;
            }
            const publicKey = yield LoginFacade.getPublicKey(token);
            if (!publicKey) {
                return null;
            }
            let microsoftId = null;
            try {
                const verifiedToken = jsonwebtoken_1.default.verify(token, publicKey);
                microsoftId = verifiedToken.sub;
                if (!microsoftId) {
                    return null;
                }
            }
            catch (error) {
                return null;
            }
            return yield this.findOrCreateUser(microsoftId);
        });
    }
    static getPublicKey(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const decodeToken = jsonwebtoken_1.default.decode(token, { complete: true });
            if (!decodeToken || !decodeToken.header || !decodeToken.header.kid) {
                return null;
            }
            const kid = decodeToken.header.kid;
            const microsoftPublicKey = new MicrosoftPublicKey_1.default();
            return yield microsoftPublicKey.getPublicKey(kid);
        });
    }
    findOrCreateUser(microsoftId) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.userDataGateway.findUser(microsoftId);
            if (!user) {
                user = yield this.userDataGateway.createUser(microsoftId);
            }
            return new UserLoginVM_1.default(user.getUserId(), user.getRole());
        });
    }
}
exports.default = LoginFacade;
//# sourceMappingURL=LoginFacade.js.map