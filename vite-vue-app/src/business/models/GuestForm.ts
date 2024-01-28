import Guest from "./Guest";
import validator from "validator";

export default class GuestForm extends Guest{
    private errorEmail: string|undefined;
    private errorFirstName: string|undefined;
    private errorName: string|undefined;

    constructor() {
        super();
        this.errorEmail = undefined;
        this.errorFirstName = undefined;
        this.errorName = undefined;
    }

    get guestErrorName(){
        return this.errorName
    }

    get guestErrorFirstName(){
        return this.errorFirstName;
    }

    get guestErrorEmail(){
        return this.errorEmail;
    }

    checkName(): void{
        if(this.guestName == null || validator.isEmpty(this.guestName)){
            this.errorName = 'Le nom est obligatoire';
        }
        else{
            this.errorName = undefined;
        }
    }

    checkFirstName(): void{
        if(this.guestFirstName == null || validator.isEmpty(this.guestFirstName)){
            this.errorFirstName = 'Le prénom est obligatoire';
        }
        else{
            this.errorFirstName = undefined;
        }
    }

    checkEmail(): void{
        if(this.guestEmail == null || !validator.isEmail(this.guestEmail)){
            this.errorEmail = 'L\'email est obligatoire et doit contenir au minimum "@"';
        }
        else{
            this.errorEmail = undefined;
        }
    }

    checkGuest(): boolean{
        this.checkName();
        this.checkFirstName();
        this.checkEmail();
        return !(this.errorName || this.errorFirstName || this.errorEmail);

    }
}