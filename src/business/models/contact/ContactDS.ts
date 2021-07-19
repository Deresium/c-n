export default class ContactDS{
    private readonly name;
    private readonly firstName;
    private readonly email;
    private readonly company;
    private readonly message;

    constructor(name: string, firstName: string, email: string, company: string, message: string){
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.company = company;
        this.message = message;
    }

    getName(){
        return this.name;
    }

    getFirstName(){
        return this.firstName;
    }

    getEmail(){
        return this.email;
    }

    getCompany(){
        return this.company;
    }

    getMessage(){
        return this.message;
    }

}