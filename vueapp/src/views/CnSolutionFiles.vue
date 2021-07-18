<template>
    <div>
        <CnTitle>
            <h2>Fiches Solutions</h2>
        </CnTitle>
        <div class="cnMain">
            <h3>
                Les Fiches Solutions nous permettent de vous présenter plus en détails les différentes solutions que
                nous vous proposons.
            </h3>
            <form v-if="isAdmin" class="formAddSolutionFileCategory" @submit.prevent="submitAddSolutionFileCategory" novalidate="novalidate">
                <p class="formTitle">Ajouter une catégorie</p>
                <label class="labelName">
                    <span>Nom</span>
                    <input type="text" v-model="solutionFileCategoryName"/>
                </label>
                <label class="inputIcon">
                    <input type="file" @change="changeIcon"/>
                    <span class="pickFile">Choisir un fichier</span>
                    <span class="spanIconName" v-if="icon && icon.name">{{ icon.name }}</span>
                </label>
                <button class="btnAddCategory" type="submit">Ajouter une catégorie</button>
            </form>
            <div class="solutionFileCategories">
                <CnSolutionFileCategory
                    v-for="solutionFileCategory in solutionFileCategories"
                    :key="solutionFileCategory.getSolutionFileCategoryId()"
                    :solution-file-category="solutionFileCategory"
                    @refresh="getSolutionFileCategories"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import CnTitle from "@/components/commons/CnTitle.vue";
import SolutionFileCategoryVM from "@/business/models/SolutionFileCategoryVM";
import SolutionFileCategoryRequest from "@/business/requesters/requests/SolutionFileCategoryRequest";
import store from "@/store/store";
import axiosCn from "@/axios/axiosCn";
import CnSolutionFileCategory from "@/components/solutionfiles/CnSolutionFileCategory.vue";

export default defineComponent({
    components: {
        CnSolutionFileCategory,
        CnTitle
    },
    setup(){
        const isAdmin = computed(() => store.getters['login/onlyAdmin']);
        const solutionFileCategories = ref(new Array<SolutionFileCategoryVM>());

        const solutionFileCategoryName = ref('');
        const icon = ref<File>();

        const changeIcon = (event: any) => {
            icon.value = event.target.files[0];
        };

        const submitAddSolutionFileCategory = async() => {
            if(!solutionFileCategoryName.value || !icon.value || !icon.value.name){
                alert('Veuillez remplir tout le formulaire');
                return;
            }

            const formData = new FormData();
            formData.append('file', icon.value, icon.value.name);
            formData.append('categoryName', solutionFileCategoryName.value);
            const response = await axiosCn.post('/admin/solutionFileCategory', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(response.status === 200){
                await getSolutionFileCategories();
                icon.value = undefined;
                solutionFileCategoryName.value = '';
            }
        };

        const getSolutionFileCategories = async () => {
            solutionFileCategories.value = await new SolutionFileCategoryRequest().querySolutionFileCategories();
        };

        getSolutionFileCategories();

        return{
            solutionFileCategories,
            isAdmin,
            submitAddSolutionFileCategory,
            solutionFileCategoryName,
            icon,
            changeIcon,
            getSolutionFileCategories
        }
    }
})
</script>

<style scoped>
h2 {
    font-family: 'Ace Sans', serif;
}

.formAddSolutionFileCategory{
    margin-top: 20px;
    margin-bottom: 20px;
}

.inputIcon input{
    display: none;
}

.labelName{
    display: block;
    margin-bottom: 20px;
}

.labelName span{
    display: block;
}

.pickFile{
    display: inline-block;
    padding: 2px;
    border: solid 1px #2e3092;
}

.formTitle{
    font-size: x-large;
    margin-bottom: 10px;
}

.inputIcon{
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 5px;
}

.spanIconName{
    margin-top: 2px;
    display: block;
}

.btnAddCategory{
    display: block;
    padding: 10px;
    border: solid 1px #2E3092;
    border-radius: 5px;
    color: white;
    background-color: #2E3092;
    cursor: pointer;
    margin-top: 20px;
}
</style>