<template>
    <CnTitle>
        <router-link to="/gallery">
            <img src="../../assets/icons/arrow.svg" alt="arrow icon"/>
        </router-link>
        <h2>{{title}}</h2>
    </CnTitle>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnTitle from "@/components/commons/CnTitle.vue";

    export default defineComponent({
        components: {
            CnTitle
        },
        props:{
            title:{
                type: String,
                required: true
            }
        }
    })
</script>

<style scoped>
    img{
        transform: scaleX(-1);
        height: 5vh;
    }

    a{
        display: block;
        margin-right: 10%;
    }
</style>