import IContactRequester from "../requesters/IContactRequester";
import ContactDS from "../models/contact/ContactDS";
import IContactDataGateway from "../../database/datagateways/IContactDataGateway";
import ISendMailDataGateway from "../../external/aws/mail/ISendMailDataGateway";

export default class ContactFacade implements IContactRequester{
    private contactDataGateway: IContactDataGateway;
    private sendMailDataGateway: ISendMailDataGateway;

    constructor(contactDataGateway: IContactDataGateway, sendMailDataGateway: ISendMailDataGateway) {
        this.contactDataGateway = contactDataGateway;
        this.sendMailDataGateway = sendMailDataGateway;
    }

    public async addContact(contact: ContactDS): Promise<void> {
        await this.contactDataGateway.addContact(contact);
        await this.sendMailDataGateway.sendEmailContact(contact);
    }

}