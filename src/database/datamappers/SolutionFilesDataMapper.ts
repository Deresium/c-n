import ISolutionFileDataGateway from "../datagateways/ISolutionFileDataGateway";
import SolutionFileEntity from "../entities/SolutionFileEntity";
import SolutionFileCategoryEntity from "../entities/SolutionFileCategoryEntity";
import SolutionFileDS from "../../business/models/solutionfile/datastores/SolutionFileDS";
import {Op, Transaction} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";
import SolutionFileUpdateDS from "../../business/models/solutionfile/datastores/SolutionFileUpdateDS";

export default class SolutionFilesDataMapper implements ISolutionFileDataGateway {

    async updateSolutionFile(solutionFileUpdateDS: SolutionFileUpdateDS): Promise<void> {
        await SolutionFileEntity.update({
            title: solutionFileUpdateDS.getTitle(),
            description: solutionFileUpdateDS.getDescription()
        },{
            where:{
                solutionFileId: solutionFileUpdateDS.getSolutionFileId()
            }
        })
    }

    async updateSolutionFileCategory(solutionFileCategoryId: number, name: string): Promise<void> {
        await SolutionFileCategoryEntity.update({
            name
        },{
            where: {
                solutionFileCategoryId
            }
        })
    }
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

    private static async getSolutionFilesWithHigherOrder(solutionFileCategoryId: number, order: number) {
        return await SolutionFileEntity.findAll({
            where:{
                solutionFileCategoryId,
                order: {
                    [Op.gt]: order
                }
            }
        })
    }

    private static async decreaseSolutionFileOrderByOne(solutionFileId: number, t: Transaction): Promise<void> {
        await SolutionFileEntity.increment({order: -1}, {where: {solutionFileId}, transaction: t})
    }

    public async deleteSolutionFile(solutionFileId: number): Promise<void> {
        await DatabaseSingleton.getInstance().getSequelize().transaction(async(t) => {
            const destroyedFileSolution = await SolutionFileEntity.findByPk(solutionFileId);

            await SolutionFileEntity.destroy({
                where:{
                    solutionFileId
                },
                transaction: t
            });

            const solutionFiles = await SolutionFilesDataMapper.getSolutionFilesWithHigherOrder(destroyedFileSolution.getSolutionFileCategoryId(), destroyedFileSolution.getOrder());
            for(const solutionFile of solutionFiles){
                await SolutionFilesDataMapper.decreaseSolutionFileOrderByOne(solutionFile.getSolutionFileId(), t);
            }

        });
    }

    public async reorderSolutionFileCategories(solutionFileCategoryIds: Array<number>): Promise<void> {
        await DatabaseSingleton.getInstance().getSequelize().transaction(async(t) => {
            for(let i = 0; i < solutionFileCategoryIds.length; ++i){
                await SolutionFileCategoryEntity.update({
                    order: i + 1
                },{
                    where:{
                        solutionFileCategoryId: solutionFileCategoryIds[i]
                    },
                    transaction: t
                })
            }
        });
    }

    public async reorderSolutionFiles(solutionFileIds: Array<number>): Promise<void> {
        await DatabaseSingleton.getInstance().getSequelize().transaction(async(t) => {
            for(let i = 0; i < solutionFileIds.length; ++i){
                await SolutionFileEntity.update({
                    order: i + 1
                },{
                    where:{
                        solutionFileId: solutionFileIds[i]
                    },
                    transaction: t
                })
            }
        });
    }
}