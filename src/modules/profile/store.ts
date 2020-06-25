import { Module, GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import {User} from "./types";

// tslint:disable-next-line: no-empty-interface
export interface ProfileState {
}

const state: ProfileState = {
};

const getters: GetterTree<ProfileState, RootState> = {
  userName(state, getter, rootState): string {
    return rootState.authentification && rootState.authentification.user ? `${rootState.authentification.user.username}` : "";
  },
  userEmail(state, getter, rootState): string {
    return rootState.authentification && rootState.authentification.user ? `${rootState.authentification.user.email}` : "";
  }
};

export const profile: Module<ProfileState, RootState> = {
  namespaced: true,
  state,
  getters
};
