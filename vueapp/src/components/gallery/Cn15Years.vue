<template>
    <div>
        <CnGalleryDetail :title="'15 ans'" :enumGallery="enumGallery"/>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnGalleryDetail from "@/components/gallery/CnGalleryDetail.vue";
    import {Galleries} from '@/business/enums/Galleries';

    export default defineComponent({
        components:{
            CnGalleryDetail
        },
        setup() {
            const enumGallery = Galleries.FIFTEENYEARS;
            return{
                enumGallery
            }
        }
    })
</script>

<style scoped>

</style>