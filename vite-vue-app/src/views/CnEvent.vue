<template>
    <div>
        <CnTitle>
            <h2>Petit déjeuner technique chez Cable & Network</h2>
        </CnTitle>
        <div class="phone infoPhone">
            <p class="address large">Avenue Albert 1er, 14 à 4500 Huy</p>
            <p class="large">Présentations Techniques sur :</p>
            <p>Fortinet (Firewall, Switch et AP Wi-Fi)</p>
            <p>Site Survey Wi-Fi avec Ekahau</p>
            <p>Vidéosurveillance (Milestone XProtect et Hanwha)</p>
            <p>Contrôle d'Accès (Vanderbilt ACT, STid, Aperio et 2N)</p>
            <p>Détection Intrusion (Vanderbilt SPC)</p>
        </div>
        <div class="flex">
            <div class="completeForm">
                <form v-if="!saveDone" class="formGuest" v-on:submit.prevent="submitEventForm" novalidate>

                    <div class="breakfastDiv">
                        <p>Sélectionner la date du petit-déjeuner</p>
                    <div class="breakfastDate">
                        <label class="labelBreakfast" v-for="breakfast in breakfastList"
                               :key="breakfast.getBreakfastId()">
                            <input type="radio" :value="breakfast.getBreakfastId()" v-model="breakfastIdSelected"/>
                            <span class="spanBreakfast">{{ breakfast.getDateFormatFrench() }}</span>
                        </label>
                    </div>
                    </div>

                    <div class="mainGuest">
                        <label class="inputText">
                            <span>Nom</span>
                            <input type="text" v-model="mainGuestName"/>
                        </label>

                        <label class="inputText">
                            <span>Prénom</span>
                            <input type="text" v-model="mainGuestFirstName"/>
                        </label>

                        <label class="inputText">
                            <span>Email</span>
                            <input type="email" v-model="mainGuestEmail"/>
                        </label>

                        <label class="inputText">
                            <span>Société</span>
                            <input type="text" v-model="company"/>
                        </label>
                    </div>

                    <div class="nbGuest">
                        <p>Nombre de personnes vous accompagnant</p>
                        <div class="nbGuestChoice">
                            <label class="labelRadio" v-for="index in 5" :key="index">
                                <input type="radio" :value="index - 1" v-model="nbComeWith"/>
                                <span class="spanRadio">{{ index - 1 }}</span>
                            </label>
                        </div>
                    </div>

                    <div class="comeWithGuests">
                        <template v-for="index in nbComeWith" :key="index">
                            <CnGuestAdd :index="(index - 1).toString()" @emit-guest="emitGuest"
                                        :register-guest-base="getGuest(index-1)"/>
                        </template>
                    </div>

                    <p class="error" v-if="error">{{ error }}</p>
                    <button :disabled="onSend" type="submit">S'inscrire</button>
                </form>

                <div class="saveDone" v-if="saveDone">
                    <p>Merci pour votre inscription. Vous allez recevoir un mail de confirmation prochainement.</p>
                    <router-link :to="{name: 'home'}">Retourner à l'accueil</router-link>
                </div>
            </div>
            <div class="fillInfo">
                <img class="imgBreakfast" src="/gallery/15years/buffet_6.jpg" alt="news_pic"/>
                <p>Petit déjeuner avec viennoiseries, café, chocolat chaud, … </p>
                <div class="infoDesktop">
                    <p class="address">Avenue Albert 1er, 14 à 4500 Huy</p>
                    <p class="infoMain">Présentations Techniques sur :</p>
                    <p>Fortinet (Firewall, Switch et AP Wi-Fi)</p>
                    <p>Site Survey Wi-Fi avec Ekahau</p>
                    <p>Vidéosurveillance (Milestone XProtect et Hanwha)</p>
                    <p>Contrôle d'Accès (Vanderbilt ACT, STid, Aperio et 2N)</p>
                    <p>Détection Intrusion (Vanderbilt SPC)</p>
                </div>
                <p>Chaque participant recevra un lapin Neuhaus, remplit de délicieux oeufs au chocolat.</p>
                <img class="neuhaus imgBreakfast" src="../assets/neuhaus.png" alt="neuhaus pics"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import CnTitle from "../components/commons/CnTitle.vue";
import {defineComponent, ref} from "vue";
import CnGuestAdd from "../components/CnGuestAdd.vue";
import RegisterGuest from "../business/models/RegisterGuest";
import validator from "validator";
import axiosCn from "../axios/axiosCn";
import Breakfast from "../business/models/Breakfast";

