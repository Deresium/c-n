<template>
    <div>
        <CnTitle>
            <h2>A propos de Cable & Network</h2>
        </CnTitle>
        <div class="cnMain">
            <section class="icons">
                <div class="icon">
                    <img src="../assets/about/birthday.svg" alt="birthday"/>
                    <p><span class="nbr">{{ age }}</span> Ans d'expérience</p>
                </div>
                <div class="icon">
                    <img src="../assets/about/collaborateurs.svg" alt="collaborateurs"/>
                    <p><span class="nbr">{{ associates }}</span> Collaborateurs</p>
                </div>
                <div class="icon">
                    <img src="../assets/about/projets.svg" alt="projets"/>
                    <p><span class="nbr">+ {{ projects }}</span> projets réalisés</p>
                </div>
            </section>
            <section class="allText">
                <div class="thumbnail">
                    <p>
                        Michel Steinbusch et ses équipes sont spécialisés dans les installations de câblage structuré
                        informatique depuis plus de 25 ans.<br/>
                        En 2008, Michel crée Cable & Network avec une vision :
                        <span class="bold">Offrir à ses clients un seul point de contact personnalisé pour tous leurs projets liés aux réseaux informatiques.</span>
                    </p>
                    <img class="phone" src="../assets/about/nicolas.jpg" alt="nicolas"/>
                </div>
                <div class="thumbnail">
                    <p>
                        Afin d'accomplir cette vision, nous nous sommes diversifiés au fil des années pour répondre aux
                        différents besoins de nos clients.
                        Notre portfolio de solutions témoigne de cette diversification.
                    </p>
                    <img class="phone" src="../assets/about/jy.jpg" alt="jy"/>
                </div>
                <div class="thumbnail">
                    <p>
                        Aujourd'hui, nous sommes une société familiale en pleine croissance comptant {{ associates }}
                        collaborateurs.
                        Nous sommes reconnus nationalement pour nos installations cuivre et fibre optique d'excellente
                        qualité,
                        et nous continuons de diversifier notre catalogue de solutions.
                    </p>
                    <img class="phone" src="../assets/about/fred.jpg" alt="fred"/>
                </div>
            </section>
            <section class="desktop imgs">
                <img src="../assets/about/nicolas.jpg" alt="nicolas"/>
                <img src="../assets/about/jy.jpg" alt="jy"/>
                <img src="../assets/about/fred.jpg" alt="fred"/>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import CnTitle from "../components/commons/CnTitle.vue";

export default defineComponent({
    components: {
        CnTitle
    },
    setup() {
        const age = ref(0);
        const associates = ref(0);
        const projects = ref(0);

        const dateNow: Date = new Date();
        const dateAnniversary: Date = new Date('1995-05-08');
        const dif = Math.abs(dateNow.getTime() - dateAnniversary.getTime());
        const birthday = new Date(dif);
        const birthdayYear = birthday.getFullYear() - 1970;


        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const upBirthday = async () => {
            for (let i = 0; i < birthdayYear; i++) {
                age.value++;
                await sleep(100);
            }
        }

        const upAssociates = async () => {
            for (let i = 0; i < 15; i++) {
                associates.value++;
                await sleep(100);
            }
        }

        const upProjects = async () => {
            for (let i = 0; i < 500; i++) {
                projects.value += 4;
                await sleep(1);
            }
        }

        upBirthday();
        upAssociates();
        upProjects();

        return {
            age,
            associates,
            projects
        }
    }
})
</script>

<style scoped>
h2 {
    font-family: 'Ace Sans', serif;
}

.bold {
    font-weight: bold;
    display: block;
}

.icons {
    display: flex;
    justify-content: space-between;
}

.icon {
    width: 30%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.icon img {
    width: 100%;
    margin-bottom: 1vh;
}

.nbr {
    font-weight: bold;
    display: block;
}

.thumbnail {
    width: 100%;
    margin-top: 2vh;
    margin-bottom: 2vh;
}

.thumbnail img {
    width: 100%;
    margin-top: 2vh;
}

@media (min-width: 900px) {
    .icons {
        justify-content: space-around;
    }

    .icon {
        width: 10%;
        font-size: x-large;
    }

    .allText {
        display: flex;
        justify-content: space-between;
    }

    .thumbnail {
        width: 30%;
    }

    .imgs {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 2vh;
    }

    .imgs img {
        width: 30%;
    }
}
</style>