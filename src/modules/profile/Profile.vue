<template>
    <v-app :dark="darkMode" id="inspire">
        <v-content>
            <v-container fill-height fluid>
                <div id="profile">
                    <div class="container-fluid">
                        <div class="row min-vh-100 flex-column flex-md-row">
                            <!--<app-sidebar></app-sidebar>-->
                            <div class="col-md-11 col-lg-11">
                                <div class="row principal-block">
                                    <div class="col-lg-12">
                                        <div class="page-titles">
                                            <h1 class="page-titles__weather">Profil</h1>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 d-flex justify-content-center">
                                        <form class="form-style-7 form-inline justify-content-center">
                                            <div class="col-lg-12 d-flex justify-content-center">
                                                <ul>
                                                    <li>
                                                        <label for="domain">Nom domaine</label>
                                                        <input type="text" name="domain" maxlength="100">
                                                        <span>Entrez le nom du domaine</span>
                                                    </li>
                                                    <li>
                                                        <label for="lastname">Nom responsable</label>
                                                        <input type="text" name="lastname" maxlength="100" v-model="userName">
                                                        <span>Entrez le nom du responsable</span>
                                                    </li>
                                                    <li>
                                                        <label for="firstname">Prénom responsable</label>
                                                        <input type="text" name="firstname" maxlength="100">
                                                        <span>Entrer le prénom du responsable</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-12 d-flex justify-content-center">
                                                <ul>
                                                    <li>
                                                        <label for="email">Mail</label>
                                                        <input type="email" name="email" maxlength="100" v-model="email">
                                                        <span>Entrez l'email du domaine</span>
                                                    </li>
                                                    <li class="phone">
                                                        <label for="tel">Téléphone</label>
                                                        <input type="tel" name="tel" maxlength="100">
                                                        <span>Entrez le n° du responsable ou domaine</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-12 d-flex justify-content-center">
                                                <ul>
                                                    <li class="city">
                                                        <label for="city">Ville</label>
                                                        <input type="text" name="city" maxlength="100">
                                                        <span>Entrez la ville où se situe le domaine</span>
                                                    </li>
                                                    <li>
                                                        <label for="cp">Code postal</label>
                                                        <input type="text" name="cp" maxlength="100">
                                                        <span>Entrez le code postal du domaine</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-12 d-flex justify-content-center">
                                                <ul>
                                                    <li>
                                                        <label for="password">Mot de passe</label>
                                                        <input type="password" name="password" maxlength="100">
                                                        <span>Entrez le code postal du domaine</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-12 d-flex justify-content-center">
                                                <div class="submit">
                                                    <button type="submit">
                                                        Modifier
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { namespace } from "@/decorators/vuex";
  import {FeatureState} from "@/features/types";
  import FeatureView from "@/features/Index.vue";
  import {Watch} from "@/decorators";
  import { profile } from "./store";

  const module = namespace("profile");
  const features = namespace("features");

  @Component({
    components: {
      FeatureView
    }
  })
  export default class Profile extends Vue {
    @module.State((state: FeatureState) => state.darkMode)
    private darkMode!: boolean;

    @module.Getter("userEmail")
    private email!: string;

    @module.Getter("userName")
    private userName!: string;

    @Watch("darkMode")
    public onThemeChange(val: boolean) {
      this.$vuetify.theme.dark = val;
    }

    public beforeCreate() {
      this.$store.registerModule("profile", profile);
    }
  }
</script>

