import {ActionTree} from "vuex";
import State from "@/store/login/state";
import StoreState from "@/store/StoreState";
import Role from "@/business/enums/role";

const actions: ActionTree<State, StoreState> = {
	loginUser(context, role: Role){
		context.commit('loginUser', role);
	},
	logoutUser(context){
		context.commit('logoutUser');
	}
};

export default actions;