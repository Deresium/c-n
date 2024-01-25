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

    public addSolutionFile(solutionFile: SolutionFileVM): void{
        this.solutionFiles.push(solutionFile);
    }

    public getSolutionFileCategoryId(): number{
        return this.solutionFileCategoryId;
    }

    public getName(): string{
        return this.name;
    }

    getSolutionFiles(): Array<SolutionFileVM>{
        return this.solutionFiles;
    }

    getSolutionFilesIds(): Array<number> {
        return this.solutionFiles.map(solutionFile => solutionFile.getSolutionFileId());
    }

}