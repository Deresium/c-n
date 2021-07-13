"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginInfoDS {
    constructor(token, microsoftId) {
        this.token = token;
        this.microsoftId = microsoftId;
    }
    getToken() {
        return this.token;
    }
    getMicrosoftId() {
        return this.microsoftId;
    }
}
exports.default = LoginInfoDS;
