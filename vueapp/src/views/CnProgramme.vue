<template>
    <CnTitle><h2>IT Infrastructure Solution Day - Programme</h2></CnTitle>
    <div class="exhibitingList">
        <div class="exhibiting">
            <h3>R&M - Solutions pour Infrastructures Passives</h3>
            <div class="logoExhibiting">
                <img src="../assets/brands/R&M.png" alt="R&M logo"/>
            </div>
            <p>Luc vous présente les solutions de R&M pour les Infrastructures passives au sein du camion
                Roadshow R&M, ainsi que la nouvelle gamme de racks informatiques de R&M.</p>
        </div>

        <div class="exhibiting">
            <h3>Eaton - UPS & PDU</h3>
            <div class="logoExhibiting">
                <img src="../assets/brands/eaton.png" alt="eaton logo"/>
            </div>
            <p>Yves vous présente les solutions UPS de Eaton afin de préserver votre infrastructure informatique
                lors de coupures de courant, ainsi que la gamme de PDUs intelligents.</p>
        </div>

        <div class="exhibiting">
            <h3>Cisco - Switching & Wi-Fi Enterprise</h3>
            <div class="logoExhibiting">
                <img src="../assets/brands/cisco.png" alt="cisco logo"/>
            </div>
            <p>Pieter vous présente les solutions de Cisco pour le Switching et le Wi-Fi en Entreprise avec les
                gammes Small Business et Catalyst.</p>
        </div>

        <div class="exhibiting">
            <h3>Fortinet - Switching, Wi-Fi & Firewall Enterprise</h3>
            <div class="logoExhibiting">
                <img src="../assets/brands/fortinet.png" alt="fortinet logo"/>
            </div>
            <p>Bijan et Philippe vous présentent les solutions de Fortinet pour le Switching, le Wi-Fi et le Firewalling
                en Entreprise.</p>
        </div>

        <div class="exhibiting">
            <h3>Phoenix Contact - Switching & Alimentations Industriel</h3>
            <div class="logoExhibiting">
                <img src="../assets/brands/phoenix_contact.png" alt="phoenix logo"/>
            </div>
            <p>Romain vous présente les solutions de Phoenix Contact pour le switching industriel, ainsi que les
                alimentations électriques industrielles.</p>
        </div>

        <div class="exhibiting">
            <h3>Cisco - Switching & Wi-Fi Enterprise</h3>
            <div class="logoExhibiting">
                <img src="../assets/brands/cisco.png" alt="cisco logo"/>
            </div>
            <p>Pieter vous présente les solutions de Cisco pour le Switching et le Wi-Fi en Entreprise avec les
                gammes Small Business et Catalyst.</p>
        </div>

        <div class="exhibiting">
            <h3>Ekahau - Wi-Fi Site Surveys</h3>
            <div class="logoExhibiting">
                <img src="../assets/brands/ekahau.png" alt="ekahau logo"/>
            </div>
            <p>Dimitri réalise des démonstrations du logiciel Ekahau, qui permet de réaliser des site surveys Wi‑Fi,
                afin de toujours disposer d'un réseau Wi-Fi d'une qualité optimale.</p>
        </div>

        <div class="exhibiting">
            <h3>Sécurité Physique des Infrastructure</h3>
            <div class="logosExhibiting">
                <img src="../assets/brands/hanwha.png" alt="hanwha logo"/>
                <img src="../assets/brands/milestone.png" alt="milestone logo"/>
                <img src="../assets/brands/vanderbilt.png" alt="vanderbilt logo"/>
                <img src="../assets/brands/2N.png" alt="2N logo"/>
            </div>
            <p>Bruno vous présente les solutions permettant d'assurer la sécurité physique de vos bâtiments.
                Cela comprend la vidéosurveillance avec Hanwha et Milestone XProtect, le contrôle d'accès avec
                Vanderbilt et la vidéophonie avec 2N.
            </p>
        </div>

        <div class="exhibiting">
            <h3>Fibre Optique Soufflée</h3>
            <div class="logoExhibiting fullPic">
                <img src="../assets/fibre_optique.png" alt="fibre optique"/>
            </div>
            <p>Frédéric réalise des démonstrations de fibres soufflées, une technique permettant le passage
                des brins de fibres dans des microducts.
            </p>
        </div>

        <div class="exhibiting">
            <h3>Gestion et Sécurité Physique des racks informatiques</h3>
            <div class="logosExhibiting">
                <img src="../assets/brands/R&M.png" alt="R&M logo"/>
                <img src="../assets/brands/patchbox.png" alt="patchbox logo"/>
                <img src="../assets/brands/patchsee.png" alt="patchsee logo"/>
                <img src="../assets/brands/zonit.png" alt="zonit logo"/>
            </div>
            <p>Une série d'accessoires pour la gestion et la sécurité physique des racks informatiques sont
                présentés :<br/>
                ► Patch cords sécurisés de R&M<br/>
                ► Patch cords de longueurs ajustables de Patchbox<br/>
                ► Patch cords facilement repérables de PatchSee<br/>
                ► Cordons électriques sécurisés de Zonit
            </p>
        </div>
    </div>

</template>

<script lang="ts" setup>

import CnTitle from "@/components/commons/CnTitle.vue";
</script>

<style scoped>
.exhibitingList {
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    gap: 150px;
    margin-bottom: 100px;
}

.exhibiting{
    color: #2E3092;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h3 {
    text-align: center;
}

.logosExhibiting {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 20px;
}

.fullPic{
    margin-top: 20px;
    margin-bottom: 20px;
}

.logosExhibiting img:not(:only-child) {
    width: 70px;
}

.exhibiting img{
    width: 200px;
}

@media(min-width: 900px) {
    .exhibitingList{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .exhibiting{
        width: 40%;
    }
}

</style>