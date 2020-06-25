<template>
  <div>
    <div class="description-container">
      <span class="description">
        <p
          class="presentation"
        >Bienvenue sur Viticia, la plateforme web de prévision météorologique en temps réel.</p>
      </span>
    </div>
    <form @submit.prevent="onSubmit">
      <label class="field a-field a-field_a1">
        <input
          class="field__input a-field__input"
          type="email"
          id="email"
          placeholder="email@example.com"
          required
          v-model="email"
        />
        <span class="a-field__label-wrap">
          <span class="a-field__label">Email</span>
        </span>
      </label>
      <br />
      <label class="field a-field a-field_a1">
        <input
          class="field__input a-field__input"
          type="text"
          id="Nom Responsable"
          placeholder="Doe"
          required
          v-model="lastname"
        />
        <span class="a-field__label-wrap">
          <span class="a-field__label">Nom responsable</span>
        </span>
      </label>
      <br />
      <label class="field a-field a-field_a1">
        <input
          class="field__input a-field__input"
          type="text"
          id="Prénom Responsable"
          placeholder="Doe"
          required
          v-model="firstname"
        />
        <span class="a-field__label-wrap">
          <span class="a-field__label">Prénom responsable</span>
        </span>
      </label>
      <br />
      <label class="field a-field a-field_a1">
        <input
          class="field__input a-field__input"
          type="password"
          id="password"
          placeholder="xxxxxxxxxx"
          required
          v-model="password"
        />
        <span class="a-field__label-wrap">
          <span class="a-field__label">Mot de passe</span>
        </span>
      </label>
      <br />
      <label class="field a-field a-field_a1">
        <input
          class="field__input a-field__input"
          type="password"
          id="confirmPassword"
          placeholder="xxxxxxxxxx"
          required
          v-model="password"
        />
        <span class="a-field__label-wrap">
          <span class="a-field__label">Confirmation mot de passe</span>
        </span>
      </label>
      <br />
      <label class="field a-field a-field_a1">
        <input
          class="field__input a-field__input"
          type="text"
          id="job"
          placeholder="Paris"
          required
          v-model="city"
        />
        <span class="a-field__label-wrap">
          <span class="a-field__label">Ville</span>
        </span>
      </label>
      <br />
      <label class="field a-field a-field_a1">
        <input
          class="field__input a-field__input"
          type="text"
          pattern="[0-9]{5}"
          id="zipCode"
          placeholder="xxxxx"
          required
          v-model="city"
        />
        <span class="a-field__label-wrap">
          <span class="a-field__label">Code Postal</span>
        </span>
      </label>
      <br />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Component from "vue-class-component";
import { State, namespace } from "@/decorators/vuex";
import { RootState } from "@/store/types";
import Notifications from "@/components/Notification.vue";
import { FeatureState } from "@/features/types";

const featureModule = namespace("features");
@Component
export default class Register extends Vue {}
</script>

<style scoped lang="scss">
.presentation {
  color: #707070;
}

input {
  width: 257px !important;
}

@media screen and (max-width: 992px) {
  .container-image {
    display: none;
  }
}

button:focus {
  outline: 0;
}

.signup-container {
  margin-top: 37px;
  margin-bottom: 44px;
}

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: #d81f42;
}

.signup-description {
  color: #707070;
}

@media screen and (max-width: 568px) {
  .container-image {
    height: 0vh;
  }

  .submit button {
    background-color: transparent;
  }
}

@media screen and (max-width: 768px) {
  .container-image {
    height: 41vh;
  }

  .submit button {
    background-color: transparent;
  }
}

@media screen and (max-width: 1024px) {
  .submit button {
    background-color: transparent;
  }
}

p.description {
  vertical-align: middle;
  display: block;
  text-align: center;
}

.description-container {
  margin-top: 20px;
  display: block;
  text-align: center;
}

.project-name {
  vertical-align: middle;
  font-size: 32px;
  color: #43425d;
  padding-right: 8px;
}

.container-login {
  margin-bottom: 61px;
  margin-top: 20px;
}

.login-text {
  color: #707070;
}

form {
  margin-top: 20px;
  text-align: center;
}

.field {
  --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #8d3163);
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
  transition: opacity 0.2s ease-out;
}

.a-field__input::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.2s ease-out;
}

.a-field__input:not(:placeholder-shown) ~ .a-field__label-wrap .a-field__label {
  opacity: 0;
  bottom: var(--uiFieldPaddingBottom);
}

.a-field__input:focus::-webkit-input-placeholder {
  opacity: 1;
  transition-delay: 0.2s;
}

.a-field__input:focus::-moz-placeholder {
  opacity: 1;
  transition-delay: 0.2s;
}

.a-field__label-wrap {
  box-sizing: border-box;
  width: 100%;
  height: var(--uiFieldHeight);

  pointer-events: none;
  cursor: text;
  color: #707070;

  position: absolute;
  bottom: 0;
  left: 0;
}

.a-field__label {
  position: absolute;
  left: var(--uiFieldPaddingLeft);
  bottom: calc(50% - 0.5em);

  line-height: 1;
  font-size: var(--uiFieldHintFontSize);

  pointer-events: none;
  transition: bottom 0.2s cubic-bezier(0.9, -0.15, 0.1, 1.15),
    opacity 0.2s ease-out;
  will-change: bottom, opacity;
}

.a-field__input:focus ~ .a-field__label-wrap .a-field__label {
  opacity: 1;
  bottom: var(--uiFieldHeight);
}

.a-field_a1 .a-field__input {
  transition: border-color 0.2s ease-out;
  will-change: border-color;
}

.a-field_a1 .a-field__input:focus {
  border-color: var(--fieldBorderColorActive);
}

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
  transition: width 0.285s ease-out;
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
  transition: height 0.2s ease-out, opacity 0.2s ease-out;
}

.a-field_a3 .a-field__input:focus ~ .a-field__label-wrap::after {
  height: 100%;
  opacity: 1;
}

.a-field_a3 .a-field__input:focus ~ .a-field__label-wrap .a-field__label {
  bottom: calc(var(--uiFieldHeight) + 0.5em);
}

.field {
  --fieldBorderColor: #8d3163;
  --fieldBorderColorActive: #b11d46;
}

.container-image {
  background: url("/assets/logos/raisin.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

button:first-child {
  margin-right: 9px;
}

.submit button {
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to bottom right, #7a4442, #b11d46);
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background: #b11d46;
  color: white;
  border-radius: 10px;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>