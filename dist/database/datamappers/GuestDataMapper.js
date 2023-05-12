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
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
const GuestEntity_1 = __importDefault(require("../entities/GuestEntity"));
class GuestDataMapper {
    addGuests(ownerGuest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield DatabaseSingleton_1.default.getInstance().getSequelize().transaction((t) => __awaiter(this, void 0, void 0, function* () {
                    const mainGuestCreated = yield GuestEntity_1.default.create({
                        email: ownerGuest.getMainGuestEmail(),
                        name: ownerGuest.getMainGuestName(),
                        firstName: ownerGuest.getMainGuestFirstName(),
                        company: ownerGuest.getCompany(),
                        breakfastId: ownerGuest.getBreakfastId()
                    }, { transaction: t });
                    for (const guest of ownerGuest.getGuests()) {
                        yield GuestEntity_1.default.create({
                            email: guest.getEmail(),
                            name: guest.getName(),
                            firstName: guest.getFirstName(),
                            ownerGuest: mainGuestCreated.getGuestId()
                        }, { transaction: t });
                    }
                }));
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.default = GuestDataMapper;
//# sourceMappingURL=GuestDataMapper.js.map