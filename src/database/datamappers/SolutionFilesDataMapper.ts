import ISolutionFileDataGateway from "../datagateways/ISolutionFileDataGateway";
import SolutionFileEntity from "../entities/SolutionFileEntity";
import SolutionFileCategoryEntity from "../entities/SolutionFileCategoryEntity";
import SolutionFileDS from "../../business/models/solutionfile/datastores/SolutionFileDS";
import {Transaction, Op} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";
import SolutionFileCategoryVM from "../../business/models/solutionfile/viewmodels/SolutionFileCategoryVM";

export default class SolutionFilesDataMapper implements ISolutionFileDataGateway{
    async getNextSolutionFileCategoryOrder(): Promise<number> {
        const solutionFileCategoryCount = await SolutionFileCategoryEntity.count();
        return solutionFileCategoryCount + 1;
    }

    async getNextSolutionFileOrder(solutionFileCategoryId: number): Promise<number> {
        const solutionFileCount = await SolutionFileEntity.count({
            where:{
                solutionFileCategoryId
            }
        });
        return solutionFileCount + 1;
    }

    async addSolutionFileCategory(name: string, order: number): Promise<SolutionFileCategoryEntity> {
        return await SolutionFileCategoryEntity.create({
            name,
            order
        })
    }

    async addSolutionFile(solutionFile: SolutionFileDS): Promise<SolutionFileEntity> {
        return await SolutionFileEntity.create({
            title: solutionFile.getTitle(),
            description: solutionFile.getDescription(),
            order: solutionFile.getOrder(),
            solutionFileCategoryId: solutionFile.getSolutionFileCategoryId()
        })
    }

    async getSolutionFilesCategories(): Promise<Array<SolutionFileCategoryEntity>> {
        return await SolutionFileCategoryEntity.findAll({
            include: [{association: SolutionFileCategoryEntity.associations.solutionFiles, required: false}],
            order: [['order', 'ASC'], [SolutionFileCategoryEntity.associations.solutionFiles, 'order', 'ASC']]
        })
    }

    private static async decreaseSolutionFileCategoryOrderByOne(solutionFileCategoryId: number, t: Transaction): Promise<void> {
        await SolutionFileCategoryEntity.increment({order: -1}, {where: {solutionFileCategoryId}, transaction: t})
    }

    private static async getSolutionFileCategoriesWithHigherOrder(order: number): Promise<Array<SolutionFileCategoryEntity>>{
        return await SolutionFileCategoryEntity.findAll({
            where: {
                order: {
                    [Op.gt]: order
                }
            }
        })
    }

    public async deleteSolutionFileCategory(solutionFileCategoryId: number): Promise<void> {
        await DatabaseSingleton.getInstance().getSequelize().transaction(async(t) => {
            const destroyedSolutionFileCategory = await SolutionFileCategoryEntity.findByPk(solutionFileCategoryId, {attributes: ['order']});

            await SolutionFileCategoryEntity.destroy({
                where:{
                    solutionFileCategoryId
                },
                cascade: true,
                transaction: t,
            });

            const solutionFileCategories = await SolutionFilesDataMapper.getSolutionFileCategoriesWithHigherOrder(destroyedSolutionFileCategory.getOrder());
            for(const solutionFileCategory of solutionFileCategories){
                await SolutionFilesDataMapper.decreaseSolutionFileCategoryOrderByOne(solutionFileCategory.getSolutionFileCategoryId(), t);
            }
        });
    }
}