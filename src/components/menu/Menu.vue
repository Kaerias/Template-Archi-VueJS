<template>
  <v-list-group :prepend-icon="item.icone" :value="isOpen">
    <v-list-item slot="activator">
      <v-list-item-title>{{item.titre}}</v-list-item-title>
    </v-list-item>
    <item v-for="(menuItem, i) in item.items" :item="menuItem" :key="i" />
  </v-list-group>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Item from "./Item.vue";
import { MenuListe, estAutorise } from "./types";
import { Prop } from "@/decorators";
import { namespace } from "../../decorators/vuex";


@Component({
  components: { Item }
})
export default class MenuDeroulant extends Vue {
  @Prop private item!: MenuListe;

  get isOpen(): boolean {
    return this.item.items.map(_ => _.route).indexOf(this.$route.path) > -1;
  }

}
</script>
