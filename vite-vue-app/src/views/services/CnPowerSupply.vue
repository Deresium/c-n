<template>
    <div>
        <cn-service-title :imgName="'power_supply'" :title="'Power supply'"/>
        <div class="cnMain">
            <h3>
                Nous protégeons vos éléments actifs de réseaux (switches, routeurs et firewalls) et vos ressources (serveurs, machines virtuelles,...) des coupures d'alimentation électrique grâce à l'installation d'UPS Eaton.
            </h3>
            <section class="sectionRight">
                <cn-image-title title="UPS Eaton" img-logo-extension="Upseaton.png" :on-left="false"/>
                <div>
                    <p>
                        Les UPS Eaton sont disponibles en format Tower (Standalone) ou Rackable 19". Ils s'adaptent à vos besoins, avec des modèles allant de
                        700VA à 11kVA. Nous les installons dans vos salles informatiques (et réalisons la liaison au bornier électrique) pour assurer la protection de vos équipements en cas de coupure de courant.
                    </p>
                </div>
            </section>
            <section class="sectionLeft">
                <cn-image-title title="By-Pass externes Eaton" img-logo-extension="Bypasseaton.png" :on-left="true"/>
                <div>
                    <p>
                        Les By-pass externes permettent la maintenance des UPS Eaton (remplacement des batteries, troubleshooting,...),
                        tout en maintenant l'alimentation électrique des équipements.
                    </p>
                </div>
            </section>
            <section class="sectionRight">
                <cn-image-title title="Carte SNMP" img-logo-extension="carteSnmp.png" :on-left="false"/>
                <div>
                    <p>
                        Les cartes SNMP permettent le management des UPS sur le réseau.
                        Elles facilitent et centralisent la gestion de votre parc d'UPS. Cable & Network installe et configure ces cartes.
                    </p>
                    <p>
                        Les cartes SNMP couplées avec le logiciel IPM d’Eaton permettent d’éteindre vos serveurs et applicatifs automatiquement
                        et en toute sécurité si la panne électrique venait à se prolonger.
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnServiceTitle from "./CnServiceTitle.vue";
    import CnImageTitle from "../../components/commons/CnImageTitle.vue";

    export default defineComponent({
        components:{
            CnServiceTitle,
            CnImageTitle
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