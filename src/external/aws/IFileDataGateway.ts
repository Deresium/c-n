export default interface IFileDataGateway {
    getSolutionFile(solutionFileId: number);
    postSolutionFile(solutionFileId: number, data: Buffer);
    deleteSolutionFile(solutionFileId: string);
    getIconSolutionCategory(solutionFileCategoryId: number);
    postIconSolutionCategory(solutionFileCategoryId: number, data: Buffer);
    deleteIconSolutionCategory(solutionFileCategoryId: string);
}