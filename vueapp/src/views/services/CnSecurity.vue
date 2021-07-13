<template>
    <div>
        <cn-service-title :imgName="'camera'" :title="'Security'"/>
        <div class="cnMain">
            <h3>
                Afin de garantir la sécurité de vos infrastructures, nous proposons toute une gamme de solutions dédiée à la sécurité.
                Nous installons de la vidéosurveillance et mettons en place du contrôle d’accès et de la vidéoparlophonie pour davantage de sécurité et de contrôle.
                <br/>
                Toutes les solutions que nous proposons sont généralement IP, ce qui permet de faire voyager l’information en se servant uniquement de câble Ethernet.
            </h3>
            <section class="sectionRight">
                <cn-image-title title="Vidéosurveillance" img-logo-extension="videosurveillance.png" :on-left="false"/>
                <div>
                    <p>
                        La sécurisation des infrastructures passe généralement par l’installation d’un système de vidéosurveillance.
                    </p>
                    <p>
                        Nous vous aidons à choisir les modèles de caméras s’adaptant le mieux à vos besoins. Nous déterminons également les emplacements optimaux.
                    </p>
                    <p>
                        Nous réalisons ensuite la pose des câbles depuis le rack vers les emplacements, et installons les caméras.
                        Une fois les caméras installées, nous configurons le serveur d’enregistrement et le Video Management Software (VMS)
                        pour vous permettre d’accéder aux images.
                    </p>
                </div>
            </section>
            <section class="sectionLeft">
                <cn-image-title title="Caméras ANPR" img-logo-extension="anpr.png" :on-left="true"/>
                <div>
                    <p>
                        Les caméras ANPR (Automatic Number Plate Recognition) sont des caméras très haute
                        définition embarquant de l’intelligence artificielle pour reconnaître automatiquement les plaques d’immatriculation des véhicules.
                    </p>
                    <p>
                        Nous installons ces caméras dans les rues et les parkings pour divers usages:
                        ouverture de barrière automatique, reconnaissance des véhicules circulant dans la ville,...
                    </p>
                </div>
            </section>
            <section class="sectionRight">
                <cn-image-title title="Milestone XProtect – Video Management Software" img-logo-extension="VMS.png" :on-left="false"/>
                <div>
                    <h5>L’expertise de Cable & Network</h5>
                    <p>
                        Nous sommes spécialisés dans l’intégration de solutions Milestone XProtect. Les certifications MCDE et MCIT de nos ingénieurs et techniciens en témoignent.
                    </p>
                    <h5>À propos de Milestone :</h5>
                    <p>
                        Milestone Xprotect est un leader mondial sur le marché des logiciels de gestion vidéo (VMS) open-platform.
                        Notre open-platform VMS peut être amélioré avec des solutions de milliers de fournisseurs de technologie, vous offrant des possibilités infinies et une innovation continue.
                    </p>
                    <h5>Pourquoi choisir Milestone?</h5>
                    <p>
                        &#10148; Performances de pointe et innovation technologique continue
                    </p>
                    <p>
                        &#10148; Solution VMS évolutive
                    </p>
                    <p>
                        &#10148; Open-platform VMS - peut être enrichie de milliers de solutions partenaires
                    </p>
                    <p>
                        &#10148; Extension du système avec une mise à niveau de licence facile
                    </p>
                </div>
            </section>
            <section class="sectionLeft">
                <cn-image-title title="Contrôle d'accès" img-logo-extension="carteaccess.png" :on-left="true"/>
                <div>
                    <p>
                        Le contrôle d'accès permet de faciliter la gestion des accès au sein d'une entreprise.
                        Il n'y a plus besoin de clefs et passe-partouts (qui présente le risque de devoir changer toutes les serrures si on les perd),
                        et on peut contrôler facilement l'accès individuel aux locaux. Cela facilite la vie des employés et
                        des personnes externes (venant visiter ou travailler au sein de vos infrastructures). De plus, comme les caméras IP,
                        le contrôle d'accès se gère aussi par le réseau avec le même type de câblage.
                    </p>
                </div>
            </section>
            <section class="sectionRight">
                <cn-image-title title="Vidéoparlophonie" img-logo-extension="videoparlophonie.png" :on-left="false"/>
                <div>
                    <p>
                        La vidéoparlohonie permet de sécuriser facilement l'accès à des immeubles de bureaux, à appartements,...
                    </p>
                    <p>
                        Elle se gère également par le réseau, uniformisant le câblage nécessaire à la mise en place de votre infrastructure en sécurité.
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import CnServiceTitle from "@/views/services/CnServiceTitle.vue";
    import CnImageTitle from "@/components/commons/CnImageTitle.vue";

    export default defineComponent({
        components: {
            CnServiceTitle,
            CnImageTitle
        }
    })
</script>

<style scoped>
    section{
        margin-bottom: 7vh;
    }

    p{
        margin-top: 1vh;
    }

    h3{
        margin-bottom: 5vh;
    }

    h5{
        font-size: large;
        margin-top: 3vh;
    }

    @media(min-width: 900px){
        section{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        section > *:nth-child(2){
            width: 48%;
        }

        section > *:first-child{
            width: 50%;
        }

        .sectionLeft{
            flex-direction: row-reverse;
        }
    }
</style>