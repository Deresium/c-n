import SolutionFileCategoryVM from "@/business/models/SolutionFileCategoryVM";
import SolutionFileVM from "@/business/models/SolutionFileVM";

export default class SolutionFileCategoryParser{
    public parseSolutionFileCategories(json: any): Array<SolutionFileCategoryVM>{
        const solutionFileCategories = new Array<SolutionFileCategoryVM>();
        for(const solutionFileCategory of json){
            const solutionFileCategoryVM = new SolutionFileCategoryVM(solutionFileCategory.solutionFileCategoryId, solutionFileCategory.name);
            solutionFileCategories.push(solutionFileCategoryVM);
            SolutionFileCategoryParser.addSolutionFilesToCategory(solutionFileCategoryVM, solutionFileCategory.solutionFiles);
        }
        return solutionFileCategories;
    }

    private static addSolutionFilesToCategory(solutionFileCategory: SolutionFileCategoryVM, solutionFiles: Array<any>){
        for(const solutionFile of solutionFiles){
            const solutionFileVM = new SolutionFileVM(solutionFile.solutionFileId, solutionFile.title, solutionFile.description);
            solutionFileCategory.addSolutionFile(solutionFileVM);
        }
    }
}