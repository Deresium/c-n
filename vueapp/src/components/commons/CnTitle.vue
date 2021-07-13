<template>
        <div :style="paddingStyle" class="title">
            <slot></slot>
        </div>
</template>

<script lang="ts">
    import {defineComponent, computed} from "vue";

    export default defineComponent({
        props:{
            paddingLeft: {
                required: false
            }
        },
        setup(props){
            const padding = computed(() => {
                if(props.paddingLeft)
                    return props.paddingLeft
                return 10;
            })

            const paddingStyle = computed(() => {
                return{
                    'padding-left': padding.value + '%'
                }
            })

            return{
                paddingStyle
            }
        }
    })
</script>

<style scoped>
    .title{
        margin-top: 5vh;
        color: #2E3092;
        padding-top: 2vh;
        padding-bottom: 2vh;
        margin-bottom: 2vh;
        display: flex;
        align-items: center;
        background: linear-gradient(90deg, rgba(254, 254, 0, 0.75),rgba(254, 254, 0, 0));
    }
</style>