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
Object.defineProperty(exports, "__esModule", { value: true });
const sendGridCn_1 = require("../../sendGridCn");
class ContactFacade {
    constructor(contactDataGateway) {
        this.contactDataGateway = contactDataGateway;
    }
    addContact(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.contactDataGateway.addContact(contact);
            yield sendGridCn_1.sendContactMail(contact);
        });
    }
}
exports.default = ContactFacade;
//# sourceMappingURL=ContactFacade.js.map