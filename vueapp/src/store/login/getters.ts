import {GetterTree} from "vuex";
import State from "@/store/login/state";
import StoreState from "@/store/StoreState";
import Role from "@/business/enums/Role";

const getters: GetterTree<State, StoreState> = {
	isLoggedIn(state): boolean{
		return state.getIsLoggedIn();
	},
	getRole(state): Role | null{
		return state.getUserRole();
	},
	onlyAdmin(state): boolean{
		return state.getOnlyAdmin();
	},
	onlyAuthenticated(state): boolean{
		return state.getOnlyAuthenticated();
	}
};

export default getters;