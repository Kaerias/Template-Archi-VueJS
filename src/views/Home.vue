<template>
  <div class="home">
  <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
})
export default class Home extends Vue {
  public mounted() {
    this.$store.dispatch("setPageName", "Vitica");
  }
}
</script>

<style>
.card-link {
  cursor: pointer;
}
.homeTitle {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 0.5em;
}
</style>

