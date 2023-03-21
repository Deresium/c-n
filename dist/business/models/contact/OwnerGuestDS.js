"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OwnerGuestDS {
    constructor(company, mainGuest, listGuests) {
        this.company = company;
        this.mainGuest = mainGuest;
        this.listGuests = listGuests;
    }
    getMainGuestEmail() {
        return this.mainGuest.getEmail();
    }
    getMainGuestName() {
        return this.mainGuest.getName();
    }
    getMainGuestFirstName() {
        return this.mainGuest.getFirstName();
    }
    getCompany() {
        return this.company;
    }
    getGuests() {
        return this.listGuests;
    }
}
exports.default = OwnerGuestDS;
//# sourceMappingURL=OwnerGuestDS.js.map