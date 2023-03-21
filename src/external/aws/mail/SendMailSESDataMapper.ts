import ISendMailDataGateway from "./ISendMailDataGateway";
import {SendEmailCommand} from "@aws-sdk/client-ses";
import AwsCredentialsSingleton from "../AwsCredentialsSingleton";
import ContactDS from "../../../business/models/contact/ContactDS";
import OwnerGuestDS from "../../../business/models/contact/OwnerGuestDS";
export default class SendMailSESDataMapper implements ISendMailDataGateway {
    async sendEmailContact(contact: ContactDS): Promise<void> {
        const client = AwsCredentialsSingleton.getInstance().getSESClient();
        const command = new SendEmailCommand({
            Message: {
                Subject: {
                    Data: `Nouveau message de ${contact.getFirstName()} ${contact.getName()}`,
                },
                Body: {
                    Html: {
                        Data: SendMailSESDataMapper.getText(true, contact)
                    },
                    Text: {
                        Data: SendMailSESDataMapper.getText(false, contact)
                    }
                }
            },
            Destination: {
                ToAddresses: ['nicolas.steinbusch@c-n.be']
               //ToAddresses: ['dimitri.steinbusch@hotmail.com']
            },
            Source: 'info@c-n.be'
        });

        try{
            await client.send(command);
            console.log(`mail envoyé à nicolas.steinbusch@c-n.be`);
        }catch(exception){
            console.error(exception);
        }
    }

    private static getText(html: boolean, contact: ContactDS) {
        let separator = '\n';
        if (html) {
            separator = '<br/>'
        }

        return `
        Nouveau message de ${contact.getFirstName()} ${contact.getName()} (email: ${contact.getEmail()} / société: ${contact.getCompany()}): ${separator}
        ${contact.getMessage()}
        `
    }

    async sendMailGuest(guest: OwnerGuestDS): Promise<void> {
        const client = AwsCredentialsSingleton.getInstance().getSESClient();
        const command = new SendEmailCommand({
            Message: {
                Subject: {
                    Data: `Confirmation d'invitation de ${guest.getMainGuestFirstName()} ${guest.getMainGuestName()}`,
                },
                Body: {
                    Html: {
                        Data: SendMailSESDataMapper.getTextGuest(true, guest)
                    },
                    Text: {
                        Data: SendMailSESDataMapper.getTextGuest(false, guest)
                    }
                }
            },
            Destination: {
                ToAddresses: ['annick.steinbusch@c-n.be']
                //ToAddresses: ['dimitri.steinbusch@hotmail.com']
            },
            Source: 'info@c-n.be'
        });

        try{
            await client.send(command);
            console.log(`mail envoyé à annick.steinbusch@c-n.be`);
        }catch(exception){
            console.error(exception);
        }
    }

    private static getTextGuest(html: boolean, guest: OwnerGuestDS): string{
        let separator = '\n';
        if (html) {
            separator = '<br/>'
        }

        let text = `
        Confirmation d'invitation de ${guest.getMainGuestName()} ${guest.getMainGuestFirstName()} (${guest.getMainGuestEmail()}) de la société ${guest.getCompany()} ${separator}
        Invités supplémentaires: ${guest.getGuests().length} ${separator}
        `;

        for(const guestFromList of guest.getGuests()){
            text += `${separator}
            ${guestFromList.getFirstName()} ${guestFromList.getName()} (${guestFromList.getEmail()})`
        }

        return text;
    }


}