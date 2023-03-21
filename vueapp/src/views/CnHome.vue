<template>
    <div>
        <div class="divTitle">
            <div class="fullTitle">
                <h1 class="hTitle">
                    Cable & Network
                </h1>
                <h2 class="hSubTitle">
                    IT Infrastructure | Power Supply | Network | Security
                </h2>
            </div>
            <img class="heroImg" src="../assets/heroPicture.png" alt="hero picture"/>
        </div>

        <div class="cnMain">
            <div class="inCover">
                <h3 class="phone">A la une</h3>
                <img src="../assets/Photo_Page_Accueil.png" alt="news_pic"/>
                <div class="inCoverContent">
                    <h3 class="desktop">A la une</h3>
                    <h4>Infrastructure Solution Day - Jeudi 27 Avril 2023</h4>
                    <div class="infraDayInfo">
                        <p><img class="iconInfra" src="../assets/icons/calendar.svg" alt="calendar icon"/> Jeudi 27 avril 2023 - de 10h à 18h</p>
                        <p><img class="iconInfra" src="../assets/icons/placeholder.svg" alt="placeholder icon"/> Avenue Albert 1er, 14 - 4500 Huy</p>
                        <p><img class="iconInfra" src="../assets/icons/dinner.svg" alt="dinner icon"/> Un buffet et une sélection de vins durant toute la journée</p>
                        <p>
                            <img class="iconInfra" src="../assets/icons/booth.svg" alt="booth icon"/>
                            <span class="infoWithLink">
                            Programme de la journée disponible sur
                            <router-link class="programmeLink" :to="{name: 'programme'}">c-n.be/programme</router-link>
                        </span>
                        </p>
                        <p>
                            <router-link class="inscriptionLink" :to="{name: 'inscription'}">S'inscrire</router-link>
                        </p>
                    </div>
                </div>
            </div>

            <div class="divFour divServices">
                <h3>Solutions</h3>
                <div class="mainFour mainServices">
                    <router-link class="squareFour serviceSquare" to="/services/ITinfrastructure">
                        <h4>IT Infrastructure</h4>
                        <img src="../assets/icons/connectorYellow.svg" alt="connector"/>
                    </router-link>
                    <router-link class="squareFour serviceSquare" to="/services/powersupply">
                        <h4>Power Supply</h4>
                        <img class="spark" src="../assets/icons/sparkYellow.svg" alt="spark"/>
                    </router-link>
                    <router-link class="squareFour serviceSquare" to="/services/network">
                        <h4>Network</h4>
                        <img src="../assets/icons/networkYellow.svg" alt="network"/>
                    </router-link>
                    <router-link class="squareFour serviceSquare" to="/services/security">
                        <h4>Security</h4>
                        <img src="../assets/icons/cameraYellow.svg" alt="camera"/>
                    </router-link>
                </div>
            </div>

            <div class="divFour divProjects">
                <h3>Projets - Ils nous font confiance</h3>
                <div class="mainFour divProjects">
                    <router-link class="squareFour projectSquare" to="/projets/wdc">
                        <h4>WDC</h4>
                        <img src="../assets/projects/wdc/wdc.png" alt="WDC"/>
                    </router-link>
                    <router-link class="squareFour projectSquare" to="/projets/provinceLiege">
                        <h4>Province de Liège</h4>
                        <img src="../assets/projects/province_liege/liege_logo.png" alt="Province liège"/>
                    </router-link>
                    <router-link class="squareFour projectSquare" to="/projets/uliege">
                        <h4>ULiège</h4>
                        <img src="../assets/projects/uliege/uliege.png" alt="uliege"/>
                    </router-link>
                    <router-link class="squareFour projectSquare" to="/projets/gracehollogne">
                        <h4>Grâce-Hollogne</h4>
                        <img src="../assets/projects/grace_hollogne/logo.png" alt="Grâce-Hollogne"/>
                    </router-link>
                </div>
                <router-link class="btnShowAllProjects btnAction" to="/projets">Voir tous les projets</router-link>
            </div>

            <div class="divBrands">
                <h3>Nos marques</h3>
                <div class="brandsLogo">
                    <a href="https://www.cisco.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/cisco.svg" alt="cisco"/>
                    </a>
                    <a href="https://www.fortinet.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/fortinet.png" alt="fortinet"/>
                    </a>
                    <a href="https://www.phoenixcontact.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/phoenix_contact.png" alt="phoenix contact"/>
                    </a>
                    <a href="https://www.rdm.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/R&M.png" alt="R&M"/>
                    </a>
                    <a href="https://www.rittal.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/rittal.png" alt="rittal"/>
                    </a>
                    <a href="https://www.eaton.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/eaton.png" alt="eaton"/>
                    </a>
                    <a href="https://www.excel-networking.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/excel.png" alt="excel"/>
                    </a>
                    <a href="https://patchbox.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/patchbox.png" alt="patchbox"/>
                    </a>
                    <a href="https://www.assmann.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/digitus.png" alt="digitus"/>
                    </a>
                    <a href="https://www.ekahau.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/ekahau.png" alt="ekahau"/>
                    </a>
                    <a href="https://fr.commscope.com/ruckus/" rel="noopener" target="_blank">
                        <img src="../assets/brands/ruckus.png" alt="ruckus"/>
                    </a>
                    <a href="https://www.ui.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/ubiquiti.png" alt="ubiquiti"/>
                    </a>
                    <a href="https://www.milestonesys.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/milestone.png" alt="milestone"/>
                    </a>
                    <a href="https://www.genetec.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/genetec.png" alt="genetec"/>
                    </a>
                    <a href="https://hanwha-security.eu/" rel="noopener" target="_blank">
                        <img src="../assets/brands/hanwha.png" alt="hanwha"/>
                    </a>
                    <a href="https://vanderbiltindustries.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/vanderbilt.png" alt="vanderbilt"/>
                    </a>
                    <a href="https://www.assaabloy.com/" rel="noopener" target="_blank">
                        <img src="../assets/brands/assa_abloy.png" alt="assa abloy"/>
                    </a>
                    <a href="https://www.2n.cz" rel="noopener" target="_blank">
                        <img src="../assets/brands/2N.png" alt="2N"/>
                    </a>
                </div>
            </div>

            <div class="divBrands">
                <h3>Nos partenaires commerciaux</h3>
                <div class="brandsLogo divPartners">
                    <a href="https://www.civadis.be/" rel="noopener" target="_blank">
                        <img src="../assets/brands/civadis.png" alt="civadis"/>
                    </a>
                    <a href="https://www.bemac.be/" rel="noopener" target="_blank">
                        <img src="../assets/brands/bemac.png" alt="bemac"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import store from "@/store/store";

