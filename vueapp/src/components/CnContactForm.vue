<template>
    <form v-on:submit.prevent="submitContact" novalidate="novalidate">
        <div class="input">
            <label>
                <span class="description">Nom</span>
                <input type="text" @focusout="contact.checkName()" @input="contact.checkName()" v-model="contact.guestName"/>
                <span>*</span>
            </label>
            <p>{{ contact.guestErrorName }}</p>
        </div>
        <div class="input">
            <label>
                <span class="description">Prénom</span>
                <input type="text" @focusout="contact.checkFirstName()" @input="contact.checkFirstName()" v-model="contact.guestFirstName"/>
                <span>*</span>
            </label>
            <p>{{ contact.guestErrorFirstName }}</p>
        </div>
        <div class="input">
            <label>
                <span class="description">Email</span>
                <input type="email" @focusout="contact.checkEmail()" v-model="contact.guestEmail"/>
                <span>*</span>
            </label>
            <p>{{ contact.guestErrorEmail }}</p>
        </div>
        <div class="input">
            <label>
                <span class="description">Société</span>
                <input type="text" v-model="company"/>
            </label>
        </div>
        <div class="input">
            <label>
                <span class="description descriptionTextarea">Message</span>
                <textarea @focusout="checkRequest" @input="checkRequest" v-model="request"></textarea>
                <span class="descriptionTextarea">*</span>
            </label>
            <p>{{ requestError }}</p>
        </div>
        <div class="btn">
            <button :disabled="disableSending" type="submit" class="btnAction">Envoyer</button>
        </div>
    </form>
</template>

<script lang="ts">
    import {defineComponent, ref} from "vue";
    import GuestForm from "@/business/models/GuestForm";
    import validator from "validator";
    import Contact from "@/business/models/Contact";
    import axiosCn from "@/axios/axiosCn";

    export default defineComponent({
        setup(){
            const contact = ref(new GuestForm());
            const company = ref('');
            const request = ref('');
            const requestError = ref('');
            const disableSending = ref(false);

            const checkRequest = () => {
                if(request.value == null || validator.isEmpty(request.value)){
                    requestError.value = 'Veuillez indiquer un message';
                }
                else{
                    requestError.value = '';
                }
            }

            const checkForm = (): boolean => {
                const checkOk = contact.value.checkGuest();
                checkRequest();
                return checkOk && !requestError.value;
            }

            const resetForm = () => {
                contact.value.reset();
                company.value = '';
                request.value = '';
            }

            const submitContact = async() => {
                try {
                    disableSending.value = true;
                    if (checkForm()) {
                        const contactToSend = new Contact(contact.value.guestName, contact.value.guestFirstName, contact.value.guestEmail, company.value, request.value);
                        const response = await axiosCn.post('/cn/contact', {contactToSend})
                        if(response.status == 200){
                            resetForm();
                            alert('Merci pour votre message. Nous revenons vers vous au plus vite');
                        }
                    } else {
                        alert('Veuillez compléter l\'ensemble du formulaire');
                    }
                }catch(error){
                    //console.log(error);
                } finally {
                    disableSending.value = false;
                }
            }

            return{
                submitContact,
                contact,
                checkRequest,
                request,
                requestError,
                company,
                disableSending
            }
        }
    })
</script>

<style scoped>
    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        background: linear-gradient(149deg, #D7E1EC, #FFFFFF, #D7E1EC);
        padding-top: 2vh;
        padding-bottom: 2vh;
        border-radius: 25px;
    }

    .input{
        width: 90%;
        margin-bottom: 2vh;
    }

    input, textarea{
        min-width: 65%;
        max-width: 65%;
        border: solid 1px #2E3092;
        background-color: transparent;
        border-radius: 25px;
        outline: none;
        padding: 1% 3% 1% 3%;
        margin-right: 1vw;
        color: #2E3092;
    }

    textarea{
        height: 20vh;
        resize: none;
    }

    label{
        display: flex;
        align-items: center;
    }

    .description{
        display: block;
        min-width: 25%;
        max-width: 25%;
    }

    .descriptionTextarea{
        align-self: flex-start;
    }

    @media (min-width: 900px) {
        .btnAction{
            cursor: pointer;
        }

        .btn{
            width: 90%;
        }

        input{
            padding: 0.5% 1% 0.5% 1%;
            min-width: 20%;
            max-width: 20%;
        }

        .description{
            min-width: 10%;
            max-width: 10%;
        }



        .input > p{
            margin-left: 10%;
        }

        textarea{
            padding: 0.5% 1% 0.5% 1%;
        }
    }
</style>