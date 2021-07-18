import {MutationTree} from "vuex";
import State from "@/store/login/state";
import Role from "@/business/enums/role";

const mutations: MutationTree<State> = {
	loginUser(state: State, role: Role){
		state.loginUser(role);
	},
	logoutUser(state: State){
		state.logoutUser();
	}
};

export default mutations;