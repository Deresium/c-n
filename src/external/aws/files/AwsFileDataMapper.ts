import IFileDataGateway from "./IFileDataGateway";
import IAwsOperations from "./IAwsOperations";

export default class AwsFileDataMapper implements IFileDataGateway{
    private awsOperations: IAwsOperations;

    constructor(awsOperations: IAwsOperations) {
        this.awsOperations = awsOperations;
    }

    async deleteIconSolutionCategory(solutionFileCategoryId: number) {
        await this.awsOperations.deleteFile(`icons/${solutionFileCategoryId}`);
    }

    async deleteSolutionFile(solutionFileId: number) {
        await this.awsOperations.deleteFile(`solution/${solutionFileId}`);
    }

    async getIconSolutionCategory(solutionFileCategoryId: number) {
        return await this.awsOperations.getFile(`icons/${solutionFileCategoryId}`);
    }

    async getSolutionFile(solutionFileId: number) {
        return await this.awsOperations.getFile(`solution/${solutionFileId}`);
    }

    async postIconSolutionCategory(solutionFileCategoryId: number, data: Buffer) {
        await this.awsOperations.postFile(`icons/${solutionFileCategoryId}`, data);
    }

    async postSolutionFile(solutionFileId: number, data: Buffer) {
        await this.awsOperations.postFile(`solution/${solutionFileId}`, data);
    }
}