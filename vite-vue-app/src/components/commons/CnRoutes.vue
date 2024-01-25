<template>
    <ul class="routes">
        <li class="clickableMenu" @click="showServicesMenu = !showServicesMenu">
            <div class="titleOpenMenu">
                <span>Solutions</span>
                <img :class="upDownServiceMenu" class="arrowMenu phone"
                     src="/icons/arrow.svg" alt="arrow"/>
            </div>
            <transition name="smoothOpen">
                <ul class="subMenu" v-if="showServicesMenu">
                    <li class="service" @click="closeMenuPhone">
                        <router-link to="/services/ITinfrastructure"><img
                            src="/icons/it_infra.svg" alt="connector"/>IT
                            Infrastructure
                        </router-link>
                    </li>
                    <li class="service" @click="closeMenuPhone">
                        <router-link
                            to="/services/powersupply">
                            <img class="spark"
                                 src="/icons/power_supply.svg"
                                 alt="spark"/>
                            Power Supply
                        </router-link>
                    </li>
                    <li class="service" @click="closeMenuPhone">
                        <router-link to="/services/network"><img
                            src="/icons/network.svg" alt="network"/>Network
                        </router-link>
                    </li>
                    <li class="service" @click="closeMenuPhone">
                        <router-link to="/services/security"><img
                            src="/icons/security.svg" alt="camera"/>Security
                        </router-link>
                    </li>
                </ul>
            </transition>
        </li>

        <li class="clickableMenu" @click="showResources = !showResources">
            <div class="titleOpenMenu">
                <span>Ressources et Formations</span>
                <img :class="upDownResourceMenu" class="arrowMenu phone"
                     src="/icons/arrow.svg" alt="arrow"/>
            </div>
            <transition name="smoothOpen">
                <ul class="subMenu" v-if="showResources">
                    <li @click="closeMenuPhone">
                        <router-link to="/fichesSolutions">Fiches Solutions</router-link>
                    </li>
                </ul>
            </transition>
        </li>

        <li class="clickableMenu" @click="showCompany = !showCompany">
            <div class="titleOpenMenu">
                <span>Entreprise</span>
                <img :class="upDownCompanyMenu" class="arrowMenu phone"
                     src="/icons/arrow.svg" alt="arrow"/>
            </div>
            <transition name="smoothOpen">
                <ul class="subMenu" v-if="showCompany">
                    <li @click="closeMenuPhone">
                        <router-link to="/aboutus">A propos de Cable & Network</router-link>
                    </li>
                    <li @click="closeMenuPhone">
                        <router-link to="/news">News</router-link>
                    </li>
                    <li @click="closeMenuPhone">
                        <router-link to="/projets">Projets et témoignages clients</router-link>
                    </li>
                    <li @click="closeMenuPhone">
                        <router-link to="/certifications">Attestations et Certifications</router-link>
                    </li>
                    <!--<li @click="closeMenuPhone">
                        <router-link to="/event">Inscription au Portes Ouvertes</router-link>
                    </li>-->
                    <li @click="closeMenuPhone">
                        <router-link to="/equipement">Equipements</router-link>
                    </li>
                    <li @click="closeMenuPhone">
                        <router-link to="/gallery">Galerie Photos</router-link>
                    </li>
                </ul>
            </transition>
        </li>

        <li @click="closeMenuPhone">
            <router-link to="/contact">Contact</router-link>
        </li>
    </ul>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";

export default defineComponent({
    emits: ['closeMenuPhone'],
    setup(props, context) {
        const showServicesMenu = ref(false);
        const showResources = ref(false);
        const showCompany = ref(false);

        const closeMenuPhone = () => {
            context.emit('closeMenuPhone');
        }

        const upDownServiceMenu = computed(() => {
            return {'rotateArrow': showServicesMenu.value}
        })
        const upDownResourceMenu = computed(() => {
            return {rotateArrow: showResources.value}
        })
        const upDownCompanyMenu = computed(() => {
            return {rotateArrow: showCompany.value}
        })

        return {
            showServicesMenu,
            showResources,
            showCompany,
            closeMenuPhone,
            upDownServiceMenu,
            upDownResourceMenu,
            upDownCompanyMenu
        }
    }
})
</script>

<style scoped>
ul, li {
    list-style-type: none;
}

ul {
    padding-left: 5vw;
    -webkit-tap-highlight-color: transparent;
}

li {
    font-size: x-large;
    color: #2E3092;
    margin-top: 2vw;
    margin-bottom: 2vw;
    cursor: pointer;
    z-index: 1;
}

.titleOpenMenu {
    display: flex;
    align-items: center;
}

.titleOpenMenu > span {
    width: 70%;
}

.arrowMenu {
    transition-duration: .5s;
    height: 20px;
    margin-left: 8%;
}

.subMenu > li {
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.rotateArrow {
    transform: rotate(90deg);
}

li.clickableMenu {
    height: auto;
    margin-bottom: 4vh;
}

.service {
    display: flex;
    align-items: center;
}

.service a {
    display: flex;
    align-items: center;
}

a {
    display: block;
    text-decoration: none;
    color: #2E3092;
}

.service img {
    width: 25px;
    margin-right: 2vw;
}

.smoothOpen-enter-active {
    animation: openSlowly .5s;
}

.smoothOpen-leave-active {
    animation: openSlowly .2s reverse;
}

@keyframes openSlowly {
    0% {
        max-height: 0;
    }

    100% {
        max-height: 70vh;
    }
}

@media (min-width: 900px) {
    .subMenu {
        display: flex;
        flex-direction: column;
        border-top: solid 1px #2E3092;
        border-bottom: solid 1px #2E3092;
    }

    .subMenu > li {
        margin-top: 1vh;
        margin-bottom: 1vh;
    }

    .titleOpenMenu > span {
        width: auto;
    }

    li.clickableMenu {
        display: flex;
        align-items: center;
        margin-bottom: 0;
    }

    ul {
        padding-left: 2vw;
    }

    li {
        height: auto;
        margin: 0;
    }

    .service img {
        width: 25px;
    }

    .routes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .smoothOpen-enter-active {
        animation-duration: .2s;
    }

    .smoothOpen-leave-active {
        animation-duration: .2s;
    }

    @keyframes openSlowly {
        0% {
            transform: scale(0, 0);
            max-height: 0;
            max-width: 0;
        }
        50% {
            max-width: 10vw;
            max-height: 0;
            transform: scale(1, 0.01);
        }
        100% {
            transform: scale(1, 1);
            max-height: 20vh;
        }
    }
}
</style>