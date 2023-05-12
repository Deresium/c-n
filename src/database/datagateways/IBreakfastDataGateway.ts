import BreakfastEntity from "../entities/BreakfastEntity";

export default interface IBreakfastDataGateway {
    getShowBreakfasts(): Promise<Array<BreakfastEntity>>;
    getBreakfast(breakfastId: number): Promise<BreakfastEntity>;
}