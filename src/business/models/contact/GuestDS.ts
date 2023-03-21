export default class GuestDS {
    private readonly name: string;
    private readonly firstName: string;
    private readonly email: string;


    constructor(name: string, firstName: string, email: string) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
    }

    public getName(){
        return this.name;
    }

    public getFirstName(){
        return this.firstName;
    }

    public getEmail(){
        return this.email;
    }

}