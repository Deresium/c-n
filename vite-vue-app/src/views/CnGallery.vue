<template>
    <div>
        <CnTitle>
            <h2>Gallery</h2>
        </CnTitle>
        <div class="cnMain">
            <CnArrowList :link="'/gallery/15years'" :img-name-extension="'gallery/15years/outside_3.jpg'" :catch-phrase="'Les 15 ans de la société'" :company="'15 ans'"/>
            <CnArrowList :link="'/gallery/10years'" :img-name-extension="'gallery/10years/IMG_6541.jpg'" :catch-phrase="'Les 10 ans de la société'" :company="'10 ans'"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnTitle from "../components/commons/CnTitle.vue";
    import CnArrowList from "../components/commons/CnArrowList.vue";

    export default defineComponent({
        components: {
            CnTitle,
            CnArrowList
        }
    })
</script>

<style scoped>

</style>