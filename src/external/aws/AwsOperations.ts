import aws from "aws-sdk";
import AwsCredentialsSingleton from "./AwsCredentialsSingleton";
import IAwsOperations from "./IAwsOperations";

export default class AwsOperations implements IAwsOperations{
    public async getFile(fileName: string) {
        const params: aws.S3.GetObjectRequest = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: fileName,
        };
        try {
            const response = await AwsCredentialsSingleton.getInstance().getS3().getObject(params).promise();
            return response.Body;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    public async postFile(fileName: string, data: Buffer) {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: fileName,
            Body: data
        };

        try{
            await AwsCredentialsSingleton.getInstance().getS3().putObject(params).promise();
        }catch(error){
            console.log(error);
            return null;
        }
    }

    public async deleteFile(fileName: string){
        const params: aws.S3.GetObjectRequest = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: fileName,
        };
        try {
            await AwsCredentialsSingleton.getInstance().getS3().deleteObject(params).promise();
        }catch(error){
            console.log(error);
            return null;
        }
    }
}