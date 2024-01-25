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
                        <p>Nos collaborateurs disposent du VCA - confirmant leurs connaissances en sécurité à appliquer dans l'environnement de travail</p>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/BA4.png" alt="ba4"/>
                        <h4>BA4</h4>
                        <p>Nos collaborateurs disposent du BA4 – confirmant leur capacité à évaluer correctement les dangers présentés par une installation/un appareil électrique</p>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/CCNA.png" alt="ccna"/>
                        <h4>Cisco Certified Network Associate (CCNA)</h4>
                        <p>Nicolas Steinbusch - CSCO13436591</p>
                        <a class="refCertif" href="https://www.credly.com/badges/9df7590e-9965-401d-a125-29fa932f1b30/public_url" target="_blank" rel="noopener">lien vers le certificat</a>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/CBROPSA.png" alt="cbropsa"/>
                        <h4>Cisco Certified CyberOps Associate</h4>
                        <p>Nicolas Steinbusch - CSCO13436591</p>
                        <a class="refCertif" href="https://www.credly.com/badges/9322d5bb-c4f6-4388-9b44-cfc8533a8a72/public_url" target="_blank" rel="noopener">lien vers le certificat</a>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/MCDE.png" alt="mcde"/>
                        <h4>Milestone Certified Design Engineer (MCDE)</h4>
                        <p>Nicolas Steinbusch</p>
                        <a class="refCertif" href="https://eu.badgr.com/public/assertions/B6_vz55OR2-sSjX8PYcq9g?identity__email=nicolas.steinbusch@c-n.be" target="_blank" rel="noopener">lien vers le certificat</a>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/MCIT.png" alt="mcit"/>
                        <h4>Milestone Certified Integration Technician (MCIT)</h4>
                        <p>Nicolas Steinbusch</p>
                        <a class="refCertif" href="https://eu.badgr.com/public/assertions/B6_vz55OR2-sSjX8PYcq9g?identity__email=nicolas.steinbusch@c-n.be" target="_blank" rel="noopener">lien vers le certificat</a>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/Genetec_Video_Management_Solution.png" alt="genetec video"/>
                        <h4>Genetec Certified – Video Management Solution</h4>
                        <p>Nicolas Steinbusch</p>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/Genetec_access_Control_System.png" alt="genetec control"/>
                        <h4>Genetec Certified – Access Control System</h4>
                        <p>Nicolas Steinbusch</p>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/ECSE.png" alt="ecse"/>
                        <h4>Ekahau Certified Survey Engineer</h4>
                        <p>Nicolas Steinbusch - ECSE#998</p>
                        <a class="refCertif" href="https://www.credly.com/badges/a1990195-c69b-40c9-957f-f7978ebde467/public_url" target="_blank" rel="noopener">lien vers le certificat</a>
                    </div>
                    <div class="certification">
                        <img src="../assets/certification/CWNA.png" alt="cwna"/>
                        <h4>Certified Wireless Network Administrator</h4>
                        <p>Nicolas Steinbusch</p>
                        <a class="refCertif" href="https://certified.certitrek.com/7e806951-95b8-4b47-875c-4743162c2a86#gs.q3b5hx" target="_blank" rel="noopener">lien vers le certificat</a>
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
import CnTitle from "../components/commons/CnTitle.vue";

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

    .refCertif{
        color: #2E3092;
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