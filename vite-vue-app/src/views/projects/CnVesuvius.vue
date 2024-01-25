<template>
    <cn-project-detail
        company="Vesuvius"
        img-logo-extension="vesuvius/vesuvius.png"
    >
        <template v-slot:clientQuote>
            <CnClientQuote
                client-name="Kris Baert"
                client-position="IT Operations Applications Analyst - Western Europe - Vesuvius"
                quote="Thanks a lot for the great work you did in Feignies. It looks all very good and professional."
            />
        </template>
        <template v-slot:txtPart1>
            <h3>Remplacement des armoires réseau en milieu industriel avec transfert des équipements et des liaisons fibre optique; Design du backbone fibre optique</h3>
            <p>
                &#10148; Préparation du projet capitale: Définition de la taille de racks la mieux adaptée, repérage et tests.
            </p>
            <p>
                &#10148; Découpe des racks existants avec mise en sécurité des alimentations et éléments à transférer
            </p>
            <p>
                &#10148; Installation des nouveaux racks avec réinstallation des alimentations et câblages cuivre et fibre optique
            </p>
            <p>
                &#10148; Nettoyage des connexions fibre optique et tests OTDR
            </p>
            <p>
                &#10148; Repatching et identifications claires (plaques gravées)
            </p>
            <p>
                &#10148; Réalisation du design du backbone fibre optique
            </p>
        </template>

    </cn-project-detail>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CnProjectDetail from "./CnProjectDetail.vue";
import CnClientQuote from "./CnClientQuote.vue";

export default defineComponent({
    components:{
        CnClientQuote,
        CnProjectDetail
    }
})
</script>

<style scoped>

</style>