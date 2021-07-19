import SolutionFileDS from "./SolutionFileDS";

export default class SolutionFileUpdateDS extends SolutionFileDS{
    private readonly solutionFileId;

    constructor(solutionFileId: number, title: string, description: string, solutionFileCategoryId: number, pdfFile: Buffer) {
        super(title, description, null, solutionFileCategoryId, pdfFile);
        this.solutionFileId = solutionFileId;
    }

    getSolutionFileId(){
        return this.solutionFileId;
    }
}