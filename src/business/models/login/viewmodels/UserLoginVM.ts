import Roles from "../../../../enums/Roles";

export default class UserLoginVM {
    private readonly userId: number;
    private readonly role: Roles;

    constructor(userId: number, role: Roles) {
        this.userId = userId;
        this.role = role;
    }

    public getUserId(){
        return this.userId;
    }

    public getRole(){
        return this.role;
    }
}