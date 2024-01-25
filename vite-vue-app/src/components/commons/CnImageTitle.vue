<template>
    <div>
        <h4 v-html="title" :class="cssTitle"></h4>
        <img :class="cssImg" :src="fullPath" :alt="title"/>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";

export default defineComponent({
    props: {
        imgLogoExtension: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        onLeft: {
            type: Boolean,
            required: true
        }
    },
    setup(props) {
        const fullPath = computed(() => `/services/${props.imgLogoExtension}`);

        const cssTitle = computed(() => {
            return {
                titleLeft: props.onLeft,
                titleRight: !props.onLeft
            }
        })

        const cssImg = computed(() => {
            return {
                imgLeft: props.onLeft,
                imgRight: !props.onLeft
            }
        })

        return {
            fullPath,
            cssTitle,
            cssImg
        }
    }
})
</script>

<style scoped>
img {
    width: 80%;
}

div {
    position: relative;
}

h4 {
    position: absolute;
    width: 50%;
    background-color: rgba(254, 254, 0, 0.95);
    text-align: center;
    padding-top: 1vh;
    padding-bottom: 1vh;
    top: 10%;
}

.titleLeft {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
}

.titleRight {
    box-shadow: -3px 3px 5px rgba(0, 0, 0, 0.2);
    left: 50%;
}

.imgLeft {
    margin-left: 20%;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
}

.imgRight {
    box-shadow: -3px 3px 5px rgba(0, 0, 0, 0.2);
}

@media (min-width: 900px) {
    h4 {
        font-size: xx-large;
        top: 10%;
    }
}
</style>