import ContactDS from "../models/contact/ContactDS";

export default interface IContactRequester{
    addContact(contact: ContactDS): Promise<void>;
}