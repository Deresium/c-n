<template>
    <div class="solutionFileCategory">
        <div class="title">
            <img class="imgIcon" :src="urlIcon" alt="icon"/>
            <p>{{ solutionFileCategory.getName() }}</p>
            <button class="btnAdmin btnDelete" v-if="isAdmin" @click="confirmDeleteSolutionFileCategory">Supprimer
            </button>
            <button class="btnAdmin btnConfirm" v-if="isAdmin && confirmDelete" @click="deleteSolutionFileCategory">
                Confirmer
            </button>
        </div>
        <div class="solutionFiles">
            <div
                v-for="solutionFile in solutionFileCategory.getSolutionFiles()"
                :key="solutionFile.getSolutionFileId()"
            >
                {{ solutionFile.getTitle() }}
            </div>
        </div>
        <button class="btnClick btnShowAdd" v-if="isAdmin && !displayFormAdd" @click="showFormAdd">Ajouter une fiche solution</button>
        <form
            v-if="isAdmin && displayFormAdd"
            class="formAddSolutionFile"
            @submit.prevent="submitAddSolutionFile"
            novalidate="novalidate"
        >
            <p class="title">Ajouter une fiche solution</p>
            <label>
                <span>Titre</span>
                <input type="text" v-model="title"/>
            </label>
            <label class="labelDescription">
                <span>Description</span>
                <textarea v-model="description"/>
            </label>
            <div>
                <label class="labelPdfFile">
                    <input type="file" @change="changePdfFile"/>
                    <span class="spanPdf pickPdfFile">Choisir un fichier</span>
                    <span class="spanBlock" v-if="pdfFile && pdfFile.name">{{ pdfFile.name }}</span>
                </label>
            </div>
            <div>
                <button class="btnClick btnAddSolutionFile" type="submit">Ajouter une fiche solution</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed, ref} from "vue";
import SolutionFileCategoryVM from "@/business/models/SolutionFileCategoryVM";
import store from "@/store/store";
import axiosCn from "@/axios/axiosCn";

export default defineComponent({
    emits: ['refresh'],
    props: {
        solutionFileCategory: {
            type: SolutionFileCategoryVM,
            required: true
        }
    },
    setup(props, context) {
        const urlIcon = computed(() => `${process.env.VUE_APP_URL_CN}/solutionFileCategory/${props.solutionFileCategory.getSolutionFileCategoryId()}/icon`);
        const isAdmin = computed(() => store.getters['login/onlyAdmin']);
        const confirmDelete = ref(false);
        const displayFormAdd = ref(false);

        const title = ref('');
        const description = ref('');
        const pdfFile = ref<File>();

        const confirmDeleteSolutionFileCategory = () => {
            confirmDelete.value = true;
        };

        const deleteSolutionFileCategory = async () => {
            const response = await axiosCn.delete(`/solutionFileCategory/${props.solutionFileCategory.getSolutionFileCategoryId()}`);
            if (response.status === 200) {
                context.emit('refresh')
            }
        };

        const submitAddSolutionFile = async () => {
            if (!title.value || !description.value || !pdfFile.value) {
                alert('Veuillez remplir le formulaire');
                return;
            }

            const formData = new FormData();
            formData.append('file', pdfFile.value, pdfFile.value.name);
            formData.append('title', title.value);
            formData.append('description', description.value);

            const response = await axiosCn.post(`/solutionFileCategory/${props.solutionFileCategory.getSolutionFileCategoryId()}/solutionFile`, formData);
            if(response.status === 200){
                context.emit('refresh');
                title.value = '';
                description.value = '';
                pdfFile.value = undefined;
            }
        };

        const changePdfFile = (event: any) => {
            pdfFile.value = event.target.files[0];
        };

        const showFormAdd = () => {
            displayFormAdd.value = true;
        };

        return {
            urlIcon,
            isAdmin,
            confirmDelete,
            deleteSolutionFileCategory,
            confirmDeleteSolutionFileCategory,
            submitAddSolutionFile,
            title,
            description,
            pdfFile,
            changePdfFile,
            showFormAdd,
            displayFormAdd
        }
    }
})
</script>

<style scoped>
.solutionFileCategory {
    margin-bottom: 20px;
}

.imgIcon {
    width: 50px;
    margin-right: 20px;
}

.title {
    display: flex;
    align-items: center;
}

.btnAdmin {
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.btnDelete {
    background-color: red;
    margin-left: 20px;
}

.btnConfirm {
    background-color: green;
    margin-left: 20px;
}

.formAddSolutionFile {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}

.formAddSolutionFile span {
    display: block;
}

.labelPdfFile input {
    display: none;
}

.labelPdfFile > .pickPdfFile {
    display: inline-block;
}

.pickPdfFile {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #2E3092;
    margin-bottom: 5px;
}

.btnAddSolutionFile{
    margin-top: 20px;
}

.btnShowAdd{
    margin-top: 10px;
}

.btnClick{
    color: white;
    padding: 10px;
    background-color: #2E3092;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.labelDescription{
    margin-top: 20px;
    margin-bottom: 20px;
}

.formAddSolutionFile .title{
    font-size: x-large;
    margin-bottom: 10px;
}

input, textarea{
    padding: 2px;
}
</style>