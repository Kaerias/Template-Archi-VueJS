import Vue from "vue";
import Vuex, { StoreOptions, ActionTree, MutationTree } from "vuex";
import fetch from "../services/FetchV2Service";

import { features } from "@/features/store";
import { RootState, Notification } from "./types";
import { test } from "@/modules/store";
import { authentification } from "@/modules/authentification/store";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state: RootState = {
  pageName: "Backoffice",
  isOnline: true,
  notification: undefined
};

const actions: ActionTree<RootState, any> = {
  setPageName({ commit, state }, pageName) {
    if (state.pageName !== pageName) {
      commit("pageNameChanged", pageName);
    }
  },
  toggleNetworkStatus({ commit, state }, isOnline) {
    if (state.isOnline !== isOnline) {
      commit("networkStateChanged", isOnline);
      const notification: Notification = {
        message: isOnline ? "L'application est maintenant connectée à Internet" : "Vous êtes passé en mode hors connexion",
        severite: isOnline ? "success" : "error"
      };
      commit("notificationCreated", notification);
    }
  },
  resetNotification({ commit }) {
    commit("notificationReset");
  },
  showNotification({ commit }, notif: Notification) {
    commit("notificationCreated", notif);
  }
};

const mutations: MutationTree<RootState> = {
  pageNameChanged(state: RootState, pageName: string) {
    state.pageName = pageName;
  },
  networkStateChanged(state: RootState, isOnline: boolean) {
    state.isOnline = isOnline;
  },
  notificationCreated(state: RootState, notif: Notification) {
    state.notification = notif;
  },
  notificationReset(state: RootState) {
    state.notification = undefined;
  }
};

const store: StoreOptions<any> = {
  state,
  actions,
  mutations,
  modules: {
    authentification,
    features,
  },
};

export default new Vuex.Store<any>(store);
