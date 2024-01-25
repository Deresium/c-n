<template>
    <div class="comeWithGuest">
        <p class="guestName">{{ titleTxt }}</p>
        <label class="inputText">
            <span>Nom</span>
            <input type="text" v-model="guestName"/>
        </label>
        <label class="inputText">
            <span>Prénom</span>
            <input type="text" v-model="guestFirstName"/>
        </label>
        <label class="inputText">
            <span>Email</span>
            <input type="email" v-model="guestEmail"/>
        </label>
    </div>
</template>

<script lang="ts">
import {ref, watch, computed, defineComponent} from "vue";
import RegisterGuest from "../business/models/RegisterGuest.ts";

export default defineComponent({
    props: {
        index: {
            type: String,
            required: true
        },
        registerGuestBase: {
            type: RegisterGuest,
            required: false
        }
    },

    emits: ['emitGuest'],

    setup(props, context) {
        const guestName = ref('');
        const guestFirstName = ref('');
        const guestEmail = ref('');

        if(props.registerGuestBase){
            guestName.value = props.registerGuestBase.getName();
            guestFirstName.value = props.registerGuestBase.getFirstName();
            guestEmail.value = props.registerGuestBase.getEmail();
        }

        const titleTxt = computed(() => {
            if(guestName.value || guestFirstName.value){
                return `${guestFirstName.value} ${guestName.value}`
            }
            return `Invite ${parseInt(props.index) + 1}`
        });

        watch([guestName, guestFirstName, guestEmail], () => {
            emitGuest();
        });

        const emitGuest = () => {
            context.emit('emitGuest', props.index, new RegisterGuest(guestName.value, guestFirstName.value, guestEmail.value));
        }

        return {
            guestName,
            guestFirstName,
            guestEmail,
            titleTxt
        }
    }
});


</script>

<style scoped>
.guestName{
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: x-large;
}

</style>