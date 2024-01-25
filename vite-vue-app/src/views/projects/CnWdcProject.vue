<template>
    <CnProjectDetail
        :img-logo-extension="'wdc/wdc.png'"
        :company="'WDC'"
        :img-extension1="'wdc/wdc_1.jpg'"
        :img-extension2="'wdc/wdc_2.png'"
    >
        <template v-slot:txtPart1>
            <h3>Travail d'une qualité professionnelle</h3>
            <p>
                Nous avons réalisé de nombreux projets de câblage cuivre et fibre optique
                pour les clients du Wallonie Data Center (Villers-le-Bouillet). Lors de ces projets,
                nos techniciens réseaux mettent à contribution tout leur savoir-faire et leurs compétences pour fournir
                un travail d’une qualité professionnelle.
            </p>
        </template>

        <template v-slot:txtPart2>
            <h3>Projet standard au sein du WDC</h3>
            <p>
                Un projet standard au sein du WDC suit généralement ce processus :
            </p>
            <p>
                &#10148; Planification et fourniture du matériel
            </p>
            <p>
                &#10148; Pose des câbles cuivre ou des câbles fibre optique entre les différents racks
            </p>
            <p>
                &#10148; Réalisation de la connectique cuivre ou de la fusion de la fibre
            </p>
            <p>
                &#10148; Tests des liaisons selon les normes ISO/IEC avec des testeurs Fluke (Versiv ou OTDR) calibrés
            </p>
            <p>
                &#10148; Remise du rapport de tests au client
            </p>
        </template>

    </CnProjectDetail>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CnProjectDetail from "./CnProjectDetail.vue";

export default defineComponent({
    components: {
        CnProjectDetail
    }
})
</script>

<style scoped>

</style>