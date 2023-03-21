import OwnerGuestDS from "../../business/models/contact/OwnerGuestDS";

export default interface IGuestDataGateway{
    addGuests(ownerGuest: OwnerGuestDS): Promise<void>;
}