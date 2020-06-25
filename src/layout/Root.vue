<template>
  <v-app :dark="darkMode">
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span>{{appName}}</span>
      <v-spacer></v-spacer>
      <span>v{{version}} &copy; {{annee}}</span>
    </v-footer>
    <notifications />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Component from "vue-class-component";
import { State, namespace } from "@/decorators/vuex";
import { RootState } from "@/store/types";
import Notifications from "@/components/Notification.vue";
import { FeatureState } from "@/features/types";
import { Watch } from "../decorators";
import NetworkStatus from "@/components/NetworkStatus.vue";
import Toolbar from "./Toolbar.vue";
import LeftMenu from "./Menu.vue";
import FeatureView from "@/features/Index.vue";

const featureModule = namespace("features");

@Component({
  components: {
    Notifications,
    NetworkStatus,
    Toolbar,
    LeftMenu,
    FeatureView
  }
})
export default class Root extends Vue {
  private drawer: boolean = false;
  private featuresDrawer: boolean = false;
  private environnement: string = `${process.env.VUE_APP_ENV_NAME}`;

  @featureModule.State((state: FeatureState) => state.darkMode)
  private darkMode!: boolean;

  private annee: number = new Date().getFullYear();
  private appName: string = "Viticia";
  private version: string = `${process.env.VUE_APP_VERSION}`;

  private modifierMotPasseModal: boolean = false;

  public created() {
    this.$vuetify.theme.dark = this.darkMode;
  }

  public get iconeReseau(): string {
    return this.$store.state.isOnline ? "signal_wifi_4_bar" : "signal_wifi_off";
  }
  public get couleurReseau(): string {
    return this.$store.state.isOnline ? "green" : "red";
  }
  @Watch("darkMode")
  public onThemeChange(val: boolean) {
    this.$vuetify.theme.dark = val;
  }
}
</script>
