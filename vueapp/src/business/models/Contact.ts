export default class Contact{
    private readonly name: string|null;
    private readonly firstName: string|null;
    private readonly email: string|null;
    private readonly company: string|null;
    private readonly request: string|null;

    constructor(name: string|null, firstName: string|null, email: string|null, company: string|null, request: string|null) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.company = company
        this.request = request;
    }

    get contactName(){
        return this.name;
    }

    get contactFirstName(){
        return this.firstName;
    }

    get contactEmail(){
        return this.email;
    }

    get contactCompany(){
        return this.company
    }

    get contactRequest(){
        return this.request;
    }
}