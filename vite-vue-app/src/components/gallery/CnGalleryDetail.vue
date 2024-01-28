import {Galleries} from "@/enums/Galleries";
<template>
    <div>
        <CnGalleryTitle :title="title"/>
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
import CnGalleryTitle from "./CnGalleryTitle.vue";
import {Galleries} from "../../business/enums/Galleries";

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
                    allImage.value = ['IMG_6541.jpg',
                        'IMG_6546.jpg',
                        'IMG_6547.jpg',
                        'IMG_6553.jpg',
                        'IMG_6555.jpg',
                        'IMG_6557.jpg',
                        'IMG_6562.jpg',
                        'IMG_6564.jpg',
                        'IMG_6566.jpg',
                        'IMG_6569.jpg',
                        'IMG_6575.jpg',
                        'IMG_6577.jpg',
                        'IMG_6578.jpg',
                        'IMG_6581.jpg',
                        'IMG_6583.jpg',
                        'IMG_6586.jpg',
                        'IMG_6587.jpg',
                        'IMG_6589.jpg',
                        'IMG_6591.jpg',
                        'IMG_6594.jpg',
                        'IMG_6596.jpg',
                        'IMG_6598.jpg',
                        'IMG_6600.jpg',
                        'IMG_6610.jpg',
                        'IMG_6611.jpg',
                        'IMG_6613.jpg',
                        'IMG_6618.jpg',
                        'IMG_6620.jpg',
                        'IMG_6625.jpg',
                        'IMG_6629.jpg',
                        'IMG_6631.jpg',
                        'IMG_6635.jpg',
                        'IMG_6639.jpg',
                        'IMG_6643.jpg',
                        'IMG_6645.jpg',
                        'IMG_6652.jpg',
                        'IMG_6659.jpg',
                        'IMG_6664.jpg',
                        'IMG_6665.jpg',
                        'IMG_6668.jpg',
                        'IMG_6675.jpg',
                        'IMG_6677.jpg',
                        'IMG_6680.jpg',
                        'IMG_6683.jpg',
                        'IMG_6685.jpg',
                        'IMG_6687.jpg',
                        'IMG_6690.jpg',
                        'IMG_6692.jpg',
                        'IMG_6693.jpg',
                        'IMG_6697.jpg',
                        'IMG_6703.jpg',
                        'IMG_6704.jpg',
                        'IMG_6706.jpg',
                        'IMG_6708.jpg',
                        'IMG_6713.jpg',
                        'IMG_6727.jpg',
                        'IMG_6739.jpg',
                        'IMG_6743.jpg',
                        'IMG_6750.jpg',
                        'IMG_6751.jpg',
                        'IMG_6757.jpg',
                        'IMG_6765.jpg',
                        'IMG_6767.jpg',
                        'IMG_6771.jpg',
                        'IMG_6775.jpg',
                        'IMG_6777.jpg',
                        'IMG_6779.jpg',
                        'IMG_6791.jpg',
                        'IMG_6795.jpg',
                        'IMG_6813.jpg',
                        'IMG_6816.jpg',
                        'IMG_6829.jpg'];
                    path.value = '10years';
                    break;
                case Galleries.FIFTEENYEARS:
                    allImage.value = ['bemac_1.jpg',
                        'buffet_1.jpg',
                        'buffet_2.jpg',
                        'buffet_3.jpg',
                        'buffet_4.jpg',
                        'buffet_5.jpg',
                        'buffet_6.jpg',
                        'buffet_7.jpg',
                        'buffet_8.jpg',
                        'buffet_9.jpg',
                        'cisco_1.jpg',
                        'cisco_3.jpg',
                        'coffee_1.jpg',
                        'eaton_1.jpg',
                        'eaton_2.jpg',
                        'eaton_3.jpg',
                        'eaton_4.jpg',
                        'fortinet_1.jpg',
                        'fortinet_3.jpg',
                        'maman_1.jpg',
                        'nicolas_1.jpg',
                        'nicolas_2.jpg',
                        'nicolas_3.jpg',
                        'nicolas_4.jpg',
                        'nicolas_5.jpg',
                        'outside_1.jpg',
                        'outside_2.jpg',
                        'outside_3.jpg',
                        'outside_3_1.jpg',
                        'outside_4.jpg',
                        'outside_4_1.jpg',
                        'outside_5.jpg',
                        'outside_6.jpg',
                        'outside_7.jpg',
                        'outside_8.jpg',
                        'rm_1.jpg'];
                    path.value = '15years';
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
            allImage.value[index] = `${import.meta.env.BASE_URL}gallery/${path.value}/${value.replace('./', '')}`;
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