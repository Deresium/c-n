export default class SolutionFileDS{
    private readonly title: string;
    private readonly description: string;
    private readonly order: number;
    private readonly solutionFileCategoryId: number;
    private readonly pdfFile: Buffer;

    constructor(title: string, description: string, order: number, solutionFileCategoryId: number, pdfFile: Buffer) {
        this.title = title;
        this.description = description;
        this.order = order;
        this.solutionFileCategoryId = solutionFileCategoryId;
        this.pdfFile = pdfFile;
    }

    public getTitle(){
        return this.title;
    }

    public getDescription(){
        return this.description;
    }

    public getOrder(){
        return this.order;
    }

    public getSolutionFileCategoryId(){
        return this.solutionFileCategoryId;
    }

    public getPdfFile(){
        return this.pdfFile;
    }
}