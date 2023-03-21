import OwnerGuestDS from "../models/contact/OwnerGuestDS";

export default interface IGuestRequester {
    addGuests(ownerGuest: OwnerGuestDS): Promise<void>;
}