import {createStore} from 'vuex'
import login from "@/store/login/login";
import StoreState from "@/store/StoreState";

export default createStore<StoreState>({
    modules: {
        login
    }
})