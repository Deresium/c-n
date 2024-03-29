"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OwnerGuestDS {
    constructor(company, breakfastId, mainGuest, listGuests) {
        this.company = company;
        this.breakfastId = breakfastId;
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
    getBreakfastId() {
        return this.breakfastId;
    }
}
exports.default = OwnerGuestDS;
//# sourceMappingURL=OwnerGuestDS.js.map