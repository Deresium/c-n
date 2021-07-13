<template>
    <div>
        <CnTitle>
            <h2>Projets et témoignages clients</h2>
        </CnTitle>
        <div class="cnMain">
            <h3>
                Cette page présente les différents projets que nous avons réalisés pour nos clients. Elle est encore en cours de construction, nous avons de nombreux projets à vous faire découvrir.
            </h3>
            <CnArrowList :link="'/projets/wdc'" :img-name-extension="'projects/wdc/wdc.png'" :catch-phrase="'Wallonie Data Center'" :company="'WDC'"/>
            <CnArrowList :link="'/projets/provinceLiege'" :img-name-extension="'projects/province_liege/liege_logo.png'" :catch-phrase="'Profite de plusieurs de nos solutions'" :company="'Province de Liège'"/>
            <CnArrowList :link="'/projets/mestdagh'" :img-name-extension="'projects/mestdagh/logo.png'" :catch-phrase="'Réalisation de câblage cuivre et fibre optique'" :company="'Groupe Mestdagh'"/>
            <CnArrowList :link="'/projets/gracehollogne'" :img-name-extension="'projects/grace_hollogne/logo.png'" :catch-phrase="'Mise en place du réseau dans des écoles'" :company="'Grâce-Hollogne'"/>
            <CnArrowList :link="'/projets/uliege'" :img-name-extension="'projects/uliege/uliege.png'" :catch-phrase="'Câblage des infrastructures'" :company="'Université de Liège'"/>
            <CnArrowList :link="'/projets/vesuvius'" :img-name-extension="'projects/vesuvius/vesuvius.png'" :catch-phrase="'Remplacement des armoires réseau en milieu industriel avec transfert des équipements et des liaisons fibre optique'" :company="'Vesuvius'"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnTitle from "@/components/commons/CnTitle.vue";
    import CnArrowList from "@/components/commons/CnArrowList.vue";

    export default defineComponent({
        components: {
            CnTitle,
            CnArrowList
        }
    })
</script>

<style scoped>
    h2{
        font-family: 'Ace Sans', serif;
    }

    h3{
        margin-bottom: 2vh;
    }
</style>