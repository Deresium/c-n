<template>
    <CnTitle>
        <img :src="fullPath" :alt="imgName"/>
        <h2>{{title}}</h2>
    </CnTitle>
</template>

<script lang="ts">
    import {defineComponent, computed} from "vue";
    import CnTitle from "../../components/commons/CnTitle.vue";

    export default defineComponent({
        components:{
            CnTitle
        },
        props:{
            imgName:{
                type: String,
                required: true
            },
            title:{
                type: String,
                required: true
            }
        },
        setup(props){
            const fullPath = computed(() => `/icons/${props.imgName}.svg`);

            return{
                fullPath
            }
        }
    })
</script>

<style scoped>
    h2{
        margin-left: 5%;
        font-family: 'Ace Sans',serif;
    }
    img{
        height: 7vh;
    }

    @media (min-width: 900px) {
        h2{
            margin-left: 2%;
            font-size: xx-large;
        }

        img{
            height: 10vh;
        }
    }

</style>