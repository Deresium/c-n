<template>
    <cn-project-detail
            :img-logo-extension="'uliege/uliege.png'"
            :company="'Université de Liège'"
    >
        <template v-slot:clientQuote>
            <CnClientQuote
                client-name="Jérémie Dupont"
                client-position="Responsable des installations techniques et études – ULiège"
                url-pic="uliege/JDupont.jpg"
                quote="Disponibilité et conseils judicieux au rendez-vous. Travail soigné réalisé par des équipes compétentes."
            />
        </template>
        <template v-slot:txtPart1>
            <h3>Câblage des infrastructures</h3>
            <p>
                Nous avons réalisé de nombreux projets pour l’Université de Liège. Nous connaissons bien l’architecture et l’agencement des différents bâtiments.
                Cette relation nous permet de fournir une expertise technique avant la réalisation de nos installations, et toujours un travail d’une qualité irréprochable.
            </p>
            <p>
                &#10148; Pose de fibre optique (avec réalisation de la connectique par fusion) au sein des bâtiments;
            </p>
            <p>
                &#10148; Pose de fibre optique (avec réalisation de la connectique par fusion) entre bâtiments;
            </p>
            <p>
                &#10148; Pose de lignes cuivre (avec réalisation de la connectique) au sein des bâtiments;
            </p>
            <p>
                &#10148; Installation de racks informatiques;
            </p>
            <p>
                &#10148; Installation et raccordement d’UPS;
            </p>
            <p>
                &#10148; Installation d’Access Points Wi-Fi.
            </p>
        </template>
    </cn-project-detail>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnProjectDetail from "./CnProjectDetail.vue";
    import CnClientQuote from "./CnClientQuote.vue";

    export default defineComponent({
        components: {
            CnProjectDetail,
            CnClientQuote
        }
    })
</script>

<style scoped>

</style>