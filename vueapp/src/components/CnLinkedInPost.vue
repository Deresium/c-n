<template>
    <div class="linkedinPost">
        <div class="title">
            <img class="linkedinLogo" src="../assets/icons/linkedin.png" alt="linkedin logo">
            <slot name="title"></slot>
        </div>
        <slot name="txt"></slot>
        <a
            class="btnAction"
            :href=postUrl
            target="_blank"
        >
            Découvrir le post
        </a>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CnTitle from "@/components/commons/CnTitle.vue";

export default defineComponent({
    components:{
      CnTitle
    },
    props:{
        postUrl:{
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>
    .linkedinPost{
        display: flex;
        flex-direction: column;
        margin-top: 3vh;
        padding: 2vh 5%;
        margin-bottom: 5vh;
        border: solid 3px #1686b0;
        border-radius: 25px;
    }

    .btnAction{
        margin-top: 3vh;
        background-color: #1686b0;
        color: white;
    }

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2vh;
    }

    .linkedinLogo{
        width: 15%;
        margin-right: 5%;
    }

    @media (min-width: 900px) {
        .btnAction{
            width: 80%;
        }

        .linkedinLogo{
            width: 10%;
        }

        .linkedinPost{
            padding: 2vh 2%;
            width: 30%;
        }
    }
</style>