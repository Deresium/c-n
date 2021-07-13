<template>
    <div class="cnMain">
        <CnTitle>
            <h2>Login</h2>
        </CnTitle>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CnTitle from "../components/commons/CnTitle.vue";

export default defineComponent({
    components: {CnTitle},
    setup(){
        window.location.href = `
        https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?
        client_id=${process.env.VUE_APP_AZURE_APP_ID}&
        response_type=id_token&
        scope=openid&
        nonce=cn_${new Date().getTime()}&
        redirect_uri=${process.env.VUE_APP_URL_REDIRECT}
        `
    }
})
</script>

<style scoped>

</style>