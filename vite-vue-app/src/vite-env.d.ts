/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_URL_CN: string,
    readonly VITE_APP_AZURE_APP_ID: string,
    readonly VITE_APP_URL_REDIRECT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}