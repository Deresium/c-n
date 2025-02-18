<template>
    <div>
        <CnTitle>
            <h2>Infrastructure Solution Day - Jeudi 15 mai 2025 </h2>
        </CnTitle>
        <div class="flex">
            <div class="completeForm">
                <form v-if="!saveDone" class="formGuest" v-on:submit.prevent="submitEventForm" :novalidate="true">
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
                            <label class="labelRadio" v-for="index in 9" :key="index">
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
                <p><img class="iconInfra" src="/icons/calendar.svg" alt="calendar icon"/> Jeudi 15 mai 2025 -
                    de
                    10h à 18h</p>
                <p><img class="iconInfra" src="/icons/placeholder.svg" alt="placeholder icon"/> Avenue Albert
                    1er,
                    14 - 4500 Huy</p>
                <p><img class="iconInfra" src="/icons/dinner.svg" alt="dinner icon"/> Un buffet, une sélection de vins et un foodtruck café durant toute la journée</p>
                <p>
                    <img class="iconInfra" src="/icons/booth.svg" alt="booth icon"/>
                    <span class="infoWithLink">
                    Programme de la journée disponible sur
                    <router-link class="programmeLink" :to="{name: 'programme'}">c-n.be/programme</router-link>
                </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import validator from "validator";
import CnTitle from "../components/commons/CnTitle.vue";
import RegisterGuest from "../business/models/RegisterGuest.ts";
import CnGuestAdd from "../components/CnGuestAdd.vue";
import axiosCn from "../axios/axiosCn.ts";
export default defineComponent({
    components: {CnTitle, CnGuestAdd},
    setup(){
        const mainGuestName = ref('');
        const mainGuestFirstName = ref('');
        const mainGuestEmail = ref('');
        const company = ref('');
        const nbComeWith = ref(1);
        const guestsComeWith = new Array<RegisterGuest>();

        const error = ref('');
        const onSend = ref(false);
        const saveDone = ref(false);


        const emitGuest = (index: number, guest: RegisterGuest) => {
            guestsComeWith[index] = guest;
        };

        const getGuest = (index: number): RegisterGuest | undefined => {
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

        return{
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
            submitEventForm
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
}

.formGuest .labelRadio input:checked ~ .spanRadio {
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

@media (min-width: 900px) {
    .flex{
        display: flex;
        justify-content: flex-start;
    }

    .completeForm{
        width: 50%;
    }

    .fillInfo {
        display: block;
        margin-left: 10px;
        margin-left: 100px;
        color: #2E3092;
    }

    .fillInfo p {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .fillInfo p img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
}

</style>