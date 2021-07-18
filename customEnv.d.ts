declare namespace NodeJS{
    interface ProcessEnv {
        MONGO_URL: string;
        SENDGRID_KEY: string;
        DNS_NAME: string;
        PG_USER: string;
        PG_PASSWORD: string;
        DB_NAME: string;
        DATABASE_URL: string;
        AZURE_APP_ID: string;
        JWT_SECRET: string;
        AWS_KEY_ID: string;
        AWS_KEY_SECRET: string;
        AWS_BUCKET_NAME: string;
    }
}