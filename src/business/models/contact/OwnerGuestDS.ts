import GuestDS from "./GuestDS";

export default class OwnerGuestDS{
    private readonly company: string;
    private readonly breakfastId: number;
    private readonly mainGuest: GuestDS;
    private readonly listGuests: Array<GuestDS>;

    constructor(company: string, breakfastId: number, mainGuest: GuestDS, listGuests: Array<GuestDS>) {
        this.company = company;
        this.breakfastId = breakfastId;
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

    public getBreakfastId(){
        return this.breakfastId;
    }
}