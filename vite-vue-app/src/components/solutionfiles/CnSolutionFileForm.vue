<template>
    <div class="inside">
        <form
            v-if="isAdmin"
            class="formAddSolutionFile"
            @submit.prevent="submitAddSolutionFile"
            novalidate
        >
            <p class="title">{{ txtTitle }}</p>
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
                <button class="btnClick btnAddSolutionFile" type="submit">{{ txtButton }}</button>
            </div>
        </form>
        <div class="divButtons" v-if="isUpdate">
            <button class="btnAdmin btnDelete" v-if="isAdmin" @click="confirmDeleteSolutionFile">
                Supprimer
            </button>
            <button class="btnAdmin btnConfirm" v-if="isAdmin && confirmDelete" @click="deleteSolutionFile">
                Confirmer
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import axiosCn from "../../axios/axiosCn";
import SolutionFileVM from "../../business/models/SolutionFileVM.ts";
import {useUserStore} from "../../store/userStore.ts";

export default defineComponent({
    emits: ['refresh'],
    props:{
        idSolutionFileCategory: {
            type: Number,
            required: true
        },
        solutionFile: {
            type: SolutionFileVM,
            required: false
        }
    },
    setup(props, context) {
        const userStore = useUserStore();
        const isAdmin = computed(() => userStore.onlyAdmin);
        const isUpdate = computed(() => props.solutionFile);
        const confirmDelete = ref(false);

        const title = ref('');
        const description = ref('');
        const txtTitle = ref('Ajouter une fiche solution');
        const txtButton = ref('Ajouter une fiche solution');

        if(props.solutionFile){
            title.value = props.solutionFile.getTitle();
            description.value = props.solutionFile.getDescription();
            txtTitle.value = 'Modifier une fiche solution';
            txtButton.value = 'Modifier la fiche solution';
        }

        const pdfFile = ref<File>();

        const submitAddSolutionFile = async () => {
            if (!isUpdate.value && (!title.value || !description.value || !pdfFile.value)) {
                alert('Veuillez remplir le formulaire');
                return;
            }
            if(isUpdate.value && (!title.value || !description.value)) {
                alert('Veuillez remplir le formulaire');
                return;
            }

            const formData = new FormData();
            if(pdfFile.value) {
                formData.append('file', pdfFile.value, pdfFile.value.name);
            }
            formData.append('title', title.value);
            formData.append('description', description.value);

            let response = null;

            if(isUpdate.value){
                response = await axiosCn.put(`/solutionFileCategory/${props.idSolutionFileCategory}/solutionFile/${props.solutionFile?.getSolutionFileId()}`, formData);
            }else{
                response = await axiosCn.post(`/solutionFileCategory/${props.idSolutionFileCategory}/solutionFile`, formData);
            }

            if (response.status === 200) {
                context.emit('refresh', true);
                title.value = '';
                description.value = '';
                pdfFile.value = undefined;
            }
        };

        const changePdfFile = (event: any) => {
            pdfFile.value = event.target.files[0];
        };

        const confirmDeleteSolutionFile = () => {
            confirmDelete.value = true;
        };

        const deleteSolutionFile = async () => {
            const response = await axiosCn.delete(`/solutionFileCategory/${props.idSolutionFileCategory}/solutionFile/${props.solutionFile?.getSolutionFileId()}`);
            if (response.status === 200) {
                context.emit('refresh', false);
            }
        };

        return {
            isAdmin,
            submitAddSolutionFile,
            title,
            description,
            pdfFile,
            changePdfFile,
            txtTitle,
            txtButton,
            isUpdate,
            confirmDeleteSolutionFile,
            deleteSolutionFile,
            confirmDelete
        }
    }
})
</script>

<style scoped>
.inside{
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    color: #2E3092;
}

.title{
    font-weight: bold;
    font-size: x-large;
    margin-bottom: 20px;
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

.labelDescription{
    margin-top: 20px;
    margin-bottom: 20px;
}

.btnClick{
    color: white;
    padding: 10px;
    background-color: #2E3092;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

input{
    width: 300px;
}

textarea{
    width: 300px;
    height: 100px;
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
}

.btnConfirm {
    background-color: green;
    margin-left: 20px;
}

.divButtons{
    margin-top: 20px;
}

</style>