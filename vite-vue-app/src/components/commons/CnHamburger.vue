<template>
    <div class="hamburgerMenu">
        <transition name="closeOnHimself" mode="out-in">
            <img v-if="!showMenuPhone" src="/icons/menu.svg" alt="icon-menu" key="imgMenu"/>
            <img v-else src="/icons/clear.svg" alt="icon-delete" key="imgDelete"/>
        </transition>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue"
    export default defineComponent({
        props:{
            showMenuPhone:{
                type: Boolean,
                required: true
            }
        }
    })
</script>

<style scoped>
    img{
        width: 100%;
    }

    .closeOnHimself-enter-active{
        animation: openOnHimself 0.1s forwards;
    }

    .closeOnHimself-leave-active{
        animation: closeOnHimself 0.1s forwards;
    }

    .hamburgerMenu{
        z-index: 6;
    }

    @keyframes closeOnHimself {
        from{
            transform: rotateY(0deg);
        }
        to{
            transform: rotateY(90deg);
        }
    }

    @keyframes openOnHimself {
        from{
            transform: rotateY(90deg);
        }
        to{
            transform: rotateY(0deg);
        }
    }
</style>