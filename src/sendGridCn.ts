import sgMail from '@sendgrid/mail'
import InvitationDocument from "./interfaces/InvitationDocument";
import GuestDocument from "./interfaces/GuestDocument";
import ContactDocument from "./interfaces/ContactDocument";
import ContactDS from "./business/models/contact/ContactDS";

sgMail.setApiKey(process.env.SENDGRID_KEY);
const to = 'nicolas.steinbusch@c-n.be';
const from = 'info@c-n.be';
const sendNewInvitationMail = async(invitation: InvitationDocument)=>{
    await sgMail.send({
        to,
        from,
        subject: `C&N Event: ${invitation.guestList.length + 1} nouveaux invités`,
        text: getNewInvitationText(invitation, '\n'),
        html: getNewInvitationText(invitation, '<br/>')
    });
};

const sendContactMail = async(contact: ContactDS) => {
    await sgMail.send({
        to,
        from,
        subject: `Nouveau message de ${contact.getName()} ${contact.getFirstName()}`,
        text: getContactText(contact, '\n'),
        html: getContactText(contact,'<br/>')
    });
};

function guestListString(guestList: GuestDocument[], separator: string): string{
    let returnString = '';
    for(const guest of guestList){
        returnString += guest.toMailString(separator) + separator;
    }
    return returnString;
}

function getNewInvitationText(invitation: InvitationDocument, separator: string): string{
    return `Invité ayant réalisé l'inscription:${separator}
    ${invitation.mainGuest.toMailString(separator)}
    ${separator}
    Société: ${invitation.company}${separator}
    ${separator}
    Invités supplémentaires:${separator}
    ${guestListString(invitation.guestList, separator)}`
}

function getContactText(contact: ContactDS, separator: string): string{
    return `Vous avez reçu un nouveau message de ${contact.getName()} ${contact.getFirstName()} ( ${(contact.getCompany())? contact.getCompany(): 'société non spécifiée'} ) - ${contact.getEmail()}: ${separator}
    ${contact.getMessage().replace('\n', separator)}`;
}

export {
    sendNewInvitationMail,
    sendContactMail
}