<template>
  <v-snackbar v-model="showSnackbar" :color="color" multi-line :timeout="timeout" top>
    {{ message }}
    <v-btn dark text @click="showSnackbar = false">Fermer</v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "../decorators";
import { Notification, RootState } from "../store/types";
import { Action, State } from "../decorators/vuex";

@Component
export default class NotificationModule extends Vue {
  private showSnackbar: boolean = false;
  private timeout: number = 10000;
  private color: string = "error";
  private message: string = "";

  @State((state: RootState) => state.notification)
  private notification!: Notification | undefined;

  @Action("resetNotification")
  private resetNotification!: () => void;

  @Watch("showSnackbar")
  private onSnackbarClose(val: boolean, oldVal: boolean) {
    if (val !== oldVal && !val) {
      this.resetNotification();
    }
  }

  @Watch("notification")
  private onNotificationChange(val?: Notification) {
    if (val) {
      this.message = val.message;
      this.color = val.severite;
      this.showSnackbar = true;
    }
  }
}
</script>

<style>
</style>
