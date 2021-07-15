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
const jwks_rsa_1 = __importDefault(require("jwks-rsa"));
const axios_1 = __importDefault(require("axios"));
class MicrosoftPublicKey {
    getPublicKey(kid) {
        return __awaiter(this, void 0, void 0, function* () {
            const jwksUri = yield this.getJwksUri();
            if (!jwksUri)
                return null;
            const client = jwks_rsa_1.default({
                jwksUri
            });
            const key = yield client.getSigningKey(kid);
            return key.getPublicKey();
        });
    }
    getJwksUri() {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration?appid=${process.env.AZURE_APP_ID}`;
            try {
                const response = yield axios_1.default.get(uri);
                return response.data.jwks_uri;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.default = MicrosoftPublicKey;
//# sourceMappingURL=MicrosoftPublicKey.js.map