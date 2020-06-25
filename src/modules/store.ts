import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from '@/store/types';

export interface TestState {
    str: string;
}

const state: TestState = {
    str: ""
};

const getters: GetterTree<TestState, RootState> = {
    userListe(state) {
        return state.str;
    }
}

const actions: ActionTree<TestState, RootState> = {
    setTest({ commit }, t: String) {
        commit("setTest", t);
    }
};

const mutations: MutationTree<TestState> = {
    setTest(state, t: string) {
        state.str = t;
    }
}

export const test: Module<TestState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
