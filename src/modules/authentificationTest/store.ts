import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from '@/store/types';
import { loginPost } from './service';
import { Auth } from './type';

export interface AuthentificationTestState {
    str: string;
}

const state: AuthentificationTestState = {
    str: ""
};

const getters: GetterTree<AuthentificationTestState, RootState> = {
    userListe(state) {
        return state.str;
    }
}

const actions: ActionTree<AuthentificationTestState, RootState> = {
    login({ commit }, t: Auth) {
        loginPost("sqdsdqs");
    }
};

const mutations: MutationTree<AuthentificationTestState> = {
    setTest(state, t: string) {
        state.str = t;
    }
}

export const authentificationTest: Module<AuthentificationTestState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
