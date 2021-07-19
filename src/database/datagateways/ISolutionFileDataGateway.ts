import SolutionFileCategoryEntity from "../entities/SolutionFileCategoryEntity";
import SolutionFileDS from "../../business/models/solutionfile/datastores/SolutionFileDS";
import SolutionFileEntity from "../entities/SolutionFileEntity";
import SolutionFileUpdateDS from "../../business/models/solutionfile/datastores/SolutionFileUpdateDS";

export default interface ISolutionFileDataGateway{
    getNextSolutionFileCategoryOrder(): Promise<number>;
    getNextSolutionFileOrder(solutionFileCategoryId: number): Promise<number>;
    addSolutionFileCategory(name: string, order: number): Promise<SolutionFileCategoryEntity>;
    updateSolutionFileCategory(solutionFileCategoryId: number, name: string): Promise<void>;
    addSolutionFile(solutionFile: SolutionFileDS): Promise<SolutionFileEntity>;
    getSolutionFilesCategories(): Promise<Array<SolutionFileCategoryEntity>>;
    deleteSolutionFileCategory(solutionFileCategoryId: number): Promise<void>;
    updateSolutionFile(solutionFileUpdateDS: SolutionFileUpdateDS): Promise<void>;
    deleteSolutionFile(solutionFileId: number): Promise<void>;
    reorderSolutionFiles(solutionFileIds: Array<number>): Promise<void>;
    reorderSolutionFileCategories(solutionFileCategoryIds: Array<number>): Promise<void>;

}