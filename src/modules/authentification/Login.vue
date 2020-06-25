<template>
  <v-app id="inspire" :dark="darkMode">
      <v-content>
        <v-container fluid fill-height>
          <v-layout v-if="isSignIn" class="signin">
            <div class="col-lg-6 col-xs-12 col-md-6 container-image">
            </div>
            <div class="col-lg-6 col-xs-12 col-md-6 d-flex justify-content-center align-items-center">
              <div class="col-lg-8">
                <div class="row">
                </div>
                <div>
                  <span class="project-name">Welcome to Viticia</span>
                </div>
                <div class="description-container">
                  <span class="description">A useful website for winegrowers</span>
                </div>
                <div class="col-lg-12">
                  <div class="submit1">
                    <button type="submit1" @click="OauthRegister()">
                      <img src="@/assets/logos/icons8-google-24.png" style="width: 20px; height: 20px; margin-right: 10px;">
                      Sign in with Google
                    </button>
                  </div>
                </div>

                <div class="col-lg-12">
                  <hr class="hr-text" data-content="OR">
                    <label class="field a-field a-field_a1" >
                      <input
                              class="field__input a-field__input"
                              style="width: 272px;"
                              type="text"
                              id="email"
                              placeholder="jhon33"
                              v-model="email"
                      >
                      <span class="a-field__label-wrap">
                                    <span class="a-field__label">Username</span>
                                </span>
                    </label><br>
                    <label class="field a-field a-field_a1">
                      <input
                              class="field__input a-field__input"
                              style="width: 272px;"
                              type="password"
                              id="password"
                              placeholder="xxxxxxxxxx"
                              v-model="password"
                      >
                      <span class="a-field__label-wrap">
                        <span class="a-field__label">Password</span>
                      </span>
                    </label>

                    <div>
                      <v-alert type="error" dismissible v-model="showErrorMessage">{{errorMessage}}</v-alert>
                    </div>
                    <div class="page__toggle">
                      <label class="toggle">
                        <input class="toggle__input" type="checkbox">
                        <span class="toggle__label">
                              <span class="toggle__text">Remember me</span>
                            </span>
                      </label>
                    </div>



                    <div class="row">
                      <div class="col-md-6">
                        <div class="submit">
                          <button @click="connecter()">
                            Login
                          </button>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="submit">
                          <button @click="changeValueSignIn()" >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>

                  <div class="row">
                    <div class="signup-container col-lg-12 d-flex justify-content-between">

                      <a href="" class="signup-description">Forget Password ?</a>
                      <router-link class="signup-description" style="margin-right: 5px;" to="dashboard" >Anonymous</router-link>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
          </v-layout>
          <v-layout v-else class="signup">
            <div class="col-lg-6 col-xs-12 col-md-6 container-image">
            </div>
            <div class="col-lg-6 col-xs-12 col-md-6 d-flex justify-content-center align-items-center">
              <div class="col-lg-8" style="margin-top: 20px;">
                <div class="row">
                </div>
                <div>
                  <span class="project-name">Welcome to Viticia</span>
                </div>
                <div class="description-container">
                  <span class="description">A useful website for winegrowers</span>
                </div>

                <div class="col-lg-12">

                    <label class="field a-field a-field_a1">
                      <input
                              class="field__input a-field__input"
                              style="width: 278px;"
                              type="text"
                              id="email"
                              placeholder="jhon@email.fr" required
                              v-model="email"
                      >
                      <span class="a-field__label-wrap">
                  <span class="a-field__label">Email</span>
                </span>
                    </label><br>

                  <label class="field a-field a-field_a1">
                    <input
                            class="field__input a-field__input"
                            style="width: 278px;"
                            type="text"
                            id="username"
                            placeholder="Jhon" required
                            v-model="username"
                    >
                    <span class="a-field__label-wrap">
                  <span class="a-field__label">Username</span>
                </span>
                  </label><br>


                    <label class="field a-field a-field_a1">
                      <input
                              class="field__input a-field__input"
                              style="width: 272px;"
                              type="password"
                              id="password"
                              placeholder="xxxxxxxxxx" required
                              v-model="password"
                      >
                      <span class="a-field__label-wrap">
                  <span class="a-field__label">Password</span>
                </span>
                    </label>
                    <div class="col-lg-12 d-flex justify-content-end">
                      <div class="submit">
                        <button @click="UserRegister()">
                          Sign up
                        </button>
                      </div>
                    </div>
                  <div class="row">
                    <div class="signup-container col-lg-8 d-flex justify-content-start">
                      <span class="signup-description" style="margin-right: 5px;" @click="changeValueSignIn()" >Have an account?  <strong>Sign in</strong></span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </v-layout>
        </v-container>
      </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { namespace, State, Action } from "@/decorators/vuex";
