import IGuestDataGateway from "../../database/datagateways/IGuestDataGateway";
import OwnerGuestDS from "../models/contact/OwnerGuestDS";
import ISendMailDataGateway from "../../external/aws/mail/ISendMailDataGateway";

export default class GuestFacade implements IGuestDataGateway {
    private readonly guestDataGateway: IGuestDataGateway;
    private readonly sendMailDataGateway: ISendMailDataGateway;

    constructor(guestDataGateway: IGuestDataGateway, sendMailDataGateway: ISendMailDataGateway) {
        this.guestDataGateway = guestDataGateway;
        this.sendMailDataGateway = sendMailDataGateway;
    }
    async addGuests(ownerGuest: OwnerGuestDS): Promise<void> {
        await this.guestDataGateway.addGuests(ownerGuest);
        await this.sendMailDataGateway.sendMailGuest(ownerGuest);
    }

}