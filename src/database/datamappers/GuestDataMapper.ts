import IGuestDataGateway from "../datagateways/IGuestDataGateway";
import OwnerGuestDS from "../../business/models/contact/OwnerGuestDS";
import {Transaction} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";
import GuestEntity from "../entities/GuestEntity";

export default class GuestDataMapper implements IGuestDataGateway {
    async addGuests(ownerGuest: OwnerGuestDS): Promise<void> {
        try {
            await DatabaseSingleton.getInstance().getSequelize().transaction(async (t: Transaction) => {

                const mainGuestCreated: GuestEntity = await GuestEntity.create({
                    email: ownerGuest.getMainGuestEmail(),
                    name: ownerGuest.getMainGuestName(),
                    firstName: ownerGuest.getMainGuestFirstName(),
                    company: ownerGuest.getCompany()
                }, {transaction: t});

                for (const guest of ownerGuest.getGuests()) {
                    await GuestEntity.create({
                        email: guest.getEmail(),
                        name: guest.getName(),
                        firstName: guest.getFirstName(),
                        ownerGuest: mainGuestCreated.getGuestId()
                    }, {transaction: t});
                }
            });
        }catch(error){
            console.error(error);
        }


    }

}