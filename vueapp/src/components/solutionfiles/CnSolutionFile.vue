<template>
    <div class="solutionFile">
        <div class="flex">
            <p class="titlePdf">{{ solutionFile.getTitle() }}</p>
            <button v-if="isAdmin" class="btnAdmin btnPdf" @click="showModalUpdateSolutionFile">Modifier</button>
        </div>
        <p v-html="description" class="description"></p>
        <div class="btnActions">
            <a class="btnPdf btnPreview" :href="urlPdf(false)" target="_blank">Preview</a>
            <a class="btnPdf" :href="urlPdf(true)">Télécharger</a>
        </div>
    </div>
    <CnModal v-model="modalUpdateSolutionFile">
        <CnSolutionFileForm
            :id-solution-file-category="idSolutionFileCategory"
            :solution-file="solutionFile"
            @refresh="refreshView"
        />
    </CnModal>
</template>

<script lang="ts">
import {defineComponent, computed, ref} from "vue";
import SolutionFileVM from "@/business/models/SolutionFileVM";
import CnModal from "@/components/commons/CnModal.vue";
import CnSolutionFileForm from "@/components/solutionfiles/CnSolutionFileForm.vue";
import store from "@/store/store";

export default defineComponent({
    emits: ['refresh'],
    components: {CnSolutionFileForm, CnModal},
    props: {
        solutionFile: {
            type: SolutionFileVM,
            required: true
        },
        idSolutionFileCategory: {
            type: Number,
            required: true
        }
    },
    setup(props, context) {
        const time = ref(new Date().getTime());
        const urlPdf = (download: boolean) => `${process.env.VUE_APP_URL_CN}/solutionFile/${props.solutionFile.getSolutionFileId()}/pdfFile/${encodeURIComponent(props.solutionFile.getTitle())}?download=${download}&time=${time.value}`;
        const description = computed(() => props.solutionFile.getDescription().replaceAll('\n', '<br/>'));
        const isAdmin = computed(() => store.getters['login/onlyAdmin']);
        const modalUpdateSolutionFile = ref(false);

        const showModalUpdateSolutionFile = () => {
            modalUpdateSolutionFile.value = true;
        };

        const refreshView = (refreshPdf=true) => {
            modalUpdateSolutionFile.value = false;
            if(refreshPdf) {
                time.value = new Date().getTime();
            }
            context.emit('refresh', refreshPdf);
        };

        return {
            urlPdf,
            description,
            modalUpdateSolutionFile,
            showModalUpdateSolutionFile,
            isAdmin,
            refreshView
        }
    }
})
</script>

<style scoped>
.titlePdf {
    font-weight: bold;
    margin-right: 20px;
}

.solutionFile{
    margin-top: 10px;
    margin-bottom: 50px;
}

.btnPdf {
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    color: white;
    background-color: #2E3092;
    text-decoration: none;
    border: none;
    cursor: pointer;
}

.btnPreview {
    margin-right: 10px;
}

button.btnAdmin{
    background-color: orangered;
}

.btnActions {
    margin-top: 10px;
}

.flex{
    display: flex;
    align-items: center;
}

</style>