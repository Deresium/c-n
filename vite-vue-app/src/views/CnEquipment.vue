<template>
    <div>
        <CnTitle>
            <h2>Equipements</h2>
        </CnTitle>
        <div class="cnMain">
            <h3>
                Nos équipements professionnels sont au service de notre expertise et de notre expérience. Ils nous permettent de vous fournir un service
                de qualité qui s'adapte à toutes les situations.
            </h3>
            <section class="sectionRight">
                <cn-image-title title="Nacelle élévatrice" img-logo-extension="nacelle.png" :on-left="false"/>
                <div>
                    <p>
                        Pour les installations de câble en hauteur
                    </p>
                </div>
            </section>
            <section class="sectionLeft">
                <cn-image-title title="Testeur Fluke OTDR" img-logo-extension="OTDR.png" :on-left="true"/>
                <div>
                    <p>
                        Afin de tester la bonne conformité des liaisons fibre optique en fin de projet
                    </p>
                </div>
            </section>
            <section class="sectionRight">
                <cn-image-title title="Testeur Fluke Versiv" img-logo-extension="tester_cuivre.png" :on-left="false"/>
                <div>
                    <p>
                        Afin de tester la bonne conformité des liaisons cuivre en fin de projet
                    </p>
                </div>
            </section>
            <section class="sectionLeft">
                <cn-image-title title="Fluke IntelliTone" img-logo-extension="intelliTone.png" :on-left="true"/>
                <div>
                    <p>
                        Il nous permet de mapper les deux extrémités des liaisons cuivre qui ne sont pas identifiées
                        lors de nos audits réseaux layer 1
                    </p>
                </div>
            </section>
            <section class="sectionRight">
                <cn-image-title title="Ekahau Sidekick" img-logo-extension="sidekick.png" :on-left="false"/>
                <div>
                    <p>
                        Un outil de haute précision pour réaliser des mesures fiables lors de nos site surveys Wi-Fi
                    </p>
                </div>
            </section>
            <section class="sectionLeft">
                <cn-image-title title="Trépieds" img-logo-extension="triped.png" :on-left="true"/>
                <div>
                    <p>
                        Trépieds pour fixer l'Access Point lorsque nous réalisons des site surveys sur site (AP-On-A-Stick survey)
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CnTitle from "../components/commons/CnTitle.vue";
import CnImageTitle from "../components/commons/CnImageTitle.vue";

export default defineComponent({
    components: {
        CnTitle,
        CnImageTitle
    }
})
</script>

<style scoped>
    h2{
        font-family: 'Ace Sans', serif;
    }

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

        p{
            font-size: large;
        }
    }
</style>