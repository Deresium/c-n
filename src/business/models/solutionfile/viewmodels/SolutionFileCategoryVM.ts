import SolutionFileVM from "./SolutionFileVM";

export default class SolutionFileCategoryVM{
    private readonly solutionFileCategoryId: number;
    private readonly name: string;
    private readonly solutionFiles: Array<SolutionFileVM>;

    constructor(solutionFileCategoryId: number, name: string) {
        this.solutionFileCategoryId = solutionFileCategoryId;
        this.name = name;
        this.solutionFiles = new Array<SolutionFileVM>();
    }

    public addSolutionFile(solutionFile: SolutionFileVM){
        this.solutionFiles.push(solutionFile);
    }
}