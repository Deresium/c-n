import IGuestDataGateway from "../../database/datagateways/IGuestDataGateway";
import OwnerGuestDS from "../models/contact/OwnerGuestDS";
import ISendMailDataGateway from "../../external/aws/mail/ISendMailDataGateway";
import IBreakfastDataGateway from "../../database/datagateways/IBreakfastDataGateway";
import IBreakfastRequester from "../requesters/IBreakfastRequester";

export default class GuestFacade implements IGuestDataGateway {
    private readonly guestDataGateway: IGuestDataGateway;
    private readonly breakfastRequester: IBreakfastRequester;
    private readonly sendMailDataGateway: ISendMailDataGateway;

    constructor(guestDataGateway: IGuestDataGateway, sendMailDataGateway: ISendMailDataGateway, breakfastRequester: IBreakfastRequester) {
        this.guestDataGateway = guestDataGateway;
        this.sendMailDataGateway = sendMailDataGateway;
        this.breakfastRequester = breakfastRequester;
    }
    async addGuests(ownerGuest: OwnerGuestDS): Promise<void> {
        await this.guestDataGateway.addGuests(ownerGuest);
        let date = null;
        if(ownerGuest.getBreakfastId()) {
            const breakfast = await this.breakfastRequester.getBreakfast(ownerGuest.getBreakfastId());
            date = breakfast.getDateFormatFrench();
        }
        await this.sendMailDataGateway.sendMailGuest(ownerGuest, date);
    }

}