<style scoped lang="scss" >
    @media screen and (max-width: 1147px) {
        .form-style-7 ul {
            text-align: center;
        }

        .form-style-7 ul{
            margin-top: 27px !important;
        }

        .form-style-7 li {
            margin-right: 10px !important;
        }
    }

    @media only screen and (min-width: 460px) and (max-width: 566px) {
        .form-style-7 li {
            width: 208px !important;
            margin-right: 10px !important;
        }
    }

    @media screen and (max-width: 500px) {
        .form-style-7 li {
            width: 200px;
            margin-right: 0 !important;
        }
    }

    .submit button {
        border-radius: 30px;
        color: white;
        padding: 10px 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        background: #AB1942;
        font: inherit;
        cursor: pointer;
    }

    .submit button:hover,
    .submit button:active {
        background: #B11D46;
        color: white;
        border-radius: 30px;
    }

    .submit button[disabled],
    .submit button[disabled]:hover,
    .submit button[disabled]:active {
        border: 1px solid #ccc;
        background-color: transparent;
        color: #ccc;
        cursor: not-allowed;
    }

    .phone .city {
        margin-right: 5px;
    }

    .form-style-7 {
        background: #fff;
        border-radius: 2px;
    }

    .form-style-7 h1 {
        display: block;
        text-align: center;
        padding: 0;
        margin: 0px 0px 20px 0px;
        color: #5C5C5C;
        font-size: x-large;
    }

    .form-style-7 ul {
        list-style: none;
        padding: 0;
        margin-top: 49px;
    }

    .form-style-7 li {
        display: inline-block;
        padding: 9px;
        border: 1px solid #DDDDDD;
        margin-bottom: 30px;
        margin-right: 37px;
        border-radius: 3px;
    }

    .form-style-7 li:last-child {
        margin-bottom: 0;
        margin-right: 0;
        text-align: center;
    }

    .form-style-7 li > label {
        display: block;
        float: left;
        margin-top: -19px;
        background: #FFFFFF;
        height: 14px;
        padding: 2px 5px 18px 5px;
        color: #B9B9B9;
        font-size: 14px;
        overflow: hidden;
        font-family: Arial, Helvetica, sans-serif;
    }

    .form-style-7 input[type="text"],
    .form-style-7 input[type="date"],
    .form-style-7 input[type="datetime"],
    .form-style-7 input[type="email"],
    .form-style-7 input[type="number"],
    .form-style-7 input[type="search"],
    .form-style-7 input[type="time"],
    .form-style-7 input[type="url"],
    .form-style-7 input[type="password"],
    .form-style-7 input[type="tel"],
    .form-style-7 textarea,
    .form-style-7 select {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: 100%;
        display: block;
        outline: none;
        border: none;
        height: 25px;
        line-height: 25px;
        font-size: 16px;
        padding: 0;
        font-family: Georgia, "Times New Roman", Times, serif;
    }

    .form-style-7 input[type="text"]:focus,
    .form-style-7 input[type="date"]:focus,
    .form-style-7 input[type="datetime"]:focus,
    .form-style-7 input[type="email"]:focus,
    .form-style-7 input[type="number"]:focus,
    .form-style-7 input[type="search"]:focus,
    .form-style-7 input[type="time"]:focus,
    .form-style-7 input[type="url"]:focus,
    .form-style-7 input[type="password"]:focus,
    .form-style-7 textarea:focus,
    .form-style-7 select:focus {
    }

    .form-style-7 li > span {
        background: #F3F3F3;
        display: block;
        padding: 3px;
        margin: 0 -9px -9px -9px;
        text-align: center;
        color: #C0C0C0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11px;
    }

    .form-style-7 textarea {
        resize: none;
    }

    .form-style-7 input[type="submit"],
    .form-style-7 input[type="button"] {
        background: #2471FF;
        border: none;
        padding: 10px 20px 10px 20px;
        border-bottom: 3px solid #5994FF;
        border-radius: 3px;
        color: #D2E2FF;
    }

    .form-style-7 input[type="submit"]:hover,
    .form-style-7 input[type="button"]:hover {
        background: #6B9FFF;
        color: #fff;
    }

    h1 {
        padding-top: 16px;
        color: #818E94;
        font-size: 30px;
    }

    h1, span {
        display: inline-block;
        vertical-align: middle;
    }

    .fa-power-off {
        color: #7A4442;
    }

    .sidebar {
        border-right: #808D93 1px solid;
        border-image: linear-gradient(to bottom, #fff, #d4dbde, #fff);
        border-image-slice: 1;
    }

    i {
        vertical-align: middle;
    }

    .logo {
        &__viticia {
            height: 37px;
            width: 28px;
            vertical-align: middle;
        }
    }

    @media screen and (min-width: 768px) {

        .logo {
            padding-bottom: 80px;
        }

        .item {
            padding-bottom: 40px;
        }
    }

    .navbar-expand .navbar-nav .nav-link {
        padding-right: 0;
    }

    .navbar-dark .navbar-nav .nav-link {
        color: #808D93;
    }

    .nav-link :hover {
        color: #d81f42;
    }

    svg {
        width: 48px;
        height: 48px;
        fill: #818e94;
    }
</style>
