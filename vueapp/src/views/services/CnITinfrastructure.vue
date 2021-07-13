<template>
    <div>
        <cn-service-title :imgName="'connector'" :title="'IT Infrastructure'"/>
        <div class="cnMain">
            <h3>
                Depuis plus de 25 ans, nos équipes sont spécialisées dans l’installation d’infrastructures réseaux passives (cuivre et fibre optique).
                Notre expertise et notre expérience sont reconnues nationalement et même au-delà des frontières. Découvrez-en davantage sur nos solutions...
            </h3>
            <section class="sectionRight">
                <cn-image-title title="Câblage structuré cuivre" img-logo-extension="Cablagecuivre.png" :on-left="false"/>
                <div>
                    <p>
                        Le câblage structuré cuivre (Câblage Ethernet) n’a plus aucun secret pour nous. Nous réalisons l'étude des besoins en prises réseaux (dans les bureaux, au sein de l'usine,...),
                        la pose des câbles du rack vers les utilisateurs (avec la réalisation des percements et les poses de chemins de câbles nécessaires) et la connectique.
                    </p>
                    <p>
                        Toutes les lignes sont ensuite testées pour garantir leur bonne conformité.
                    </p>
                    <p>
                        Un rapport reprenant l'emplacement des prises et les tests vous est systématiquement remis en fin de chantier.
                    </p>
                </div>
            </section>
            <section class="sectionLeft">
                <cn-image-title title="Câblage structuré fibre optique" img-logo-extension="cablagefibre.png" :on-left="true"/>
                <div>
                    <p>
                        Le câblage cuivre est limité à 90m. Quand on dépasse cette distance, le câblage structuré fibre optique est la solution idéale.
                        Nous réalisons des backbones fibre optique reliant vos racks, vos bâtiments,... .
                        Les backbones en fibre optique permettent la mise en place d'un réseau rapide, efficace et redondant.
                    </p>
                    <p>
                        Notre expérience nous permet de réaliser des câblages en fibre optique dans tous types d'environnements : bureaux, usines, en aérien, en canalisation,... .
                    </p>
                    <p>
                        Nous ne laissons rien au hasard, nous étudions les cheminements possibles, protégeons la fibre au maximum (pose sous jet-tubes pour fibre souterraine, pose sous gaines dans les usines,...)
                        et réalisons les percements nécessaires. La connectique par fusion est ensuite réalisée par nos techniciens experts dans le domaine.
                    </p>
                    <p>
                        Toutes les liaisons sont testées (tests OTDR) pour garantir leur bonne conformité.
                    </p>
                    <p>
                        Un rapport reprenant les racks reliés par les différentes liaisons fibre et les résultats des tests OTDR vous est systématiquement remis en fin de chantier.
                    </p>
                </div>
            </section>
            <section class="sectionRight">
                <cn-image-title title="Câblage de Data Centers" img-logo-extension="data_center.png" :on-left="false"/>
                <div>
                    <p>
                        Les Data Centers connaissent une croissance exponentielle depuis quelques années.
                        Ils permettent aux utilisateurs d’applications de profiter d’une flexibilité inégalée.
                    </p>
                    <p>
                        Les Data Centers doivent être capables de fournir une qualité de service irréprochable à leurs clients.
                        C’est pourquoi nos techniciens sont formés et spécialisés dans le câblage de Data Centers.
                    </p>
                </div>
            </section>
            <section class="sectionLeft">
                <cn-image-title title="Racks Informatique" img-logo-extension="rackinformatique.png" :on-left="true"/>
                <div>
                    <p>
                        Les racks informatiques font partie intégrante des infrastructures réseaux.
                        Ils permettent de centraliser le câblage cuivre, les liaisons fibre optique et les équipements réseaux.
                    </p>
                    <p>
                        Nous installons tous types de racks en fonction des besoins. Notre gamme s’étend de petits racks 6U pour des installations ponctuelles,
                        à des racks 49U pour des salles serveurs ou des data centers.
                    </p>
                </div>
            </section>
            <section class="sectionRight">
                <cn-image-title title="Audit Réseau Layer 1" img-logo-extension="auditLayer1.png" :on-left="false"/>
                <div>
                    <p>
                        Les infrastructures réseaux se complexifient généralement au fil du temps.
                        On pose rapidement une nouvelle ligne pour un nouvel employé, on installe un mini-switch d’appoint dans un bureau,... .
                    </p>
                    <p>
                        Toutes ces modifications peuvent entrainer des pertes de qualité qui impactent tous les utilisateurs du réseau,
                        et il est souvent difficile d’en déceler la cause.
                    </p>
                    <p>
                        Lors de nos audits réseaux, nous testons vos liaisons cuivre et fibre optique,
                        et relevons les incohérences d’installations (mini-switches en série, prises volantes,...).
                    </p>
                    <p>
                        À la fin de l’audit, nous vous remettons un rapport reprenant nos conclusions et nos propositions d’améliorations.
                        Nous vous accompagnons et vous dirigeons vers nos solutions adéquates pour retrouver un réseau de qualité.
                    </p>
                </div>
            </section>
            <section class="sectionLeft">
                <cn-image-title title="Solutions Multimédias" img-logo-extension="solutionMultimedia.png" :on-left="true"/>
                    <div>
                        <p>
                            Une salle de réunion interactive permet de mieux communiquer entre collaborateurs.
                            Projecteurs et écrans pour diffuser des présentations, vidéoconférence pour être en contact avec des collègues distants, système audio performant, ... .
                        </p>
                        <p>
                            Après une étude de vos besoins, nous installons et la configurons les solutions multimédias sur-mesure au sein de vos salles de réunions, bureaux, ... .
                        </p>
                    </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnImageTitle from "@/components/commons/CnImageTitle.vue";
    import CnServiceTitle from "@/views/services/CnServiceTitle.vue";

    export default defineComponent({
        components: {
            CnImageTitle,
            CnServiceTitle
        }
    })
</script>

<style scoped>
    section{
        margin-bottom: 7vh;
    }

    p{
        margin-top: 1vh;
    }

    h3{
        margin-bottom: 5vh;
    }

    @media(min-width: 900px){
        section{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        section > *:nth-child(2){
            width: 48%;
        }

        section > *:first-child{
            width: 50%;
        }

        .sectionLeft{
            flex-direction: row-reverse;
        }
    }
</style>