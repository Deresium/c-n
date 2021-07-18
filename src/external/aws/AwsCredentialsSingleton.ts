import aws from "aws-sdk";

export default class AwsCredentialsSingleton{
    private static instance: AwsCredentialsSingleton;
    private readonly s3: aws.S3;

    private constructor() {
        const credentials = new aws.Credentials(process.env.AWS_KEY_ID, process.env.AWS_KEY_SECRET);
        this.s3 = new aws.S3({
            credentials: credentials
        })
    }

    public static getInstance(): AwsCredentialsSingleton{
        if(this.instance) {
            return this.instance;
        }
        return new AwsCredentialsSingleton();
    }

    public getS3(){
        return this.s3;
    }

}