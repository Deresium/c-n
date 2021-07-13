<template>
    <cn-project-detail
        :img-logo-extension="'grace_hollogne/logo.png'"
        :company="'Grâce-Hollogne'"
        :img-extension1="'grace_hollogne/photo_1.png'"
    >
        <template v-slot:clientQuote>
            <CnClientQuote
                client-name="Audry Frisschen"
                client-position="Agent Technique en Chef - Administration Communale de Grâce-Hollogne"
                url-pic="grace_hollogne/client.jpeg"
                quote="Une analyse technique pertinente et maitrisée, des techniciens minutieux et efficaces. Merci pour la qualité du travail effectué au sein des bâtiments de l'Administration communale de Grâce-Hollogne"
            />
        </template>
        <template v-slot:txtPart1>
            <h3>Mise en place du réseau dans des écoles</h3>
            <p>
                Nous avons câblé et mis en place le réseau dans les écoles de la Commune de Grâce-Hollogne.
                Ce projet, visant à la mise en place d'internet pour éduquer les enfants au numérique, a fait appel à nos compétences :
            </p>
            <p>
                &#10148; Installation des racks informatique dans les écoles
            </p>
            <p>
                &#10148; Pose du câblage structuré cuivre des racks vers les différentes classes et réalisation de la connectique
            </p>
            <p>
                &#10148; Pose du câblage structuré fibre optique pour relier différents racks au sein d'une même école et réalisation de la connectique par fusion
            </p>
            <p>
                &#10148; Déplacement de l'équipement réseau du Fournisseur d'Accès Internet (FAI) dans nos racks pour centraliser les équipements réseaux
            </p>
            <p>
                &#10148; Installation et configuration d'un switch et d'un routeur Cisco pour permettre en utilisateurs de sortir sur internet
            </p>
            <p>
                &#10148; Installation d'UPS Eaton afin de sauvegarder les équipements réseaux en cas de coupure de courant
            </p>
            <p>
                Il s'agissait donc d'un projet où la Commune de Grâce-Hollogne n'a eu besoin de faire appel qu'à <span class="bold">un seul intervenant</span>
                pour la réalisation du câblage structuré et la configuration du réseau : <span class="bold">Cable & Network</span>.
            </p>
        </template>

    </cn-project-detail>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CnProjectDetail from "@/views/projects/CnProjectDetail.vue";
import CnClientQuote from "@/views/projects/CnClientQuote.vue";

export default defineComponent({
    components: {
        CnProjectDetail,
        CnClientQuote
    }
})
</script>

<style scoped>
    .bold{
        font-weight: bold;
    }

</style>