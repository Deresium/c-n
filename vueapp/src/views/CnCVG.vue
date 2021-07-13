<template>
    <div>
        <CnTitle class="title">
            <h2>{{ t('cvgMessages.title') }}<br/>{{ t('cvgMessages.title2') }}</h2>
            <h3>{{ t('cvgMessages.subtitle') }}</h3>
        </CnTitle>
        <div class="cnMain">
            <div class="language">
                <label :class="activeFr">
                    <span>{{ t('cvgMessages.fr') }}</span>
                    <input type="radio" value="fr" v-model="language"/>
                </label>
                <label :class="activeEn">
                    <span>{{ t('cvgMessages.en') }}</span>
                    <input type="radio" value="en" v-model="language"/>
                </label>
            </div>
            <section>
                <div class="conditionTitle">
                    <span class="number">1</span>
                    <h4>{{ t('cvgMessages.general') }}</h4>
                </div>
                <p>{{ t('cvgMessages.generalp1') }}</p>
                <p>{{ t('cvgMessages.generalp2') }}</p>
            </section>
            <section>
                <div class="conditionTitle">
                    <span class="number">2</span>
                    <h4>{{ t('cvgMessages.price') }}</h4>
                </div>
                <p>{{ t('cvgMessages.pricep1') }}</p>
                <p>{{ t('cvgMessages.pricep2') }}</p>
            </section>
            <section>
                <div class="conditionTitle">
                    <span class="number">3</span>
                    <h4>{{ t('cvgMessages.delay') }}</h4>
                </div>
                <p>{{ t('cvgMessages.delayp1') }}</p>
            </section>
            <section>
                <div class="conditionTitle">
                    <span class="number">4</span>
                    <h4>{{ t('cvgMessages.transfert') }}</h4>
                </div>
                <p>{{ t('cvgMessages.transfertp1') }}</p>
            </section>
            <section>
                <div class="conditionTitle">
                    <span class="number">5</span>
                    <h4>{{ t('cvgMessages.retention') }}</h4>
                </div>
                <p>{{ t('cvgMessages.retentionp1') }}</p>
                <p>{{ t('cvgMessages.retentionp2') }}</p>
            </section>
            <section>
                <div class="conditionTitle">
                    <span class="number">6</span>
                    <h4>{{ t('cvgMessages.reception') }}</h4>
                </div>
                <p>{{ t('cvgMessages.receptionp1') }}</p>
                <p>{{ t('cvgMessages.receptionp2') }}</p>
                <p>{{ t('cvgMessages.receptionp3') }}</p>
            </section>
            <section>
                <div class="conditionTitle">
                    <span class="number">7</span>
                    <h4>{{ t('cvgMessages.payment') }}</h4>
                </div>
                <p>{{ t('cvgMessages.paymentp1') }}</p>
                <p>{{ t('cvgMessages.paymentp2') }}</p>
                <p>{{ t('cvgMessages.paymentp3') }}</p>
                <p>{{ t('cvgMessages.paymentp4') }}</p>
            </section>
            <section>
                <div class="conditionTitle">
                    <span class="number">8</span>
                    <h4>{{ t('cvgMessages.warranty') }}</h4>
                </div>
                <p>{{ t('cvgMessages.warrantyp1') }}</p>
                <p>{{ t('cvgMessages.warrantyp2') }}</p>
                <p>{{ t('cvgMessages.warrantyp3') }}</p>
                <p>{{ t('cvgMessages.warrantyp4') }}</p>
                <p>{{ t('cvgMessages.warrantyp5') }}</p>
            </section>
            <section>
                <div class="conditionTitle">
                    <span class="number">9</span>
                    <h4>{{ t('cvgMessages.invalidity') }}</h4>
                </div>
                <p>{{ t('cvgMessages.invalidityp1') }}</p>
            </section>
            <section>
                <div class="conditionTitle">
                    <span class="number">10</span>
                    <h4>{{ t('cvgMessages.jurisdiction') }}</h4>
                </div>
                <p>{{ t('cvgMessages.jurisdictionp1') }}</p>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import CnTitle from "@/components/commons/CnTitle.vue";
import i18n from "@/i18n/i18n";
import { useI18n } from 'vue-i18n'

export default defineComponent({
    components: {
        CnTitle
    },
    setup() {
        const {t, locale} = useI18n({useScope: 'global'});

        const language = computed({
            get: () => locale.value,
            set: (value) => {
                locale.value = value
            }
        });

        const activeFr = computed(() => {
            return{
                active: locale.value === 'fr'
            }
        })

        const activeEn = computed(() => {
            return {
                active: locale.value === 'en'
            }
        })

        return {
            language,
            activeFr,
            activeEn,
            t
        }
    }
})
</script>

<style scoped>
.title {
    display: block;
}

.language {
    margin-bottom: 2vh;
}

.language input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.language > label:first-child {
    margin-right: 5%;
}

.language > label {
    cursor: pointer;
}

.active {
    border-bottom: solid 3px #FEFE00;
}

h2 {
    font-family: 'Ace Sans', serif;
    width: 100%;
}

h3 {
    font-family: 'Ace Sans', serif;
    width: 100%;
    margin-top: 1vh;
}

.conditionTitle {
    display: flex;
    align-items: center;
    margin-bottom: 1vh;
}

.number {
    font-size: xx-large;
    font-family: 'Ace Sans', serif;
    margin-right: 5%;
}

h4 {
    display: inline-block;
    font-family: 'Ace Sans', serif;
    border-bottom: 3px #FEFE00 solid;
}

section > p {
    margin-bottom: .5vh;
}

section {
    margin-bottom: 3vh;
}

@media (min-width: 900px) {
    .language > label:first-child {
        margin-right: 2%;
    }

    .number {
        margin-right: 2%;
    }

}
</style>