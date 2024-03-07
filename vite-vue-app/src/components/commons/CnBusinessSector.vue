<template>
    <div class="sector">
        <div class="headerDiv">
            <img class="icon" :src="imgSrc" alt="icon"/>
            <h3>{{ title }}</h3>
        </div>
        <div class="refs">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    iconName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

const imgSrc = computed(() => `${import.meta.env.BASE_URL}sectors/${props.iconName}.png`)

</script>

<style scoped>
.icon {
    width: 100px;
}

.sector {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 50px;
}

.sector h3 {
    color: white;
    margin-top: 10px;
}

.headerDiv {
    width: 100%;
    background-color: #2e3092;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 50px;
}

@media(min-width: 900px){
    .refs{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>