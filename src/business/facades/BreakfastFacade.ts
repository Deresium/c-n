import IBreakfastRequester from "../requesters/IBreakfastRequester";
import BreakfastDS from "../models/contact/BreakfastDS";
import IBreakfastDataGateway from "../../database/datagateways/IBreakfastDataGateway";

export default class BreakfastFacade implements IBreakfastRequester {
    private readonly breakfastDataGateway: IBreakfastDataGateway;

    constructor(breakfastDataGateway: IBreakfastDataGateway) {
        this.breakfastDataGateway = breakfastDataGateway;
    }
    public async getShowBreakfasts(): Promise<Array<BreakfastDS>> {
        const breakFastsDb = await this.breakfastDataGateway.getShowBreakfasts();
        return breakFastsDb.map(breakFast => new BreakfastDS(breakFast.getBreakfastId(), breakFast.getDate().toISOString(), this.formatToFrenchDate(breakFast.getDate())));
    }

    public async getBreakfast(breakfastId: number): Promise<BreakfastDS> {
        const breakfast = await this.breakfastDataGateway.getBreakfast(breakfastId);
        return new BreakfastDS(breakfast.getBreakfastId(), breakfast.getDate().toISOString(), this.formatToFrenchDate(breakfast.getDate()));
    }

    private formatToFrenchDate(date: Date): string {
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} - De 8h à 12h`
    }
}