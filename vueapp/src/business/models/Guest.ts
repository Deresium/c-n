export default class Guest{
    private name: string|null;
    private firstName: string|null;
    private email: string|null;

    constructor() {
        this.name = null;
        this.firstName = null;
        this.email = null;
    }

    get guestName(){
        return this.name;
    }

    set guestName(name: string|null){
        this.name = name;
    }

    get guestFirstName(){
        return this.firstName;
    }

    set guestFirstName(firstName: string|null){
        this.firstName = firstName;
    }

    get guestEmail(){
        return this.email;
    }

    set guestEmail(email: string|null){
        this.email = email;
    }

    reset(){
        this.name = null;
        this.firstName = null;
        this.email = null;
    }
}