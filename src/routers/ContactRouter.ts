import ApplicationRouter from "./ApplicationRouter";
import {sendContactMail} from "../sendGridCn";
import ContactDS from "../business/models/contact/ContactDS";
import IContactRequester from "../business/requesters/IContactRequester";

export default class ContactRouter extends ApplicationRouter{
    private contactRequester: IContactRequester;

    constructor(contactRequester: IContactRequester) {
        super();
        this.contactRequester = contactRequester;
    }

    initRoutes(): void {
        this.getRouter().post('/cn/contact', async(req, res) => {
            const contactJson = req.body.contact;
            const contact = new ContactDS(contactJson.name, contactJson.firstName, contactJson.email, contactJson.company, contactJson.request);
            await this.contactRequester.addContact(contact);
            res.send();


            /*const contact = await Contact.create(req.body.contact);
            await sendContactMail(contact);
            res.status(200).send(contact);*/

        })
    }

}