export default defineComponent({
    components: {CnTitle, CnGuestAdd},
    setup() {
        const mainGuestName = ref('');
        const mainGuestFirstName = ref('');
        const mainGuestEmail = ref('');
        const company = ref('');
        const nbComeWith = ref(1);
        const guestsComeWith = new Array<RegisterGuest>();

        const error = ref('');
        const onSend = ref(false);
        const saveDone = ref(false);
        const breakfastIdSelected = ref('');


        const breakfastList = ref(new Array<Breakfast>());

        axiosCn.get('/api/breakfast').then(response => {
            for (const breakfast of response.data) {
                breakfastList.value.push(new Breakfast(breakfast.breakfastId, breakfast.dateISO, breakfast.dateFormatFrench))
            }
        });


        const emitGuest = (index: number, guest: RegisterGuest) => {
            guestsComeWith[index] = guest;
        };

        const getGuest = (index: number) => {
            if (index > guestsComeWith.length) {
                return undefined;
            }
            return guestsComeWith[index];
        };

        const sendGuestsToBack = async (): Promise<void> => {
            const reduceListGuest = guestsComeWith.slice(0, nbComeWith.value);
            const response = await axiosCn.post('/api/guests', {
                mainGuest: {
                    name: mainGuestName.value,
                    firstName: mainGuestFirstName.value,
                    email: mainGuestEmail.value
                },
                company: company.value,
                breakfastId: breakfastIdSelected.value,
                listGuests: reduceListGuest
            });
            if (response.status === 200) {
                saveDone.value = true;
            }
        };

        const submitEventForm = async () => {
            error.value = '';
            onSend.value = true;

            const listEmails = new Array<string>();
            listEmails.push(mainGuestEmail.value);
            if (!mainGuestName.value || !mainGuestFirstName.value || !mainGuestEmail.value) {
                error.value = 'Veuillez compléter le formulaire';
                onSend.value = false;
                return;
            }

            if (nbComeWith.value > guestsComeWith.length) {
                error.value = 'Veuillez compléter le formulaire';
                onSend.value = false;
                return;
            }

            if(!breakfastIdSelected.value){
                error.value = 'Veuillez compléter le formulaire';
                onSend.value = false;
                return;
            }

            for (let i = 0; i < nbComeWith.value; ++i) {
                const guest = guestsComeWith[i];
                listEmails.push(guest.getEmail());
                if (!guest.getEmail() || !guest.getFirstName() || !guest.getName()) {
                    error.value = 'Veuillez compléter le formulaire';
                    onSend.value = false;
                    return;
                }
            }
            if (!error.value) {
                for (const email of listEmails) {
                    if (!validator.isEmail(email)) {
                        error.value = 'Certains emails ne sont pas des emails valides';
                        onSend.value = false;
                        return;
                    }
                }
            }
            await sendGuestsToBack();
            onSend.value = false;
        };

        return {
            mainGuestName,
            mainGuestFirstName,
            mainGuestEmail,
            company,
            nbComeWith,
            error,
            onSend,
            saveDone,
            emitGuest,
            getGuest,
            submitEventForm,
            breakfastList,
            breakfastIdSelected
        }
    }
});


</script>

<style>
.formGuest {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 50px;
    color: #2E3092;
    font-size: large;
}

.formGuest .mainGuest, .formGuest .comeWithGuest {
    display: flex;
    flex-direction: column;
}

.formGuest label {
    margin-bottom: 20px;
}

.formGuest label.inputText span {
    display: block;
}

.formGuest input[type="text"], .formGuest input[type="email"] {
    border: solid 1px lightslategrey;
    padding: 5px;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
}

.formGuest input[type="radio"] {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
}

.formGuest .nbGuestChoice {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
}

.formGuest .spanRadio {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
}

.formGuest .labelRadio input:checked ~ .spanRadio {
    background-color: #FEFE00;
}

.formGuest .breakfastDate{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    column-gap: 5px;
    margin-top: 10px;
}

.formGuest .spanBreakfast {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 1px 10px 1px;
    border-radius: 10px;
    cursor: pointer;
}

.formGuest .labelBreakfast input:checked ~ .spanBreakfast {
    background-color: #FEFE00;
}

.formGuest button[type="submit"] {
    font-size: large;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    border: none;
    background-color: #2E3092;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.formGuest .error {
    text-align: center;
    font-size: medium;
    background-color: rgba(255, 0, 0, .6);
    color: white;
    padding: 10px;
    margin-bottom: 20px;
}

.saveDone {
    color: #2E3092;
    margin-left: 10px;
    margin-right: 10px;
}

.saveDone a {
    display: inline-block;
    text-decoration: none;
    color: white;
    background-color: #2E3092;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
}

.fillInfo {
    display: none;
}

.infoPhone {
    color: #2e3092;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 70px;
}

.infoPhone .address{
    margin-bottom: 30px;
}

.infoPhone p {
    margin-bottom: 20px;
}

.large{
    font-size: large;
    font-weight: bold;
}

@media (min-width: 900px) {
    .flex {
        display: flex;
        justify-content: flex-start;
    }

    .completeForm {
        width: 50%;
    }

    .fillInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 100px;
        color: #2E3092;
    }

    .fillInfo p {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .fillInfo img {
        width: 500px;
    }

    .infoDesktop .address, .infoDesktop .infoMain {
        font-weight: bold;
    }


}

</style>