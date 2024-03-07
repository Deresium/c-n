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
const BreakfastDS_1 = __importDefault(require("../models/contact/BreakfastDS"));
class BreakfastFacade {
    constructor(breakfastDataGateway) {
        this.breakfastDataGateway = breakfastDataGateway;
    }
    getShowBreakfasts() {
        return __awaiter(this, void 0, void 0, function* () {
            const breakFastsDb = yield this.breakfastDataGateway.getShowBreakfasts();
            return breakFastsDb.map(breakFast => new BreakfastDS_1.default(breakFast.getBreakfastId(), breakFast.getDate().toISOString(), this.formatToFrenchDate(breakFast.getDate())));
        });
    }
    getBreakfast(breakfastId) {
        return __awaiter(this, void 0, void 0, function* () {
            const breakfast = yield this.breakfastDataGateway.getBreakfast(breakfastId);
            return new BreakfastDS_1.default(breakfast.getBreakfastId(), breakfast.getDate().toISOString(), this.formatToFrenchDate(breakfast.getDate()));
        });
    }
    formatToFrenchDate(date) {
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} - De 8h à 12h`;
    }
}
exports.default = BreakfastFacade;
//# sourceMappingURL=BreakfastFacade.js.map