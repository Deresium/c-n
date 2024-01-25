import {defineStore} from "pinia";
import UserState from "./UserState";
import Role from "../business/enums/role";

export const useUserStore = defineStore('user', {
    state: () => ({userState: new UserState()}),
    actions: {
        loginUser(role: Role){
            this.userState.loginUser(role)
        },
        logoutUser(){
            this.userState.logoutUser();
        }
    },
    getters: {
        onlyAdmin: state => state.userState.getOnlyAdmin(),
        isLoggedIn: state => state.userState.getIsLoggedIn(),
        getRole: state => state.userState.getUserRole(),
        onlyAuthenticated: state => state.userState.getOnlyAuthenticated()
    }
});