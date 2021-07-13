<template>
    <div>
        <CnTitle>
            <img class="imgCompany" :src="fullPathLogo" :alt="company"/>
            <h2>{{company}}</h2>
        </CnTitle>
        <div class="cnMain">
            <slot name="clientQuote"></slot>
            <div class="partProject part1">
                <img v-if="imgExtension1" :src="fullPathP1" :alt="`picture 1 project ${company}`"/>
                <div class="txtPart">
                    <slot name="txtPart1"></slot>
                </div>
            </div>
            <div class="partProject part2">
                <img v-if="imgExtension2" :src="fullPathP2" :alt="`picture 2 project ${company}`"/>
                <div class="txtPart">
                    <slot name="txtPart2"></slot>
                </div>
            </div>
            <router-link class="btnAction" to="/projets">Retour à la liste des projets</router-link>
        </div>
    </div>

</template>

<script lang="ts">
    import {defineComponent, computed} from "vue";
    import CnTitle from "@/components/commons/CnTitle.vue";

    export default defineComponent({
        components:{
            CnTitle
        },
        props:{
            imgLogoExtension:{
                type: String,
                required: true
            },
            imgExtension1: {
                type: String,
                required: false
            },
            imgExtension2: {
                type: String,
                required: false
            },
            company: {
                type: String,
                required: true
            }
        },
        setup(props){
            const fullPathLogo = computed(() => require(`@/assets/projects/${props.imgLogoExtension}`))

            const fullPathP1 = computed(() => {
                if(props.imgExtension1)
                    return require(`@/assets/projects/${props.imgExtension1}`);
                return null;
            })

            const fullPathP2 = computed(() => {
                if(props.imgExtension2)
                    return require(`@/assets/projects/${props.imgExtension2}`);
                return null;
            })

            return{
                fullPathLogo,
                fullPathP1,
                fullPathP2
            }
        }
    })
</script>

<style scoped>
    h2{
        font-family: 'Ace Sans', serif;
    }

    .imgCompany{
        margin-right: 5%;
        width: 30%;
    }

    .cnMain img{
        width: 100%;
    }

    .txtPart{
        margin-top: 1vh;
        margin-bottom: 2vh;
        width: 100%;
    }

    .btnAction{
        font-size: initial;
        width: 60%;
        margin-bottom: 2vh;
    }

    @media (min-width: 900px) {
        .part1, .part2{
            display: flex;
        }

        .part1 img{
            margin-right: 2%;
        }

        .part2 img{
            margin-left: 2%;
        }

        .part2{
            flex-direction: row-reverse;
            margin-top: 2vh;
            margin-bottom: 5vh;
        }

        .txtPart{
            margin-top: 0;
            margin-bottom: 0;
        }

        .cnMain img{
            width: 50%;
        }

        .btnAction{
            width: 20%;
            font-size: large;
        }

        h3{
            margin-bottom: 0.5vh;
        }

        .imgCompany{
            width: 10%;
        }
    }

</style>