<template>
  <div>
    <p>test = {{testsss}}</p>
    <v-text-field v-model="tmp"></v-text-field>
    <button @click="click()">tmp</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { namespace, State, Action } from "@/decorators/vuex";
import { test } from "./store";

const module = namespace("test");

@Component
export default class Login extends Vue {
  @module.Getter("userListe")
  private testsss!: string;

  private tmp: string = "";

  @module.Action("setTest")
  private tests!: (t: string) => void;

  public beforeCreate() {
      this.$store.registerModule("test", test)
  }

  private set modelTest(t: string) {
    this.tmp = t;
  }

  private get modelTest() {
    return this.testsss;
  }

  private click() {
    this.tests(this.tmp);
  }

  public mounted() {
    this.tests("dsq");
  }
}
</script>

<style>
</style>