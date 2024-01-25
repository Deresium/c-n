<template>
    <div class="inside">
        <form v-if="isAdmin" class="formAddSolutionFileCategory" @submit.prevent="submitAddSolutionFileCategory"
              novalidate>
            <p v-if="!isUpdate" class="formTitle">Ajouter une catégorie</p>
            <p v-if="isUpdate" class="formTitle">Modification d'une catégorie</p>
            <label class="labelName">
                <span>Nom</span>
                <input type="text" v-model="solutionFileCategoryName"/>
            </label>
            <label class="inputIcon">
                <input type="file" @change="changeIcon"/>
                <span class="pickFile">Choisir un fichier</span>
                <span class="spanIconName" v-if="icon && icon.name">{{ icon.name }}</span>
            </label>
            <button class="btnAddCategory" type="submit">{{ txtButton }}</button>
        </form>
        <div v-if="isUpdate">
            <button class="btnAdmin btnDelete" v-if="isAdmin" @click="confirmDeleteSolutionFileCategory">
                Supprimer
            </button>
            <button class="btnAdmin btnConfirm" v-if="isAdmin && confirmDelete" @click="deleteSolutionFileCategory">
                Confirmer
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import axiosCn from "../../axios/axiosCn";
import SolutionFileCategoryVM from "../../business/models/SolutionFileCategoryVM.ts";
import {useUserStore} from "../../store/userStore.ts";

export default defineComponent({
    emits: ['refresh'],
    props: {
        solutionFileCategory: {
            type: SolutionFileCategoryVM,
            required: false
        }
    },
    setup(props, context) {
        const userStore = useUserStore();
        const isAdmin = computed(() => userStore.onlyAdmin);
        const confirmDelete = ref(false);

        let initialCategoryName = '';
        if (props.solutionFileCategory) {
            initialCategoryName = props.solutionFileCategory.getName();
        }
        const solutionFileCategoryName = ref(initialCategoryName);

        const icon = ref<File>();
        const isUpdate = computed(() => props.solutionFileCategory);

        const txtButton = ref('Ajouter une catégorie');
        if (isUpdate.value) {
            txtButton.value = 'Modifier la catégorie';
        }

        const changeIcon = (event: any) => {
            icon.value = event.target.files[0];
        };

        const submitAddSolutionFileCategory = async () => {
            if (!isUpdate.value && (!solutionFileCategoryName.value || !icon.value)) {
                alert('Veuillez remplir tout le formulaire');
                return;
            }
            if (isUpdate.value && (!solutionFileCategoryName.value)) {
                alert('Veuillez remplir tout le formulaire');
                return;
            }

            const formData = new FormData();
            if (icon.value && icon.value.name) {
                formData.append('file', icon.value, icon.value.name);
            }
            formData.append('categoryName', solutionFileCategoryName.value);

            let response = undefined;
            if (isUpdate.value) {
                response = await axiosCn.put(`/admin/solutionFileCategory/${props.solutionFileCategory?.getSolutionFileCategoryId()}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            } else {
                response = await axiosCn.post('/admin/solutionFileCategory', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }
            if (response.status === 200) {
                context.emit('refresh');
                icon.value = undefined;
                solutionFileCategoryName.value = '';
            }
        };

        const confirmDeleteSolutionFileCategory = () => {
            confirmDelete.value = true;
        };

        const deleteSolutionFileCategory = async () => {
            const response = await axiosCn.delete(`/solutionFileCategory/${props.solutionFileCategory?.getSolutionFileCategoryId()}`);
            if (response.status === 200) {
                context.emit('refresh', false);
            }
        };

        return {
            isAdmin,
            solutionFileCategoryName,
            icon,
            changeIcon,
            submitAddSolutionFileCategory,
            isUpdate,
            txtButton,
            confirmDeleteSolutionFileCategory,
            deleteSolutionFileCategory,
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
}

.labelName {
    display: block;
    margin-bottom: 20px;
}

.inputIcon input {
    display: none;
}

.labelName span {
    display: block;
}

.pickFile {
    display: inline-block;
    padding: 2px;
    border: solid 1px #2e3092;
}

.formTitle {
    font-size: x-large;
    margin-bottom: 10px;
}

.inputIcon {
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 5px;
}

.spanIconName {
    margin-top: 2px;
    display: block;
}

.btnAddCategory {
    display: block;
    padding: 10px;
    border: solid 1px #2E3092;
    border-radius: 5px;
    color: white;
    background-color: #2E3092;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
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
</style>