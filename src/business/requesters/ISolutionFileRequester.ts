import SolutionFileCategoryVM from "../models/solutionfile/viewmodels/SolutionFileCategoryVM";
import SolutionFileDS from "../models/solutionfile/datastores/SolutionFileDS";

export default interface ISolutionFileRequester{
    addSolutionFileCategory(solutionCategoryName: string, icon: Buffer): Promise<void>;
    getSolutionFileCategories(): Promise<Array<SolutionFileCategoryVM>>;
    getSolutionFileCategoryIcon(solutionFileCategoryId: number): Promise<any>;
    deleteSolutionFileCategory(solutionFileCategoryId: number): Promise<void>;
    addSolutionFile(solutionFile: SolutionFileDS): Promise<void>;
}