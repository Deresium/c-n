import ContactDS from "../../business/models/contact/ContactDS";

export default interface IContactDataGateway{
    addContact(contact: ContactDS): Promise<void>;
}