<template>
    <div>
        <CnTitle>
            <h2>Contact</h2>
        </CnTitle>
        <div class="cnMain">
            <cn-contact-form/>
            <div class="info">
                <div class="infoContact">
                    <div>Cable & Network s.a.</div>
                    <div>
                        <p>Avenue Albert 1er, 14</p>
                        <p>4500 - Huy</p>
                        <p>Belgium</p>
                    </div>
                    <div><a translate="no" href="mailto:info@c-n.be">info@c-n.be</a></div>
                    <div><a href="tel:+3285711777">+32 (0)85 711 777</a></div>
                    <div>TVA: BE0897 818 934</div>
                    <div>
                        <p>Administrateur Délégué:</p>
                        <p>Michel Steinbusch</p>
                    </div>
                </div>
                <div id="googleMap">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnTitle from "@/components/commons/CnTitle.vue";
    import CnContactForm from "@/components/CnContactForm.vue";
    import {Loader} from "@googlemaps/js-api-loader";

    export default defineComponent({
        components: {
            CnTitle,
            CnContactForm
        },
        setup(){
            const loader = new Loader({
                apiKey: "AIzaSyC7EI6usb6H2-fkWcjNfp3wSkK2_FF84Co",
                version: "weekly"
            });

            loader.load().then(() => {
                const company = { lat: 50.525158, lng: 5.234901};
                //@ts-ignore
                // eslint-disable-next-line no-undef
                const map = new google.maps.Map(document.getElementById("googleMap") as HTMLElement, {
                    center: company,
                    zoom: 15,
                });

                //@ts-ignore
                // eslint-disable-next-line no-undef
                new google.maps.Marker({
                    position: company,
                    map: map
                });
            });
        }
    })
</script>

<style scoped>
    #googleMap{
        width: 100%;
        height: 40vh;
        margin-bottom: 2vh;
    }

    .infoContact{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2vh;
        margin-top: 2vh;
    }

    .infoContact > div{
        margin-bottom: 1.5vh;
    }

    div > a{
        color: #2E3092;
        text-decoration: none;
    }

    @media (min-width: 900px) {
        #googleMap{
            width: 80%;
            height: 70vh;
        }

        .infoContact{
            font-size: x-large;
        }

        .info{
            display: flex;
            margin-top: 2vh;
            justify-content: space-between;
        }
    }
</style>