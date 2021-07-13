<template>
    <div class="navbar">
        <img class="imgLogo" src="../../assets/logo_cn.png" alt="logo c-n" @click="clickOnLogo"/>
        <CnHamburger class="hamburger phone" @click="switchMenu" :show-menu-phone="showMenuPhone"/>
        <CnMenuPhone class="phone" :show-menu-phone="showMenuPhone" @closeMenuPhone="showMenuPhone = false"/>
        <CnMenuDesktop class="desktop menuDesktop"/>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref} from "vue";
    import router from "@/router/router";
    import CnHamburger from "@/components/commons/CnHamburger.vue";
    import CnMenuPhone from "@/components/commons/CnMenuPhone.vue";
    import CnMenuDesktop from "@/components/commons/CnMenuDesktop.vue";

    export default defineComponent({
        components:{
            CnHamburger,
            CnMenuPhone,
            CnMenuDesktop
        },
        setup(){
            const showMenuPhone = ref(false);

            const switchMenu = () => {
                showMenuPhone.value = !showMenuPhone.value;
            }

            const clickOnLogo = async() => {
                showMenuPhone.value = false;
                await router.push({name: 'home'})
            }

            return{
                showMenuPhone,
                switchMenu,
                clickOnLogo
            }
        }
    })
</script>

<style scoped>
    .navbar{
        display: flex;
        z-index: 10;
        top: 0;
        justify-content: space-between;
        align-items: center;
        height: 8vh;
        background-color: #FEFE00;
        padding-top: 1vh;
        padding-bottom: 1vh;
        padding-left: 3vw;
        position: sticky;
    }

    .hamburger{
        width: 15%;
        max-width: 8vh;
    }

    .imgLogo{
        max-width: 30%;
        max-height: 100%;
        height: auto;
        cursor: pointer;
    }

    @media (min-width: 900px) {
        .imgLogo{
            width: 10%;
        }

        .menuDesktop{
            width: 90%;

        }

        .navbar{
            width: 96%;

            padding-left: 2%;
            padding-right: 2%;
            height: auto;
            justify-content: space-between;
        }
    }
</style>