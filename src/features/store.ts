import { ActionTree, MutationTree, Module } from "vuex";
import { FeatureState } from './types';
import { RootState } from "@/store/types";

const featureDarkeMode = "feature_darkMode";

const isFeatureEnabled = (code: string) => localStorage.getItem(code) === "true";

const toggleFeature = (feature: string, activate: boolean) => {
    if (activate) {
        localStorage.setItem(feature, "true");
    } else {
        localStorage.removeItem(feature);
    }
}

interface FeatureToggled {
    name: "darkMode";
    activated: boolean;
}

const state: FeatureState = {
    darkMode: isFeatureEnabled(featureDarkeMode),
};

const actions: ActionTree<FeatureState, RootState> = {
    changeDarkMode({ commit, state }, activate: boolean) {
        if (state.darkMode !== activate) {
            toggleFeature(featureDarkeMode, activate);
            commit("featureToggled", { name: "darkMode", activated: activate });
        }
    },
};

const mutations: MutationTree<FeatureState> = {
    featureToggled(state: FeatureState, feature: FeatureToggled) {
        state[feature.name] = feature.activated;
    },
}

export const features: Module<FeatureState, RootState> = {
    namespaced: true,
    state,
    actions,
    mutations
};
