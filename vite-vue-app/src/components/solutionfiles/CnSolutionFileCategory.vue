<template>
    <div class="solutionFileCategory">
        <div class="title">
            <img class="imgIcon" :src="urlIcon" alt="icon"/>
            <p class="title">{{ solutionFileCategory.getName() }}</p>
            <button class="btnShow btnClick" @click="switchSolutionVisibility">{{ txtButtonVisibility }}</button>
            <button class="btnUpdateAdmin btnClick" v-if="isAdmin" @click="showModal">Modifier</button>
            <CnModal v-model="showModalUpdate">
                <CnSolutionFileCategoryForm :solution-file-category="solutionFileCategory" @refresh="refreshView"/>
            </CnModal>
        </div>
        <div v-if="solutionsVisibility" class="solutionFiles" ref="solutionFiles">
            <CnSolutionFile
                v-for="solutionFile in solutionFileCategory.getSolutionFiles()"
                :key="solutionFile.getSolutionFileId()"
                :solution-file="solutionFile"
                :id-solution-file-category="solutionFileCategory.getSolutionFileCategoryId()"
                @refresh="refreshView"
            />
        </div>
        <CnModal v-model="modalAddSolutionFile">
            <CnSolutionFileForm
                :id-solution-file-category="solutionFileCategory.getSolutionFileCategoryId()"
                @refresh="refreshView(false)"
            />
        </CnModal>
        <button class="btnClick btnShowAdd" v-if="isAdmin" @click="showModalAddSolutionFile">Ajouter une fiche solution</button>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed, ref, watch} from "vue";
import SolutionFileCategoryVM from "../../business/models/SolutionFileCategoryVM";
import CnSolutionFile from "./CnSolutionFile.vue";
import CnModal from "../commons/CnModal.vue";
import CnSolutionFileCategoryForm from "./CnSolutionFileCategoryForm.vue";
import CnSolutionFileForm from "./CnSolutionFileForm.vue";
import Sortable from "sortablejs";
import axiosCn from "../../axios/axiosCn";
import {useUserStore} from "../../store/userStore";

export default defineComponent({
    components: {CnSolutionFileForm, CnSolutionFileCategoryForm, CnModal, CnSolutionFile},
    emits: ['refresh'],
    props: {
        solutionFileCategory: {
            type: SolutionFileCategoryVM,
            required: true
        }
    },
    setup(props, context) {
        const userStore = useUserStore();
        const time = ref(new Date().getTime());
        const urlIcon = computed(() => `${import.meta.env.VITE_APP_URL_CN}/solutionFileCategory/${props.solutionFileCategory.getSolutionFileCategoryId()}/icon?time=${time.value}`);
        const isAdmin = computed(() => userStore.onlyAdmin);
        const solutionFiles = ref();
        const solutionsVisibility = ref(false);
        const txtButtonVisibility = computed(() => {
            if(solutionsVisibility.value){
                return 'Masquer les fiches solutions'
            }else{
                return 'Afficher les fiches solutions'
            }
        });

        const modalAddSolutionFile = ref(false);
        const showModalUpdate = ref(false);

        const showModal = () => {
            showModalUpdate.value = true;
        };

        const showModalAddSolutionFile = () => {
            modalAddSolutionFile.value = true;
        };

        const refreshView = (refreshPicture=true) => {
            showModalUpdate.value = false;
            modalAddSolutionFile.value = false;
            if(refreshPicture) {
                time.value = new Date().getTime();
            }
            context.emit('refresh');
        };

        const switchSolutionVisibility = () => {
            solutionsVisibility.value = !solutionsVisibility.value
        };

        watch(solutionFiles, () => {
            if(!isAdmin.value || !solutionFiles.value){
                return;
            }

            new Sortable(solutionFiles.value, {
                onEnd: async (evt) => {
                    if (evt.oldIndex === undefined || evt.newIndex === undefined) {
                        return;
                    }

                    const solutionFileIds = props.solutionFileCategory.getSolutionFilesIds();
                    const element = solutionFileIds[evt.oldIndex];
                    solutionFileIds.splice(evt.oldIndex, 1);
                    solutionFileIds.splice(evt.newIndex, 0, element);
                    const response = await axiosCn.put('/reorderSolutionFile', {
                        solutionFileIds
                    });
                    if (response.status === 200) {
                        context.emit('refresh');
                    }
                }
            });
        });

        return {
            urlIcon,
            isAdmin,
            showModal,
            showModalUpdate,
            refreshView,
            time,
            modalAddSolutionFile,
            showModalAddSolutionFile,
            solutionFiles,
            switchSolutionVisibility,
            solutionsVisibility,
            txtButtonVisibility
        }
    }
})
</script>

<style scoped>
.solutionFileCategory {
    margin-bottom: 70px;
    margin-top: 50px;
}

.imgIcon {
    width: 50px;
    margin-right: 20px;
}

.title {
    display: flex;
    align-items: center;
    margin-right: 10px;
}


.btnShowAdd{
    margin-top: 10px;
}

.btnClick{
    color: white;
    padding: 10px;
    background-color: orangered;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

button.btnShow{
    background-color: #2E3092;
}

.formAddSolutionFile .title{
    font-size: x-large;
    margin-bottom: 10px;
}

input, textarea{
    padding: 2px;
}

.solutionFiles{
    margin-left: 5px;
}

.title{
    font-weight: bold;
    font-size: x-large;
}

.btnUpdateAdmin{
    margin-left: 10px;
}
</style>