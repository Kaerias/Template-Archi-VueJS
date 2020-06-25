<template>
  <v-list-item :to="item.route" exact v-if="autorise">
    <v-list-item-action>
      <v-icon>{{item.icone}}</v-icon>
    </v-list-item-action>
    <v-list-item-title>{{item.titre}}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MenuItem, estAutorise } from "./types";
import { Prop } from "@/decorators";
import { namespace } from '../../decorators/vuex';


@Component
export default class Item extends Vue {
  @Prop private item!: MenuItem;

  private roles!: string[];

  private get autorise(): boolean {
    return estAutorise(this.item, this.roles);
  }
}
</script>

