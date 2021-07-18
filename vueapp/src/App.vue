<template>
    <div id="app">
        <div class="contentNoFooter">
            <CnNavbar/>
            <router-view class="content"></router-view>
        </div>
        <CnFooter/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CnNavbar from "@/components/commons/CnNavbar.vue";
import CnFooter from "@/components/commons/CnFooter.vue";
import {useRoute} from "vue-router";
import SendTokenLogin from "@/business/login/SendTokenLogin";
import DecryptCookie from "@/business/login/DecryptCookie";

export default defineComponent({
        components: {
            CnNavbar,
            CnFooter
        },
        setup(){
            const sendIdTokenToLogin = () => {
                const currentUrl = window.location.href;
                const pattern = /.*id_token=(.*)&.*/m;
                const result = currentUrl.match(pattern);
                if(result) {
                    const idToken = result[1];
                    new SendTokenLogin().sendTokenToLogin(idToken);
                }
                else{
                    new DecryptCookie().tryLoginUser();
                }
            };
            sendIdTokenToLogin();
        }
    })
</script>

<style>
@font-face {
    font-family: 'Ace Sans';
    font-style: normal;
    font-weight: normal;
    src: url('assets/fonts/Ace Sans.otf');
}

#app {
    min-height: 100vh;
    background: linear-gradient(149deg, #D7E1EC, #FFFFFF, #D7E1EC);
}

.contentNoFooter {
    min-height: calc(100vh - 100px);
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    margin-block-start: 0;
    margin-block-end: 0;
}

.desktop {
    display: none;
}

.cnMain {
    color: #2E3092;
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
}

.btnAction {
    display: block;
    text-align: center;
    background-color: #2E3092;
    font-size: large;
    color: #FEFE00;
    border: none;
    padding: 2vh;
    border-radius: 5px;
    text-decoration: none;
}

.btnAction {
    font-size: x-large;
    transition-duration: 0.3s;
}

.btnAction:hover {
    transform: scale(1.1, 1.1);
}

@media (min-width: 900px) {
    .phone {
        display: none;
    }

    .desktop {
        display: block;
    }
}
</style>
