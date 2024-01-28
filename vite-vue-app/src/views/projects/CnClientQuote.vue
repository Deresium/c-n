<template>
    <div :style="fullNoPics" class="clientQuote">
        <div :class="classFullNoPics" class="onPhone">
            <img v-if="fullPathPic !== null" :src="fullPathPic" alt="logo client"/>
            <p class="phone"><span class="clientName">{{ clientName }}</span> <br/> {{ clientPosition }}</p>
        </div>
        <div class="completeQuote">
            <p class="desktop"><span class="clientName">{{ clientName }}</span> <br/> {{ clientPosition }}</p>
            <p class="quote"><span class="quoteMark">&#10077;</span>{{ quote }}<span class="quoteMark">&#10078;</span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";

export default defineComponent({
    props: {
        clientName: {
            type: String,
            required: false
        },
        clientPosition: {
            type: String,
            required: false
        },
        urlPic: {
            type: String,
            required: false
        },
        quote: {
            type: String,
            required: false
        }
    },
    setup(props) {
        const fullPathPic = computed(() => {
            if (props.urlPic !== null)
                return `${import.meta.env.BASE_URL}projects/${props.urlPic}`;
            return null;
        })

        const fullNoPics = computed(() => {
            return {
                'align-items': props.urlPic === undefined ? 'flex-start' : 'center'
            }
        })

        const classFullNoPics = computed(() => {
            return {
                noPics: props.urlPic === undefined
            }
        })

        return {
            fullPathPic,
            fullNoPics,
            classFullNoPics
        }
    }
})
</script>

<style scoped>
.clientQuote {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2vh;
}

.onPhone {
    display: flex;
    align-items: center;
}

.clientName {
    font-weight: bold;
}

.quote {
    margin-top: 1vh;
    font-style: italic;
}

img {
    border-radius: 50%;
    width: 30%;
    margin-right: 5%;
    object-fit: contain;
}

@media (min-width: 900px) {
    .clientQuote {
        flex-direction: row;
        justify-content: space-between;
    }

    .onPhone {
        width: 15%;
    }

    .completeQuote {
        width: 80%;
    }

    img {
        width: 100%;
        margin-right: 2%;
    }

    div.noPics {
        display: none;
    }
}
</style>