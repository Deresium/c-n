import SolutionFileCategoryVM from "../../models/SolutionFileCategoryVM";
import axiosCn from "../../../axios/axiosCn";
import SolutionFileCategoryParser from "../parsers/SolutionFileCategoryParser";

export default class SolutionFileCategoryRequest{
    async querySolutionFileCategories(): Promise<Array<SolutionFileCategoryVM>> {
        const jsonResult = await axiosCn.get('/solutionFileCategory');
        return new SolutionFileCategoryParser().parseSolutionFileCategories(jsonResult.data);
    }
}