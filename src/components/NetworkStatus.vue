<template>
  <v-list-item>
    <v-list-item-action>
      <v-icon v-if="networkStatus.icon" :color="networkStatus.color">{{networkStatus.icon}}</v-icon>
    </v-list-item-action>
    <v-list-item-title>{{networkStatus.text}}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import { State } from '@/decorators/vuex';
import { RootState } from '@/store/types';
import Component from 'vue-class-component';

interface Status {
  icon: "signal_wifi_4_bar" | "signal_wifi_off";
  color: "green" | "red";
  text: "En ligne" | "Hors ligne";
}

@Component
export default class NetworkStatus extends Vue {
    @State((state: RootState) => state.isOnline) private isOnline!: boolean;

    get networkStatus(): Status {
    return {
      icon: this.isOnline ? "signal_wifi_4_bar" : "signal_wifi_off",
      color: this.isOnline ? "green" : "red",
      text: this.isOnline ? "En ligne" : "Hors ligne"
    };
  }
}
</script>
