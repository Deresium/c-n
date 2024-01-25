<template>
    <CnProjectDetail
        :img-logo-extension="'province_liege/liege_logo.png'"
        :company="'Province de Liège'"
    >
        <template v-slot:txtPart1>
            <h3>Profite de nos différentes solutions</h3>
            <p>
                La Province de Liège est un client qui profite des différentes solutions que nous proposons,
                aussi bien en IT Infrastructure qu’en Networking ou Power Supply Solutions.
                Nous avons opéré des site surveys Wi-Fi (Design prédictif sur plans et AP-On-A-Stick sur site) en vue de
                l’implémentation de réseaux sans fil sur différents sites. Nous avons également réalisé de nombreux
                projets de câblage cuivre et fibre optique.
            </p>
        </template>
        <template v-slot:txtPart2>
            <h3>Projets réalisés</h3>
            <p>
                Parmis les projets réalisés:
            </p>
            <p>
                &#10148; Déploiement d’un réseau Wi-Fi à l’École de Police de Seraing (Site Survey – Réalisation du
                câblage – Installation des access points)
            </p>
            <p>
                &#10148; Pose de liaisons cuivre pour l’IP téléphonie dans diverses écoles
            </p>
            <p>
                &#10148; Liaisons inter-racks en fibre optique
            </p>
            <p>
                &#10148; Fourniture et installation d’UPS Eaton
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