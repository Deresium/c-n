declare namespace NodeJS{
    interface ProcessEnv {
        MONGO_URL: string;
        SENDGRID_KEY: string;
        DNS_NAME: string;
    }
}