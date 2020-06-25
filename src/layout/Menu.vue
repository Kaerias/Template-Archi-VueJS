<template>
  <v-list nav>
    <item :item="menuAccueil" />
    <menu-deroulant :item="menuAdministration" />
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Item from "@/components/menu/Item.vue";
import MenuDeroulant from "@/components/menu/Menu.vue";
import { MenuItem, MenuListe } from "@/components/menu/types";

@Component({
  components: { Item, MenuDeroulant }
})
export default class Menu extends Vue {
  private isAdministrationOpen: boolean = false;
  private isLogistique: boolean = false;

  private menuAccueil: MenuItem = {
    titre: "Accueil",
    icone: "home",
    route: "/"
  };

  private menuAdministration: MenuListe = {
    titre: "Administration",
    icone: "lock",
    items: [
      {
        titre: "Gestion des utilisateurs",
        icone: "account_circle",
        route: "/utilisateurs",
      },
    ]
  };
}
</script>

<style>
</style>
