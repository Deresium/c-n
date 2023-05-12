import BreakfastDS from "../models/contact/BreakfastDS";

export default interface IBreakfastRequester{
    getShowBreakfasts(): Promise<Array<BreakfastDS>>;
    getBreakfast(breakfastId: number): Promise<BreakfastDS>;
}