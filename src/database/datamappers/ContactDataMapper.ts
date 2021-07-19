import IContactDataGateway from "../datagateways/IContactDataGateway";
import ContactDS from "../../business/models/contact/ContactDS";
import ContactEntity from "../entities/ContactEntity";

export default class ContactDataMapper implements IContactDataGateway{
    public async addContact(contact: ContactDS): Promise<void> {
        await ContactEntity.create({
            name: contact.getName(),
            firstName: contact.getFirstName(),
            email: contact.getEmail(),
            company: contact.getCompany(),
            request: contact.getMessage()
        })
    }
}