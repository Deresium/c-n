import {Galleries} from "@/enums/Galleries";
<template>
    <div>
        <CnGalleryTitle :title="'10 ans'"/>
        <div class="cnMain">
            <div class="mainPicture">
                <img ref="bigImg" @click="clickOnImg" :src="imageSelect" :alt="imageSelect"/>
            </div>
            <div ref="scroller" class="sliderPictures">
                <img v-for="(image, index) in allImage" @click="changeImgSelect(index)" :class="onFocus(image)"
                     :src="image" :alt="image" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import CnGalleryTitle from "@/components/gallery/CnGalleryTitle.vue";
import {Galleries} from "@/business/enums/Galleries";

export default defineComponent({
    components: {
        CnGalleryTitle
    },
    props: {
        title:{
            type: String,
            required: true
        },
        enumGallery: {
            required: true
        }
    },
    setup(props) {
        const path = ref('');
        const allImage = ref(new Array<string>());
        const imageSelect = ref('');
        const scroller = ref();

        const getAllImages = () => {
            switch (props.enumGallery) {
                case Galleries.TENYEARS:
                    allImage.value = require.context('@/assets/gallery/10years').keys();
                    path.value = '10years';
                    break;
            }
        }

        const getGap = () => {
            const focusPicture = document.getElementsByClassName('focus')[0];
            return focusPicture.clientWidth + 15;
        }

        const goToPreviousImg = () => {
            if (!imageSelect.value)
                return;
            let index = allImage.value.indexOf(imageSelect.value);
            if (index !== 0) {
                index--;
                imageSelect.value = allImage.value[index];
                scroller.value.scrollLeft -= getGap();
            }
        }

        const goToNextImg = () => {
            if (!imageSelect.value)
                return;
            let index = allImage.value.indexOf(imageSelect.value);
            if (index < allImage.value.length - 1) {
                index++;
                imageSelect.value = allImage.value[index];
                scroller.value.scrollLeft += getGap();
            }
        }

        const changePicture = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                goToPreviousImg();
            } else if (event.key === 'ArrowRight') {
                goToNextImg();
            }
        }

        getAllImages();
        allImage.value.forEach((value, index) => {
            allImage.value[index] = require(`@/assets/gallery/${path.value}/${value.replace('./', '')}`);
        });
        imageSelect.value = allImage.value[0];

        document.addEventListener('keydown', changePicture);

        const onFocus = (image: string) => {
            return {
                'focus': image == imageSelect.value
            }
        }

        const changeImgSelect = (index: number) => {
            imageSelect.value = allImage.value[index];
        }

        const clickOnImg = (event: MouseEvent) => {
            const divideWith = window.innerWidth / 2;
            if (event.clientX < divideWith)
                goToPreviousImg();

            else
                goToNextImg();
        }

        return{
            scroller,
            onFocus,
            changeImgSelect,
            clickOnImg,
            imageSelect,
            allImage
        }
    }
})
</script>

<style scoped>
.cnMain {
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
    max-height: 90vh;
}

.mainPicture img {
    height: 50vh;
    width: 100%;
    object-fit: contain;
}

.sliderPictures {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    align-items: center;
    margin-top: 2vh;
}

.sliderPictures img {
    height: 7vh;
    margin-right: 15px;
    object-fit: contain;
    cursor: pointer;
}

.focus {
    border-bottom: solid 5px #FEFE00;
    box-sizing: border-box;
}

@media (min-width: 900px) {
    .sliderPictures img {
        margin-left: 15px;
    }
}
</style>