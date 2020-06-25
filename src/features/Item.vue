<template>
  <v-list-item @click="() => {}">
    <v-list-item-action>
      <v-switch :input-value="activated" @change="$emit('toggle', $event)"/>
    </v-list-item-action>

    <v-list-item-content @click.prevent="$emit('toggle', !activated)">
      <v-list-item-title>{{title}}</v-list-item-title>
      <v-list-item-subtitle v-if="subTitle">{{subTitle}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Props } from "@/decorators";
import Component from "vue-class-component";

@Component
export default class FeatureItem extends Vue {
  @Prop private activated!: boolean;
  @Prop private title!: string;
  @Props({ required: false, default: '' }) private subTitle!: string;
}
</script>

