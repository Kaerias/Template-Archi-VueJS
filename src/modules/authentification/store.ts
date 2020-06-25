import { ActionTree, MutationTree, Module, GetterTree } from 'vuex';
import { RootState, Notification } from '@/store/types';
import { User } from './types';
import * as client from "./service";
import router from "@/router";

const savedUser = JSON.parse(window.localStorage.getItem('user') as string) as User;

export interface AuthentificationState {
    isLogged: boolean;
    user: User | null;
    isReset: boolean;
}

const state: AuthentificationState = {
    isLogged: true,
    user: savedUser,
    isReset: true,
};

const getters: GetterTree<AuthentificationState, RootState> = {
    userName(state): string {
        return state.user ? `${state.user.username}` : "";
    },
    isLogged(state): boolean {
        return state.isLogged;
    },
};

const actions: ActionTree<AuthentificationState, RootState> = {
    login({ commit, dispatch }, { email, password }) {
        return client.authenticate({
            email,
            password
        }).then(data => {
            window.localStorage.setItem('user', JSON.stringify(data.user));
            commit('logged', { user: data.user, token: data.token });
            router.push("/profile");
        }).catch(err => {
            const notification: Notification = {
                message: err,
                severite: "error"
            };
            dispatch('showNotification', notification, { root: true });
        });
    },
    register({ dispatch }, { email, username, password }) {
        return client.register({
            email,
            username,
            password
        }).then(data => {
            const notification: Notification = {
                message: 'user created',
                severite: "success"
            };
            dispatch('showNotification', notification, { root: true });
        }).catch(e => {
            const notification: Notification = {
                message: e,
                severite: "error"
            };
            dispatch('showNotification', notification, { root: true });
        });
    },
    logout({ commit }) {
        window.localStorage.removeItem('user');
        commit('disconnected');
        router.push("/login");
    },
};

const mutations: MutationTree<AuthentificationState> = {
    logged(currentState, { user, token }: { user: User, token: string }) {
        currentState.isLogged = !!token;
        currentState.user = user;
    },
    disconnected(state) {
        state.isLogged = false;
        state.user = null;
    },
    reset(state, result: boolean) {
        state.isReset = result;
    },
    profilChange(state, user: User) {
        state.user = user;
    }
};

export const authentification: Module<AuthentificationState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
