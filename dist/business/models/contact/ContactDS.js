"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactDS {
    constructor(name, firstName, email, company, message) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.company = company;
        this.message = message;
    }
    getName() {
        return this.name;
    }
    getFirstName() {
        return this.firstName;
    }
    getEmail() {
        return this.email;
    }
    getCompany() {
        return this.company;
    }
    getMessage() {
        return this.message;
    }
}
exports.default = ContactDS;
//# sourceMappingURL=ContactDS.js.map