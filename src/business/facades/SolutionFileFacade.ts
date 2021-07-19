import ISolutionFileRequester from "../requesters/ISolutionFileRequester";
import IFileDataGateway from "../../external/aws/IFileDataGateway";
import ISolutionFileDataGateway from "../../database/datagateways/ISolutionFileDataGateway";
import SolutionFileCategoryEntity from "../../database/entities/SolutionFileCategoryEntity";
import SolutionFileCategoryVM from "../models/solutionfile/viewmodels/SolutionFileCategoryVM";
import SolutionFileVM from "../models/solutionfile/viewmodels/SolutionFileVM";
import SolutionFileEntity from "../../database/entities/SolutionFileEntity";
import SolutionFileDS from "../models/solutionfile/datastores/SolutionFileDS";
import SolutionFileUpdateDS from "../models/solutionfile/datastores/SolutionFileUpdateDS";

export default class SolutionFileFacade implements ISolutionFileRequester {
    private fileDataGateway: IFileDataGateway;
    private solutionFileDataGateway: ISolutionFileDataGateway;

    constructor(fileDataGateway: IFileDataGateway, solutionFileDataGateway: ISolutionFileDataGateway) {
        this.fileDataGateway = fileDataGateway;
        this.solutionFileDataGateway = solutionFileDataGateway;
    }

    async updateSolutionFile(solutionFileUpdateDS: SolutionFileUpdateDS): Promise<void> {
        await this.solutionFileDataGateway.updateSolutionFile(solutionFileUpdateDS);
        if(solutionFileUpdateDS.getPdfFile()){
            await this.fileDataGateway.postSolutionFile(solutionFileUpdateDS.getSolutionFileId(), solutionFileUpdateDS.getPdfFile());
        }
    }

    async addSolutionFileCategory(solutionCategoryName:string, icon: Buffer): Promise<void> {
        const order = await this.solutionFileDataGateway.getNextSolutionFileCategoryOrder();
        const solutionFileCategoryEntity: SolutionFileCategoryEntity = await this.solutionFileDataGateway.addSolutionFileCategory(solutionCategoryName, order);
        await this.fileDataGateway.postIconSolutionCategory(solutionFileCategoryEntity.getSolutionFileCategoryId(), icon);
    }

    async updateSolutionFileCategory(solutionFileCategoryId: number, solutionCategoryName: string, icon: Buffer): Promise<void>{
        await this.solutionFileDataGateway.updateSolutionFileCategory(solutionFileCategoryId, solutionCategoryName);
        if(icon) {
            await this.fileDataGateway.postIconSolutionCategory(solutionFileCategoryId, icon);
        }
    }

    async addSolutionFile(solutionFile: SolutionFileDS): Promise<void> {
        const order = await this.solutionFileDataGateway.getNextSolutionFileOrder(solutionFile.getSolutionFileCategoryId());
        const solutionFileDS = new SolutionFileDS(solutionFile.getTitle(), solutionFile.getDescription(), order, solutionFile.getSolutionFileCategoryId(), solutionFile.getPdfFile());
        const solutionFileEntity = await this.solutionFileDataGateway.addSolutionFile(solutionFileDS);
        await this.fileDataGateway.postSolutionFile(solutionFileEntity.getSolutionFileId(), solutionFileDS.getPdfFile());
    }

    async getSolutionFileCategories(): Promise<Array<SolutionFileCategoryVM>> {
        const solutionFileCategories = new Array<SolutionFileCategoryVM>();
        const solutionFilesCategoriesEntity = await this.solutionFileDataGateway.getSolutionFilesCategories();

        for(const solutionFileCategoryEntity of solutionFilesCategoriesEntity){
            const solutionFileCategoryVM = new SolutionFileCategoryVM(solutionFileCategoryEntity.getSolutionFileCategoryId(), solutionFileCategoryEntity.getName());
            solutionFileCategories.push(solutionFileCategoryVM);
            SolutionFileFacade.addSolutionFilesToCategory(solutionFileCategoryVM, solutionFileCategoryEntity.getSolutionFiles());
        }
        return solutionFileCategories;
    }

    private static addSolutionFilesToCategory(solutionFileCategory: SolutionFileCategoryVM, solutionFiles: Array<SolutionFileEntity>){
        for(const solutionFileEntity of solutionFiles){
            const solutionFileVM = new SolutionFileVM(solutionFileEntity.getSolutionFileId(), solutionFileEntity.getTitle(), solutionFileEntity.getDescription());
            solutionFileCategory.addSolutionFile(solutionFileVM);
        }
    }

    async getSolutionFileCategoryIcon(solutionFileCategoryId: number): Promise<any> {
        return await this.fileDataGateway.getIconSolutionCategory(solutionFileCategoryId);
    }

    async deleteSolutionFileCategory(solutionFileCategoryId: number): Promise<void> {
        await this.solutionFileDataGateway.deleteSolutionFileCategory(solutionFileCategoryId);
        await this.fileDataGateway.deleteIconSolutionCategory(solutionFileCategoryId);
    }

    async deleteSolutionFile(solutionFileId: number): Promise<void> {
        await this.solutionFileDataGateway.deleteSolutionFile(solutionFileId);
        await this.fileDataGateway.deleteSolutionFile(solutionFileId);
    }

    async getSolutionFilePdf(solutionFileId: number): Promise<any> {
        return await this.fileDataGateway.getSolutionFile(solutionFileId);
    }

    public async reorderSolutionFileCategories(solutionFileCategoryIds: Array<number>): Promise<void> {
        return await this.solutionFileDataGateway.reorderSolutionFileCategories(solutionFileCategoryIds);
    }

    public async reorderSolutionFiles(solutionFileIds: Array<number>): Promise<void> {
        return await this.solutionFileDataGateway.reorderSolutionFiles(solutionFileIds);
    }
}