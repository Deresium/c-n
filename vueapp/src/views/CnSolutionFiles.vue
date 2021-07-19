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
            <button v-if="isAdmin" class="btnAddCategory" @click="showModal">Ajouter une catégorie</button>
            <CnModal v-model="showModalAddCategory">
                <CnSolutionFileCategoryForm @refresh="getSolutionFileCategories"/>
            </CnModal>
            <div class="solutionFileCategories" ref="solutionFileCategoriesHtml">
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
import {computed, defineComponent, onMounted, ref} from "vue";
import CnTitle from "@/components/commons/CnTitle.vue";
import SolutionFileCategoryVM from "@/business/models/SolutionFileCategoryVM";
import SolutionFileCategoryRequest from "@/business/requesters/requests/SolutionFileCategoryRequest";
import store from "@/store/store";
import CnSolutionFileCategory from "@/components/solutionfiles/CnSolutionFileCategory.vue";
import CnModal from "@/components/commons/CnModal.vue";
import CnSolutionFileCategoryForm from "@/components/solutionfiles/CnSolutionFileCategoryForm.vue";
import Sortable from "sortablejs";
import axiosCn from "@/axios/axiosCn";

export default defineComponent({
    components: {
        CnSolutionFileCategoryForm,
        CnSolutionFileCategory,
        CnTitle,
        CnModal
    },
    setup(){
        const isAdmin = computed(() => store.getters['login/onlyAdmin']);
        const solutionFileCategories = ref(new Array<SolutionFileCategoryVM>());
        const showModalAddCategory = ref(false);
        const solutionFileCategoriesHtml = ref();

        const solutionFileCategoryIds = () => {
            return solutionFileCategories.value.map(solutionFileCategory => solutionFileCategory.getSolutionFileCategoryId());
        };

        const showModal = () => {
            showModalAddCategory.value = true;
        };

        if(isAdmin.value) {
            onMounted(() => {
                new Sortable(solutionFileCategoriesHtml.value, {
                    onEnd: async (evt) => {
                        if (evt.oldIndex === undefined || evt.newIndex === undefined) {
                            return;
                        }

                        const solutionFileCategoryIdsLocal = solutionFileCategoryIds();
                        const element = solutionFileCategoryIdsLocal[evt.oldIndex];
                        solutionFileCategoryIdsLocal.splice(evt.oldIndex, 1);
                        solutionFileCategoryIdsLocal.splice(evt.newIndex, 0, element);
                        const response = await axiosCn.put('/reorderSolutionFileCategory', {
                            solutionFileCategoryIds: solutionFileCategoryIdsLocal
                        });
                        if (response.status === 200) {
                            await getSolutionFileCategories();
                        }
                    }
                });
            });
        }

        const getSolutionFileCategories = async () => {
            solutionFileCategories.value = await new SolutionFileCategoryRequest().querySolutionFileCategories();
            showModalAddCategory.value = false;
        };

        getSolutionFileCategories();

        return{
            solutionFileCategories,
            isAdmin,
            getSolutionFileCategories,
            showModalAddCategory,
            showModal,
            solutionFileCategoriesHtml
        }
    }
})
</script>

<style scoped>
h2 {
    font-family: 'Ace Sans', serif;
}

h3{
    margin-bottom: 20px;
}

.btnAddCategory{
    display: block;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: orangered;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>