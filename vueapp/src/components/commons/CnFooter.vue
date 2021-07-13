<template>
    <footer>
        <div>
            Cable & Network s.a.
        </div>
        <div>
            <img src="../../assets/icons/mail.svg" alt="mail logo"/>
            <p><a href="mailto:info@c-n.be">info@c-n.be</a></p>
        </div>
        <div>
            <img src="../../assets/icons/phone.svg" alt="phone logo"/>
            <p><a href="tel:+3285711777">+32 (0)85 711 777</a></p>
        </div>
        <div>
            <img src="../../assets/icons/home.svg" alt="home logo"/>
            <div class="address">
                <p>Avenue Albert 1er, 14</p>
                <p>4500 - Huy</p>
                <p>Belgium</p>
            </div>
        </div>
        <div class="social">
            <a href="https://www.linkedin.com/company/cableandnetwork/" rel="noopener" target="_blank">
                <img src="../../assets/icons/linkedin.png" alt="linkedin logo"/>
            </a>
        </div>
        <div>
            <router-link class="toCvg" to="/CGV">Conditions générales de vente</router-link>
        </div>
        <div>
            <p><a href="https://www.creatiview.be" rel="noopener" target="_blank">Réalisé par <span class="creativiewLink">Creatiview.be</span></a></p>
        </div>
    </footer>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({

    })
</script>

<style scoped>
    footer{
        background-color: #FEFE00;
        color: #2E3092;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: large;
    }

    footer > div{
        display: flex;
        margin-top: 1vh;
        margin-bottom: 1vh;
    }

    p > a{
        text-decoration: none;
        color: #2E3092;
    }

    .address{
        text-align: center;
    }

    footer > div > img, .social > a:first-child{
        margin-right: 2vw;
    }

    .social img{
        height: 5vh;
    }

    .creativiewLink{
        font-weight: bold;
    }

    .toCvg{
        color: #2E3092;
        text-decoration: none;
    }

    @media (min-width: 900px) {
        footer{
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-left: 5%;
            padding-right: 5%;
            width: 90%;
            height: 100px;
        }

        .social img{
            height: 5vh;
        }

        footer > div > img{
            margin-right: 0.5vw;
        }
    }
</style>