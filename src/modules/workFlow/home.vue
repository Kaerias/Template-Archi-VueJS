<template>
  <v-row>
    <toolbar />
    <v-col>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { namespace, State, Action } from "@/decorators/vuex";
import { RootState } from "@/store/types";
import { FeatureState } from "@/features/types";
import { Watch } from "@/decorators";
import FeatureView from "@/features/Index.vue";
import router from "@/router";
import Toolbar from "@/layout/Toolbar.vue";

const module = namespace("authentification");
const features = namespace("features");

@Component({
  components: {
    FeatureView,
    Toolbar
  }
})
export default class Home extends Vue {}
</script>

<style>
</style>