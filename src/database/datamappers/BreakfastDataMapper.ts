import IBreakfastDataGateway from "../datagateways/IBreakfastDataGateway";
import BreakfastEntity from "../entities/BreakfastEntity";

export default class BreakfastDataMapper implements IBreakfastDataGateway {
    public async getShowBreakfasts(): Promise<Array<BreakfastEntity>> {
        return await BreakfastEntity.findAll({
            where: {
                show: true
            },
            order: [['date', 'ASC']]
        });
    }

    public async getBreakfast(breakfastId: number): Promise<BreakfastEntity> {
        return await BreakfastEntity.findByPk(breakfastId);
    }

}