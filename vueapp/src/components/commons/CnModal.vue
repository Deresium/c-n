<template>
    <teleport to="body">
        <div v-if="modelValue" @click.self="closeModal" class="fullModal">
            <slot></slot>
        </div>
    </teleport>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	emits:['update:modelValue'],
	props:{
		modelValue:{
			type: Boolean,
			required: true,
		}
	},
	setup(props, context){
		const closeModal = () => context.emit('update:modelValue', false);
		
		return{
			closeModal,
		}
	}
});
</script>

<style scoped>
.fullModal{
	z-index: 2;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(30, 30, 30, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>