<template>
    <div>
        <CnTitle>
            <h2>News</h2>
        </CnTitle>
        <div class="cnMain">
            <h3>N'oubliez pas de nous suivre sur LinkedIn</h3>
            <a class="btnAction btnFollowLinkedIn" href="https://www.linkedin.com/company/cableandnetwork/" rel="noopener" target="_blank">
                <img src="/icons/linkedin.png" alt="logo linkedin"/>
                Follow
            </a>
            <div class="posts">
                <CnLinkedInPost post-url="https://www.linkedin.com/feed/update/urn:li:activity:6694876731293122560">
                    <template v-slot:title>
                        <h3>WI-FI 6</h3>
                    </template>
                    <template v-slot:txt>
                        <p>
                            La nouvelle norme Wi-Fi : Wi-Fi 6 (ou 802.11ax) est de plus en plus présente sur le marché.
                            Les Access Points et les clients (smartphones, PCs,...) les plus récents embarquent cette technologie.
                        </p>
                    </template>
                </CnLinkedInPost>
                <CnLinkedInPost post-url="https://www.linkedin.com/feed/update/urn:li:activity:6692377974500601856">
                    <template v-slot:title>
                        <h3>Solution Wi-Fi Outdoor</h3>
                    </template>
                    <template v-slot:txt>
                        <p>
                            Vous disposez d'un espace en plein air et vous souhaitez pouvoir offrir à vos collaborateurs et/ou clients du Wi-Fi externe <span class="nobreak">sécurisé ?</span>
                        </p>
                        <p>
                            Nous mettons en place la solution qui correspond le mieux à vos <span class="nobreak">besoins !</span>
                        </p>
                    </template>
                </CnLinkedInPost>
                <CnLinkedInPost post-url="https://www.linkedin.com/feed/update/urn:li:activity:6689803189803368448">
                    <template v-slot:title>
                        <h3>Liaison fibre optique inter-boîtiers</h3>
                    </template>
                    <template v-slot:txt>
                        <p>
                            Réalisation d’une liaison fibre optique 48 x OM3 pour relier 2 boîtiers au sein d'une entreprise.
                        </p>
                    </template>
                </CnLinkedInPost>
                <CnLinkedInPost post-url="https://www.linkedin.com/feed/update/urn:li:activity:6684734248932450305">
                    <template v-slot:title>
                        <h3>Nouveaux équipements de travail</h3>
                    </template>
                    <template v-slot:txt>
                        <p>
                            Pour bien commencer l'été, nos équipes ont reçu de nouveaux vêtements de travail aux couleurs de Cable & Network!
                        </p>
                    </template>
                </CnLinkedInPost>
                <CnLinkedInPost post-url="https://www.linkedin.com/feed/update/urn:li:activity:6681549911034478592">
                    <template v-slot:title>
                        <h3>Installation et Configuration de switches Cisco C9200L</h3>
                    </template>
                    <template v-slot:txt>
                        <p>
                            Premier projet important avec la nouvelle gamme de switches Catalyst 9000 de Cisco.
                            Installation et configuration de + de 25 switches C9200L et C9500.
                        </p>
                    </template>
                </CnLinkedInPost>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CnTitle from "../components/commons/CnTitle.vue";
import CnLinkedInPost from "../components/CnLinkedInPost.vue";

export default defineComponent({
    components: {
        CnTitle,
        CnLinkedInPost
    }
})

</script>

<style scoped>
    h2{
        font-family: 'Ace Sans', serif;
    }

    h3{
        width: 85%;
    }

    .btnFollowLinkedIn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        margin-top: 5%;
    }

    .btnFollowLinkedIn img{
        width: 20%;
        margin-right: 5%;
    }

    .nobreak{
        white-space: nowrap;
    }

    @media(min-width: 900px){
        .btnFollowLinkedIn img{
            width: 10%;
        }

        .btnFollowLinkedIn{
            width: 20%;
            margin-top: 2vh;
        }

        .posts{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

    }
</style>