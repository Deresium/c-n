<template>
    <div class="solutionFile">
        <slot name="title"></slot>
        <slot name="text"></slot>
        <a class="btnAction" :href="pathToPdfDownload" download>Télécharger</a>
        <a class="btnAction btnPreview" v-if="!isMobile" :href="pathToPdf" target="_blank" rel="noopener">Preview</a>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";

export default defineComponent({
    props:{
        fileUrl:{
            type: String,
            required: true
        }
    },
    setup(props){
        const preview = ref(false);
        const successLoaded = ref(false);

        const pathToPdf = computed(() => `${import.meta.env.VITE_APP_URL_CN}/solutionsfiles/${encodeURIComponent(props.fileUrl)}`);
        const pathToPdfDownload = computed(() => `${pathToPdf.value}?download=true`);
        const isMobile = computed(() => {
            const userAgent = navigator.userAgent;
            return userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
        })

        const showHidePreview = () => {
            preview.value = !preview.value
        }

        return{
            preview,
            successLoaded,
            pathToPdf,
            pathToPdfDownload,
            isMobile,
            showHidePreview
        }
    }
})
</script>

<style scoped>
    .solutionFile{
        border-left: 5px #FEFE00 solid;
        padding-left: 5%;
        margin-top: 4vh;
        margin-bottom: 4vh;
    }

    .btnAction{
        display: inline-block;
        font-size: medium;
        margin-top: 2vh;
        cursor: pointer;
    }

    button.btnAction{
        outline: none;
    }

    .btnPreview{
        margin-left: 3%;
    }
</style>