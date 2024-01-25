export default class RegisterGuest {
    private readonly name: string;
    private readonly firstName: string;
    private readonly email: string;
    constructor(name: string, firstName: string, email: string) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
    }

    public getName(): string{
       return this.name;
    }

    public getFirstName(): string{
        return this.firstName;
    }

    public getEmail(): string{
        return this.email;
    }
}