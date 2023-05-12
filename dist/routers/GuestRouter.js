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
const ApplicationRouter_1 = __importDefault(require("./ApplicationRouter"));
const GuestDS_1 = __importDefault(require("../business/models/contact/GuestDS"));
const OwnerGuestDS_1 = __importDefault(require("../business/models/contact/OwnerGuestDS"));
class GuestRouter extends ApplicationRouter_1.default {
    constructor(guestRequester) {
        super();
        this.guestRequester = guestRequester;
    }
    initRoutes() {
        this.getRouter().post('/guests', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const ownerGuest = req.body;
            const mainGuest = new GuestDS_1.default(ownerGuest.mainGuest.name, ownerGuest.mainGuest.firstName, ownerGuest.mainGuest.email);
            const guests = new Array();
            if (ownerGuest.listGuests) {
                for (const guest of ownerGuest.listGuests) {
                    guests.push(new GuestDS_1.default(guest.name, guest.firstName, guest.email));
                }
            }
            const ownerGuestDS = new OwnerGuestDS_1.default(ownerGuest.company, ownerGuest.breakfastId, mainGuest, guests);
            try {
                yield this.guestRequester.addGuests(ownerGuestDS);
                res.send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send();
            }
        }));
    }
}
exports.default = GuestRouter;
//# sourceMappingURL=GuestRouter.js.map