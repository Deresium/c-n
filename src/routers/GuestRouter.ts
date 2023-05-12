import ApplicationRouter from "./ApplicationRouter";
import IGuestRequester from "../business/requesters/IGuestRequester";
import GuestDS from "../business/models/contact/GuestDS";
import OwnerGuestDS from "../business/models/contact/OwnerGuestDS";

export default class GuestRouter extends ApplicationRouter {
    private readonly guestRequester: IGuestRequester;

    constructor(guestRequester: IGuestRequester){
        super();
        this.guestRequester = guestRequester;
    }

    initRoutes(): void {
        this.getRouter().post('/guests', async(req, res) => {
            const ownerGuest = req.body;
            const mainGuest = new GuestDS(ownerGuest.mainGuest.name, ownerGuest.mainGuest.firstName, ownerGuest.mainGuest.email);
            const guests = new Array<GuestDS>();
            if(ownerGuest.listGuests) {
                for (const guest of ownerGuest.listGuests) {
                    guests.push(new GuestDS(guest.name, guest.firstName, guest.email));
                }
            }
            const ownerGuestDS: OwnerGuestDS = new OwnerGuestDS(ownerGuest.company, ownerGuest.breakfastId, mainGuest, guests);

            try {
                await this.guestRequester.addGuests(ownerGuestDS);
                res.send();
            }catch(error){
                console.error(error);
                res.status(500).send();
            }
        });
    }


}