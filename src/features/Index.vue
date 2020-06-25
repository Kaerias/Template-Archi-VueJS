<template>
  <v-list>
    <ItemView title="Dark Mode" :activated="darkMode" @toggle="changeDarkMode($event)"/>
    <v-divider/>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "@/decorators/vuex";
import { FeatureState } from "./types";
import { Watch } from "@/decorators";
import ItemView from "./Item.vue";

const module = namespace("features");
const authModule = namespace("authentication");

@Component({
  components: { ItemView }
})
export default class Index extends Vue {
  @module.State((state: FeatureState) => state.darkMode)
  private darkMode!: boolean;

  @module.Action("changeDarkMode")
  private changeDarkMode!: (activate: boolean) => void;
}
</script>