export default defineComponent({
    setup() {
        const userRole = computed(() => store.getters['login/getRole']);
        return {
            userRole
        }
    }
})
</script>

<style scoped>
/* Header Title */
.divTitle {
    margin-top: 2vh;
    color: #FEFE00;
    position: relative;
}

.fullTitle {
    position: absolute;
    z-index: 1;
    text-align: center;
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
}

.hTitle {
    font-size: x-large;
    font-weight: 300;
    font-family: 'Ace Sans', serif;
}

.hSubTitle {
    font-size: large;
    font-weight: 300;
    font-family: 'Ace Sans', serif;
}

.heroImg {
    width: 100%;
    z-index: 0;
}

/* News */
.inCover {
    margin-top: 2vh;
    color: #2E3092;
}

.btnSubscription {
    margin-top: 2vh;
    width: 50%;
}

.inCover img {
    width: 60%;
    margin-left: 20%;
}

h3 {
    background-color: rgba(254, 254, 0, 0.75);
    color: #2E3092;
    text-align: center;
    margin-bottom: 2vh;
    margin-top: 1vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
}

h4 {
    margin-bottom: 1vh;
}

a.linkToContact {
    display: inline;
    margin-left: 0;
    font-weight: bold;
    color: #2E3092;
}

/* Services */
.divFour {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.divFour > h3 {
    width: 100%;
}

.mainFour {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.squareFour {
    background-color: #2E3092;
    display: block;
    width: 50%;
    text-align: center;
    padding: 2vh;
    margin-bottom: 2vh;
    border-radius: 25px;
    text-decoration: none;
}

.squareFour > img {
    height: 8vh;
}

.squareFour h4 {
    color: #FEFE00;
    font-size: large;
}

.projectSquare {
    background-color: #FEFE00;
}

.projectSquare h4 {
    color: #2E3092;
}

.btnShowAllProjects {
    width: 70%;
}

.projectSquare > img {
    width: 80%;
    height: auto;
}

/*brands*/
.divBrands {
    margin-top: 5vh;
}

.brandsLogo {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.brandsLogo a {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.brandsLogo img {
    width: 90%;
}

div.divPartners {
    display: flex;
    justify-content: space-between;
}

.divPartners > a {
    width: 45%;
}

.infraDayInfo p {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.infraDayInfo img.iconInfra {
    width: 25px;
    height: 25px;
    margin: 0 20px 0 0;
}

.infraDayInfo a.programmeLink, .infraDayInfo a.inscriptionLink{
    display: inline;
    margin-left: 0;
}

.inscriptionLink{
    text-decoration: none;
    color: white;
    background-color: #2E3092;
    padding: 15px;
    border-radius: 10px;
    margin-top: 10px;
}

@media (min-width: 900px) {
    .fullTitle > h1 {
        font-size: 60px;
    }

    .fullTitle > h2 {
        font-size: 40px;
    }

    .inCover {
        display: flex;
        font-size: large;
        align-items: flex-start;
    }

    .inCover > img {
        width: 20%;
        margin-left: 0;
        object-fit: contain;

    }

    .inCover > .inCoverContent {
        width: 60%;
    }

    .inCover a {
        margin-left: 2%;
    }

    a.linkToContact {
        display: inline;
        margin-left: 0;
    }

    .inCover h3 {
        text-align: left;
        padding: 1% 0 1% 2%;
        margin-top: 0;
        margin-bottom: 1vh;
    }

    .inCover h4 {
        padding-left: 2%;
        margin-bottom: 0.5vh;
    }

    h3 {
        font-size: x-large;
    }

    h4, .squareFour h4 {
        font-size: large;
    }

    .inCover p {
        padding-left: 2%;
    }

    .btnSubscription {
        z-index: 1;
        position: relative;
    }

    .mainFour {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .squareFour {
        width: 20%;
        padding: 2vh 0 2vh 0;
        cursor: pointer;
        transition-duration: 0.3s;
    }

    .squareFour:hover {
        transform: scale(1.1, 1.1);
    }

    .squareFour > img {
        height: 5vh;
    }

    .projectSquare > img {
        width: 50%;
        height: auto;
    }

    .btnShowAllProjects {
        width: 20%;
    }

    .brandsLogo {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        width: 100%;
        overflow-x: scroll;
    }

    .brandsLogo a {
        display: block;
        min-width: 15%;
    }

    .brandsLogo a:not(:first-child) {
        margin-left: 3%;
    }

    div.divPartners {
        justify-content: space-around;
    }

    .divPartners > a {
        width: 20%;
    }
}
</style>