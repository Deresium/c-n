export default class SolutionFileVM{
    private readonly solutionFileId: number;
    private readonly title: string;
    private readonly description: string;

    constructor(solutionFileId: number, title: string, description: string) {
        this.solutionFileId = solutionFileId;
        this.title = title;
        this.description = description;
    }
}