import { Rule, RequiredRule, MailFormatRule } from "@/rules";
import { RootState } from "@/store/types";
import { ApiEnvironnement } from "@/environnement";
import { FeatureState } from "@/features/types";
import { Watch } from "@/decorators";
import FeatureView from "@/features/Index.vue";
import router from "@/router";

const module = namespace("authentification");
const features = namespace("features");

@Component({
  components: {
    FeatureView
  }
})
export default class Login extends Vue {
  private mdpOubli: boolean = false;
  private email: string = "";
  private password: string = "";
  private username: string = "";
  private showErrorMessage: boolean = false;
  private errorMessage: string = "";
  private valid: boolean = true;

  private required: Rule = RequiredRule;
  private mailFormat: Rule = MailFormatRule;

  @module.Action("login") private login!: (auth: any) => Promise<any>;
  @module.Action("register") private register!: (auth: any) => Promise<any>;

  @module.Action("OauthRegister")
  private OauthRegister!: () => Promise<any>;

  @module.State((state: FeatureState) => state.darkMode)
  private darkMode!: boolean;
  private isSignIn = false;

  public changeValueSignIn() {
    this.isSignIn = !this.isSignIn;
  }

  public get environnement(): string {
    return `${process.env.VUE_APP_ENV_NAME}`;
  }

  public created() {
    this.$vuetify.theme.dark = this.darkMode;
  }

  @Watch("darkMode")
  public onThemeChange(val: boolean) {
    this.$vuetify.theme.dark = val;
  }

  public connecter() {
      this.login({ email: this.email, password: this.password }).catch(
        (e: any) => {
          this.errorMessage = e;
          this.showErrorMessage = true;
        }
      );
  }

  public UserRegister() {
      this.register({ email: this.email, username: this.username, password: this.password }).catch(
        (e: any) => {
          this.errorMessage = e;
          this.showErrorMessage = true;
        }
      );
  }

  public registerOperation() {
    this.mdpOubli = true;
  }

  public retourMdp() {
    this.mdpOubli = false;
  }

  private get form(): any {
    return this.$refs.loginForm;
  }
}
</script>

