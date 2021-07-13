import {RouteRecordRaw} from "vue-router";
import CnHome from "@/views/CnHome.vue";
import CnITinfrastructure from "@/views/services/CnITinfrastructure.vue";
import CnPowerSupply from "@/views/services/CnPowerSupply.vue";
import CnNetwork from "@/views/services/CnNetwork.vue";
import CnSecurity from "@/views/services/CnSecurity.vue";
import CnProject from "@/views/CnProject.vue";
import CnUliegeProject from "@/views/projects/CnUliegeProject.vue";
import CnUnamurProject from "@/views/projects/CnUnamurProject.vue";
import CnWdcProject from "@/views/projects/CnWdcProject.vue";
import CnProvinceLiegeProject from "@/views/projects/CnProvinceLiegeProject.vue";
import CnMestdaghProject from "@/views/projects/CnMestdaghProject.vue";
import CnGracehollogneProject from "@/views/projects/CnGracehollogneProject.vue";
import CnVesuvius from "@/views/projects/CnVesuvius.vue";
import CnAboutUs from "@/views/CnAboutUs.vue";
import CnContact from "@/views/CnContact.vue";
import CnGallery from "@/views/CnGallery.vue";
import Cn10Years from "@/components/gallery/Cn10Years.vue";
import CnSolutionFiles from "@/views/CnSolutionFiles.vue";
import CnCertification from "@/views/CnCertification.vue";
import CnEquipment from "@/views/CnEquipment.vue";
import CnNews from "@/views/CnNews.vue";
import CnCVG from "@/views/CnCVG.vue";
import CnLogin from "@/views/CnLogin.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: CnHome
    },
    {
        path: '/services/ITinfrastructure',
        component: CnITinfrastructure,
    },
    {
        path: '/services/powersupply',
        component: CnPowerSupply,
    },
    {
        path: '/services/network',
        component: CnNetwork,
    },
    {
        path: '/services/security',
        component: CnSecurity,
    },
    {
        path: '/projets',
        component: CnProject,
    },
    {
        path: '/projets/uliege',
        component: CnUliegeProject
    },
    {
        path: '/projets/unamur',
        component: CnUnamurProject
    },
    {
        path: '/projets/wdc',
        component: CnWdcProject
    },
    {
        path: '/projets/provinceLiege',
        component: CnProvinceLiegeProject
    },
    {
        path: '/projets/mestdagh',
        component: CnMestdaghProject
    },
    {
        path: '/projets/gracehollogne',
        component: CnGracehollogneProject
    },
    {
        path: '/projets/vesuvius',
        component: CnVesuvius
    },
    {
        path: '/aboutus',
        component: CnAboutUs
    },
    {
        path: '/contact',
        component: CnContact
    },
    {
        path: '/gallery',
        component: CnGallery
    },
    {
        path: '/gallery/10years',
        component: Cn10Years
    },
    {
        path: '/fichesSolutions',
        component: CnSolutionFiles
    },
    {
        path: '/certifications',
        component: CnCertification
    },
    {
        path: '/equipement',
        component: CnEquipment
    },
    {
        path: '/news',
        component: CnNews
    },
    {
        path: '/CGV',
        component: CnCVG
    },
    {
        path: '/login',
        component: CnLogin
    },
    {
        path: '/:pathMatch(.*)*', redirect: '/'
    }
]

export default routes