import Guest from "./Guest.ts";

export default class Invitation{
    private readonly company: string|null;
    private readonly mainGuest: Guest;
    private readonly guestList: Guest[];

    constructor(company: string|null, mainGuest: Guest, guestList: Guest[]) {
        this.company = company;
        this.mainGuest = mainGuest;
        this.guestList = guestList;
    }

    get invitationCompany(){
        return this.company;
    }

    get invitationMainGuest(){
        return this.mainGuest;
    }

    get invitationGuestList(){
        return this.guestList;
    }
}