<style scoped lang="scss">
  #inspire {
    background-color: #242856;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
  }

  .hr-text {
    line-height: 1em;
    position: relative;
    margin-top: 20px;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
    opacity: .5;
    &:before {
      content: '';
      background: linear-gradient(to right, transparent, #6A70FA, transparent);
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
    }
    &:after {
      content: attr(data-content);
      position: relative;
      display: inline-block;
      font-weight: 700;
      padding: 0 .5em;
      line-height: 1.5em;
      color: #497dce;
      background-color: #242856;
    }
  }

  button:focus {
    outline: 0;
  }

  a:hover, a:visited, a:link, a:active
  {
    text-decoration: none;
    color: #707070;
  }

  .signup-description {
    color: #2d446e;
  }

  @media screen and (max-width: 568px) {
    .container-image[data-v-d128a196] {
      height: 0vh;
    }
    .submit button[data-v-d128a196] {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 768px) {
    .container-image[data-v-d128a196] {
      height: 41vh;
    }
    .submit button[data-v-d128a196] {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 1024px) {
    .submit button[data-v-d128a196] {
      background-color: transparent;
    }
  }

  .description {
    vertical-align: middle;
  }

  .description-container {
    margin-top: 20px;
  }

  .project-name {
    vertical-align: middle;
    font-size: 32px;
    font-weight: 500;
    color: white;
    padding-right: 8px;
  }

  .container-login {
    margin-bottom: 61px;
    margin-top: 20px;
  }

  .login-text {
    color: white;
  }

  .field {
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #314775);
  }

  .field__input {
    background-color: transparent;
    border-radius: 0;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;

    font-family: inherit;
    font-size: 1em;
  }

  .field__input:focus::-webkit-input-placeholder {
    color: var(--uiFieldPlaceholderColor);
  }

  .field__input:focus::-moz-placeholder {
    color: var(--uiFieldPlaceholderColor);
    opacity: 1;
  }

  .a-field {
    display: inline-block;
  }

  .a-field__input {
    display: block;
    box-sizing: border-box;
    width: 100%;
  }

  .a-field__input:focus {
    outline: none;
  }

  .a-field {
    --uiFieldHeight: var(--fieldHeight, 40px);
    --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
    --uiFieldBorderColor: var(--fieldBorderColor);

    color: #3565b2;


    --uiFieldFontSize: var(--fieldFontSize, 1em);
    --uiFieldHintFontSize: var(--fieldHintFontSize, 1em);

    --uiFieldPaddingRight: var(--fieldPaddingRight, 0px);
    --uiFieldPaddingBottom: var(--fieldPaddingBottom, 15px);
    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 0px);

    position: relative;
    box-sizing: border-box;
    font-size: var(--uiFieldFontSize);
    padding-top: 1em;
  }

  .a-field__input {
    height: var(--uiFieldHeight);
    padding: 0 var(--uiFieldPaddingRight) 0 var(--uiFieldPaddingLeft);
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColor);
  }

  .a-field__input::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
  }

  .a-field__input::-moz-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
  }

  .a-field__input:not(:placeholder-shown) ~ .a-field__label-wrap .a-field__label {
    opacity: 0;
    bottom: var(--uiFieldPaddingBottom);
  }

  .a-field__input:focus::-webkit-input-placeholder {
    opacity: 1;
    transition-delay: .2s;
  }

  .a-field__input:focus::-moz-placeholder {
    opacity: 1;
    transition-delay: .2s;
  }

  .a-field__label-wrap {
    box-sizing: border-box;
    width: 100%;
    height: var(--uiFieldHeight);

    pointer-events: none;
    cursor: text;

    position: absolute;
    bottom: 0;
    left: 0;
  }

  .a-field__label {
    position: absolute;
    left: var(--uiFieldPaddingLeft);
    bottom: calc(50% - .5em);

    line-height: 1;
    font-size: var(--uiFieldHintFontSize);

    pointer-events: none;
    transition: bottom .2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity .2s ease-out;
    will-change: bottom, opacity;
  }

  .a-field__input:focus ~ .a-field__label-wrap .a-field__label {
    opacity: 1;
    bottom: var(--uiFieldHeight);
  }

  /* a-field_a1 */

  .a-field_a1 .a-field__input {
    transition: border-color .2s ease-out;
    will-change: border-color;
  }

  .a-field_a1 .a-field__input:focus {
    border-color: var(--fieldBorderColorActive);
  }

  /* a-field_a2 */

  .a-field_a2 .a-field__label-wrap::after {
    content: "";
    box-sizing: border-box;
    width: 0;
    height: var(--uiFieldBorderWidth);
    background-color: var(--fieldBorderColorActive);

    position: absolute;
    bottom: 0;
    left: 0;

    will-change: width;
    transition: width .285s ease-out;
  }

  .a-field_a2 .a-field__input:focus ~ .a-field__label-wrap::after {
    width: 100%;
  }

  .a-field_a3 .a-field__label-wrap::after {
    content: "";
    box-sizing: border-box;
    width: 100%;
    height: 0;

    opacity: 0;
    border: var(--uiFieldBorderWidth) solid var(--fieldBorderColorActive);

    position: absolute;
    bottom: 0;
    left: 0;

    will-change: opacity, height;
    transition: height .2s ease-out, opacity .2s ease-out;
  }

  .a-field_a3 .a-field__input:focus ~ .a-field__label-wrap::after {
    height: 100%;
    opacity: 1;
  }

  .a-field_a3 .a-field__input:focus ~ .a-field__label-wrap .a-field__label {
    bottom: calc(var(--uiFieldHeight) + .5em);
  }

  .field {
    --fieldBorderColor: #2e519a;
    --fieldBorderColorActive: #0b1a49;
  }

  .container-image {
    background: url("../../assets/logos/Web-Development-Company-.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 370px 370px;
    height: 100vh;
  }

  .submit button {
    border: none;
    color: white;
    padding: 10px 20px;
    //margin-top: 37px;
    background: #232856;
    border-radius: 5px;
    border: 1px solid #15234d;
    font: inherit;
    cursor: pointer;
  }

  .submit1 button {
    border: none;
    color: white;
    padding: 10px 20px;
    margin-top: 20px;
    background: linear-gradient(#4872c9, #4d97da);
    border-radius: 5px;
    font: inherit;
    cursor: pointer;
  }

  .submit1 button:hover,
  .submit1 button:active {
    background: linear-gradient(#4d97da, #4872c9);
    color: white;
    border-radius: 5px;
  }

  .submit button:hover,
  .submit button:active {
    background: linear-gradient(#4872c9, #4d97da);
    color: white;
    border-radius: 5px;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background: linear-gradient(#4d97da, #4872c9);
    color: #ccc;
    cursor: not-allowed;
  }

  .toggle{
    --uiToggleSize: var(--toggleSize, 20px);
    --uiToggleIndent: var(--toggleIndent, .4em);
    --uiToggleBorderWidth: var(--toggleBorderWidth, 2px);
    --uiToggleColor: var(--toggleColor, #2d446e);
    --uiToggleDisabledColor: var(--toggleDisabledColor, #2e519a);
    --uiToggleBgColor: var(--toggleBgColor, #2e519a);
    --uiToggleArrowWidth: var(--toggleArrowWidth, 2px);
    --uiToggleArrowColor: var(--toggleArrowColor, #2e519a);

    display: inline-block;
    position: relative;
    margin-top: 13px;
  }

  .toggle__input{
    position: absolute;
    left: -99999px;
  }

  .toggle__label{
    display: inline-flex;
    cursor: pointer;
    min-height: var(--uiToggleSize);
    padding-left: calc(var(--uiToggleSize) + var(--uiToggleIndent));
  }

  .toggle__label:before, .toggle__label:after{
    content: "";
    box-sizing: border-box;
    width: 1em;
    height: 1em;
    font-size: var(--uiToggleSize);

    position: absolute;
    left: 0;
    top: 0;
  }

  .toggle__label:before{
    border: var(--uiToggleBorderWidth) solid var(--uiToggleColor);
    z-index: 2;
  }

  .toggle__input:disabled ~ .toggle__label:before{
    border-color: var(--uiToggleDisabledColor);
  }

  .toggle__input:focus ~ .toggle__label:before{
    box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
  }

  .toggle__input:not(:disabled):checked:focus ~ .toggle__label:after{
    box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
  }

  .toggle__input:not(:disabled) ~ .toggle__label:after{
    background-color: var(--uiToggleColor);
    opacity: 0;
  }

  .toggle__input:not(:disabled):checked ~ .toggle__label:after{
    opacity: 1;
  }

  .toggle__text{
    margin-top: auto;
    margin-bottom: auto;
    color: #2d446e;
  }

  .toggle__text:before{
    content: "";
    box-sizing: border-box;
    width: 0;
    height: 0;
    font-size: var(--uiToggleSize);

    border-left-width: 0;
    border-bottom-width: 0;
    border-left-style: solid;
    border-bottom-style: solid;
    border-color: var(--uiToggleArrowColor);

    position: absolute;
    top: .5428em;
    left: .2em;
    z-index: 3;

    transform-origin: left top;
    transform: rotate(-40deg) skew(10deg);
  }

  .toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text:before{
    width: .5em;
    height: .25em;
    border-left-width: var(--uiToggleArrowWidth);
    border-bottom-width: var(--uiToggleArrowWidth);
    will-change: width, height;
    transition: width .1s ease-out .2s, height .2s ease-out;
  }

  .toggle__label:before, .toggle__label:after{
    border-radius: 2px;
  }

  .toggle__input:not(:disabled) ~ .toggle__label:before,
  .toggle__input:not(:disabled) ~ .toggle__label:after{
    opacity: 1;
    transform-origin: center center;
    will-change: transform;
    transition: transform .2s ease-out;
  }

  .toggle__input:not(:disabled) ~ .toggle__label:before{
    transform: rotateY(0deg);
    transition-delay: .2s;
  }

  .toggle__input:not(:disabled) ~ .toggle__label:after{
    transform: rotateY(90deg);
  }

  .toggle__input:not(:disabled):checked ~ .toggle__label:before{
    transform: rotateY(-90deg);
    transition-delay: 0s;
  }

  .toggle__input:not(:disabled):checked ~ .toggle__label:after{
    transform: rotateY(0deg);
    transition-delay: .2s;
  }

  .toggle__text:before{
    opacity: 0;
  }

  .toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text:before{
    opacity: 1;
    transition: opacity .1s ease-out .3s, width .1s ease-out .5s, height .2s ease-out .3s;
  }

  .forget {
    color:#2d446e;
  }

  a:visited, a:link, a:active {
    text-decoration: none;
    color: #2d446e;
  }

  a:hover {
    color: #2d446e;

  }
</style>
