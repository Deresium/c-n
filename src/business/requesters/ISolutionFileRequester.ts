import SolutionFileCategoryVM from "../models/solutionfile/viewmodels/SolutionFileCategoryVM";
import SolutionFileDS from "../models/solutionfile/datastores/SolutionFileDS";
import SolutionFileUpdateDS from "../models/solutionfile/datastores/SolutionFileUpdateDS";

export default interface ISolutionFileRequester{
    addSolutionFileCategory(solutionCategoryName: string, icon: Buffer): Promise<void>;
    getSolutionFileCategories(): Promise<Array<SolutionFileCategoryVM>>;
    getSolutionFileCategoryIcon(solutionFileCategoryId: number): Promise<any>;
    deleteSolutionFileCategory(solutionFileCategoryId: number): Promise<void>;
    addSolutionFile(solutionFile: SolutionFileDS): Promise<void>;
    getSolutionFilePdf(solutionFileId: number): Promise<any>;
    updateSolutionFileCategory(solutionFileCategoryId: number, solutionCategoryName: string, icon: Buffer): Promise<void>;
    updateSolutionFile(solutionFileUpdateDS: SolutionFileUpdateDS): Promise<void>;
    deleteSolutionFile(solutionFileId: number): Promise<void>;
    reorderSolutionFiles(solutionFileIds: Array<number>): Promise<void>;
    reorderSolutionFileCategories(solutionFileCategoryIds: Array<number>): Promise<void>;
}