import store from "@/store/store";

export default class DecryptCookie{
    public async tryLoginUser(): Promise<void>{
        if(this.existsKey('payload')){
            const payload = this.getCookie('payload');
            const decryptPayload = JSON.parse(atob(payload.split('.')[1]));
            await store.dispatch('login/loginUser', decryptPayload.role)
        }
    }

    private existsKey(key: string): boolean{
        const cookies = document.cookie;
        return cookies.split('; ').find(cookie => cookie.startsWith(key)) !== undefined;
    }

    private getCookie(key: string): string {
        const cookies = document.cookie;
        const cookie = cookies.split('; ').find(cookie => cookie.startsWith(key));
        if(cookie) {
            return cookie;
        }
        return '';
    }
}