import IContactRequester from "../requesters/IContactRequester";
import ContactDS from "../models/contact/ContactDS";
import IContactDataGateway from "../../database/datagateways/IContactDataGateway";
import {sendContactMail} from "../../sendGridCn";

export default class ContactFacade implements IContactRequester{
    private contactDataGateway: IContactDataGateway;

    constructor(contactDataGateway: IContactDataGateway) {
        this.contactDataGateway = contactDataGateway;
    }

    public async addContact(contact: ContactDS): Promise<void> {
        await this.contactDataGateway.addContact(contact);
        await sendContactMail(contact);
    }

}