<template>
    <CnProjectDetail
        :img-logo-extension="'mestdagh/logo.png'"
        :company="'Groupe Mestdagh'"
    >
        <template v-slot:txtPart1>
            <h3>Réalisation de câblage cuivre et fibre optique</h3>
            <p>
                Nous réalisons le câblage cuivre et fibre optique dans de nombreux magasins Mestdagh. Nos projets avec ce client concernent :
            </p>
            <p>
                &#10148; Le câblage de nouveaux magasins (avec suivi des réunions de chantiers et des modifications)
            </p>
            <p>
                &#10148; La pose de nouveaux câbles dans des magasins déjà existants
                (pour ajouter une fonctionnalité connectée facilitant le travail des collaborateurs au sein du groupe par exemple)
            </p>
            <p>
                &#10148; L’installation d’access points et de beacons
            </p>
            <p>
                &#10148; La pose ou le déplacement de certaines lignes en vue d’une réorganisation du magasin
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