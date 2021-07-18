import SolutionFileCategoryEntity from "../entities/SolutionFileCategoryEntity";
import SolutionFileDS from "../../business/models/solutionfile/datastores/SolutionFileDS";
import SolutionFileEntity from "../entities/SolutionFileEntity";

export default interface ISolutionFileDataGateway{
    getNextSolutionFileCategoryOrder(): Promise<number>;
    getNextSolutionFileOrder(solutionFileCategoryId: number): Promise<number>;
    addSolutionFileCategory(name: string, order: number): Promise<SolutionFileCategoryEntity>;
    addSolutionFile(solutionFile: SolutionFileDS): Promise<SolutionFileEntity>;
    getSolutionFilesCategories(): Promise<Array<SolutionFileCategoryEntity>>;
    deleteSolutionFileCategory(solutionFileCategoryId: number): Promise<void>;
}