<template>
    <transition name="popup">
        <div v-if="showMenuPhone" class="completeRoutes">
            <CnRoutes class="routes" @closeMenuPhone="closeMenuPhone"/>
        </div>
    </transition>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnRoutes from "@/components/commons/CnRoutes.vue";

    export default defineComponent({
        components:{CnRoutes},
        props:{
            showMenuPhone:{
                type: Boolean,
                required: true
            }
        },
        emits: ['closeMenuPhone'],
        setup(props, context){
            const closeMenuPhone = () => {
                context.emit('closeMenuPhone')
            }

            return{
                closeMenuPhone
            }
        }
    })
</script>

<style scoped>
    .completeRoutes{
        position: fixed;
        z-index: 2;
        background-color: #FEFE00;
        overflow-y: scroll;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }

    .routes{
        margin-top: 10vh;
        padding-right: 5%;
    }

    .popup-enter-active{
        animation: popup 0.3s ease-in;
    }

    .popup-leave-active{
        animation: popup 0.3s reverse ease-out;
    }

    @keyframes popup {
        0%{
            opacity: 0;
            transform: scale(0, 0);
            border-radius: 50%;
        }
        100%{
            opacity: 1;
            transform: scale(1, 1);
            border-radius: 0;
        }
    }
</style>