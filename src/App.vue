<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { authentification } from "@/modules/authentification/store";
import { features } from "@/features/store";

@Component
export default class App extends Vue {
  public mounted() {
    window.addEventListener("offline", this._toggleNetworkStatus);
    window.addEventListener("online", this._toggleNetworkStatus);
  }

  public destroyed() {
    window.removeEventListener("offline", this._toggleNetworkStatus);
    window.removeEventListener("online", this._toggleNetworkStatus);
  }

  private _toggleNetworkStatus({ type }: { type: string }) {
    this.$store.dispatch("toggleNetworkStatus", type === "online");
  }

}
</script>
