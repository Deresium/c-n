import GuestDS from "./GuestDS";

export default class OwnerGuestDS{
    private readonly company: string;
    private readonly mainGuest: GuestDS;
    private readonly listGuests: Array<GuestDS>;

    constructor(company: string, mainGuest: GuestDS, listGuests: Array<GuestDS>) {
        this.company = company;
        this.mainGuest = mainGuest;
        this.listGuests = listGuests;
    }

    public getMainGuestEmail(){
        return this.mainGuest.getEmail();
    }

    public getMainGuestName(){
        return this.mainGuest.getName();
    }

    public getMainGuestFirstName(){
        return this.mainGuest.getFirstName();
    }

    public getCompany(){
        return this.company;
    }

    public getGuests(){
        return this.listGuests;
    }
}