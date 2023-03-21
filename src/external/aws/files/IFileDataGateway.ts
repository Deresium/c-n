export default interface IFileDataGateway {
    getSolutionFile(solutionFileId: number);
    postSolutionFile(solutionFileId: number, data: Buffer);
    deleteSolutionFile(solutionFileId: number);
    getIconSolutionCategory(solutionFileCategoryId: number);
    postIconSolutionCategory(solutionFileCategoryId: number, data: Buffer);
    deleteIconSolutionCategory(solutionFileCategoryId: number);
}