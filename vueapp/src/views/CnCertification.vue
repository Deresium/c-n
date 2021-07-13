<template>
    <div>
        <CnTitle>
            <h2>Attestations et certifications</h2>
        </CnTitle>
        <div class="cnMain">
            <section class="certifBloc">
                <CnTitle>
                    <h3>Nos certifications individuelles</h3>
                </CnTitle>
                <div class="certifications inlineBloc">
                    <div class="certification">
                        <img src="../assets/certification/VCA.png" alt="vca"/>
                        <h4>VGM Checklist Aannemers</h4>
                        <p>Tous nes collaborateurs disposent du VCA - confirmant leurs connaissances en sécurité à appliquer dans l'environnement de travail</p>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/CCENT.png" alt="ccent"/>
                        <h4>Cisco Certified Entry Networking Technician</h4>
                        <p>Nicolas Steinbusch - CSCO13436591</p>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/ECSE_Design.svg" alt="ecse"/>
                        <h4>Ekahau Certified Survey Engineer</h4>
                        <p>Nicolas Steinbusch - ECSE#998</p>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/CCNA.png" alt="ccna"/>
                        <h4>Cisco Certified Network Associate (CCNA)</h4>
                        <p>Nicolas Steinbusch - CSCO13436591</p>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/MCDE.png" alt="mcde"/>
                        <h4>Milestone Certified Design Engineer (MCDE)</h4>
                        <p>Nicolas Steinbusch</p>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/MCIT.png" alt="mcit"/>
                        <h4>Milestone Certified Integration Technician (MCIT)</h4>
                        <p>Nicolas Steinbusch</p>
                    </div>
                </div>
            </section>

            <section class="certifBloc">
                <CnTitle>
                    <h3>Nos Partnerships fournisseurs</h3>
                </CnTitle>
                <div class="partners inlineBloc">
                    <img class="partner" src="../assets/certification/rm_partner.png" alt="rm partner"/>
                    <img class="partner" src="../assets/certification/cisco_partner.png" alt="cisco partner"/>
                    <img class="partner" src="../assets/certification/commscope.png" alt="commscope"/>
                    <img class="partner" src="../assets/newsMilestone.png" alt="milestone partner"/>
                    <img class="partner" src="../assets/certification/eaton_reseller.png" alt="eaton partner"/>
                    <img class="partner" src="../assets/certification/ekahau_partner.png" alt="ekahau partner"/>
                    <img class="partner" src="../assets/certification/dahua_partner.png" alt="dahua partner"/>
                </div>
            </section>

            <section class="certifBloc">
                <CnTitle>
                    <h3>Nos agréations</h3>
                </CnTitle>
                <div class="agregations inlineBloc">
                    <div class="agregation">
                        <h4>Enregistrement comme entrepreneur</h4>
                        <img src="../assets/certification/entrepreneur.png" alt="entrepreneur"/>
                    </div>
                    <div class="agregation">
                        <h4>Attestation Agréation Classe 1, 2 et 3: 1P2 - 1S3 - 2S4 - 3P1+1P3+1S1</h4>
                        <img src="../assets/certification/certif_1.jpg" alt="certif 1"/>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CnTitle from "@/components/commons/CnTitle.vue";

export default defineComponent({
    components:{
        CnTitle
    }
})

</script>

<style scoped>
    h2{
        font-family: 'Ace Sans', serif;
    }

    .certification img{
        width: 80%;
        margin-bottom: 2vh;
    }

    .certification{
        text-align: center;
        margin-bottom: 10vh;
    }

    img.partner{
        width: 100%;
        margin-bottom: 5vh;
    }

    .agregation img{
        width: 100%;
        margin-top: 2vh;
    }

    .agregation{
        margin-bottom: 10vh;
        text-align: center;
    }

    @media(min-width: 900px){

        .certifBloc{
            width: 100%;
        }

        .inlineBloc{
            display: flex;
            justify-content: space-between;
            align-items: center;

        }

        .partners{
            overflow-x: scroll;
        }

        .certifications{
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

        .certification{
            width: 25%;
            margin-bottom: 5vh;
        }

        img.partner{
            width: 20%;
            margin-bottom: 0;
        }

        .partner:not(:first-child){
            margin-left: 10%;
        }

        .agregations{
            align-items: flex-start;
        }

        .agregation{
            width: 40%;
        }
    }
</style>