import axiosCn from "../../axios/axiosCn.ts";
import DecryptCookie from "./DecryptCookie.ts";

export default class SendTokenLogin{
    public sendTokenToLogin(idToken: string): void{
        axiosCn.post('/login', {
            idToken
        }).then(() => {
            new DecryptCookie().tryLoginUser().then(() => {
                alert('connected');
            })
        }).catch(() => {
            alert('La tentative de connexion a échouée');
        })
    }
}