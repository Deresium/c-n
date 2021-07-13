<template>
    <router-link :to="link">
        <div class="divLogoCompany">
            <img class="logoCompany" :src="fullPath" :alt="imgNameExtension"/>
            <div class="divTextCompany">
                <h2>{{ company }}</h2>
                <h3>{{ catchPhrase }}</h3>
            </div>
        </div>
        <img class="arrow" src="../../assets/icons/arrow.svg" alt="arrow"/>
    </router-link>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";

export default defineComponent({
    props: {
        link: {
            type: String,
            required: true
        },
        imgNameExtension: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const fullPath = computed(() => require(`@/assets/${props.imgNameExtension}`));

        return {
            fullPath
        }
    }
})
</script>

<style scoped>
a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: #2E3092;
    margin-bottom: 5vh;
}

h3 {
    font-weight: normal;
}

.logoCompany {
    width: 30%;
    object-fit: contain;
    margin-right: 5%;
}

.divTextCompany {
    width: 60%;
    display: flex;
    flex-direction: column;
}

h2 {
    font-size: large;
}

h3 {
    font-size: medium;
}

.arrow {
    width: 10%;
}

.divLogoCompany {
    width: 90%;
    display: flex;
    align-items: center;
}

@media (min-width: 900px) {
    .logoCompany {
        width: 10%;
    }

    h2 {
        font-size: xx-large;
    }

    h3 {
        font-size: x-large;
    }

    .arrow {
        width: 4%;
        transition-duration: 0.5s;
    }

    a:hover > .arrow {
        transform: translateX(30%) scale(0.8, 0.8);
    }
}
</style>