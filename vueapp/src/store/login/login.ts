import State from "@/store/login/state";
import {Module} from "vuex";
import StoreState from "@/store/StoreState";
import actions from "@/store/login/actions";
import mutations from "@/store/login/mutations";
import getters from "@/store/login/getters";

const state: State = new State();

const login: Module<State, StoreState> = {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};

export default login;