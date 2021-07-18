export default interface IAwsOperations {
    getFile(fileName: string);
    postFile(fileName: string, data: Buffer);
    deleteFile(fileName: string);
}