import ContactDS from "../../../business/models/contact/ContactDS";
import OwnerGuestDS from "../../../business/models/contact/OwnerGuestDS";

export default interface ISendMailDataGateway {
    sendEmailContact(contact: ContactDS): Promise<void>;
    sendMailGuest(guest: OwnerGuestDS, breakfastFrenchDate: string): Promise<void>;
}