<template>
  <div>
    <div class="description-container">
      <span>
        <p
          class="presentation"
        >Bienvenue sur Viticia, la plateforme web de prévision météorologique en temps réel.</p>
      </span>
      <a href class="fb connect">Sign in with Facebook</a>
      <div class="or">OU</div>
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
      <div class="col-lg-12 d-flex justify-content-center not-forget">
        <div class="checkbox">
          <label class="check">
            <input type="checkbox" />
            Se souvenir de moi
          </label>
        </div>
        <div class="pass">
          <a href class="forgotten-pass">Mot de passse oublié ?</a>
        </div>
      </div>
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
export default class Login extends Vue {}
</script>

<style scoped lang="scss">
input[type="checkbox"],
input[type="radio"] {
  --active: #d81f42;
  --active-inner: #fff;
  --focus: 2px #7a4442;
  --border: rgba(232, 31, 68, 0.85);
  --border-hover: #7a4442;
  --background: #fff;
  --disabled: #f6f8ff;
  --disabled-inner: #e1e6f9;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 21px;
  outline: none;
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0;
  cursor: pointer;
  border: 1px solid var(--bc, var(--border));
  background: var(--b, var(--background));
  transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  &:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }
  &:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  &:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
    &:checked {
      --b: var(--disabled-inner);
      --bc: var(--border);
    }
    & + label {
      cursor: not-allowed;
    }
  }
  &:hover {
    &:not(:checked) {
      &:not(:disabled) {
        --bc: var(--border-hover);
      }
    }
  }
  &:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  &:not(.switch) {
    width: 21px;
    &:after {
      opacity: var(--o, 0);
    }
    &:checked {
      --o: 1;
    }
  }
  & + label {
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 4px;
  }
}

input[type="checkbox"] {
  &:not(.switch) {
    border-radius: 7px;
    &:after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 4px;
      transform: rotate(var(--r, 20deg));
    }
    &:checked {
      --r: 43deg;
    }
  }
  &.switch {
    width: 38px;
    border-radius: 11px;
    &:after {
      left: 2px;
      top: 2px;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      background: var(--ab, var(--border));
      transform: translateX(var(--x, 0));
    }
    &:checked {
      --ab: var(--active-inner);
      --x: 17px;
    }
    &:disabled {
      &:not(:checked) {
        &:after {
          opacity: 0.6;
        }
      }
    }
  }
}

.checkbox {
  margin-right: 10px;
}

.not-forget {
  margin-top: 48px;
}

label.check {
  display: block;
  padding-left: 20px;
}

input[type="checkbox"] {
  margin-left: -20px;
}

.or {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a29c9c;
  margin-top: 35px;
}

.or:after,
.or:before {
  content: "";
  display: block;
  background: #a29c9c;
  width: 8%;
  height: 1px;
  margin: 0 10px;
}

a.fb {
  font-family: Lucida Grande, Helvetica Neue, Helvetica, Arial, sans-serif;
  display: inline-block;
  font-size: 14px;
  padding: 13px 30px 15px 44px;
  background: #3a5a97;
  color: #fff !important;
  text-shadow: 0 -1px 0 rgba(0, 0, 20, 0.4);
  text-decoration: none;
  line-height: 1;
  position: relative;
  border-radius: 5px;
}

.connect:before {
  display: inline-block;
  position: relative;
  background-image: url(data:image/png;base64,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);
  height: 23px;
  background-repeat: no-repeat;
  background-position: 0px 3px;
  text-indent: -9999px;
  text-align: center;
  width: 29px;
  line-height: 23px;
  margin: -8px 7px -7px -30px;
  padding: 2 25px 0 0;
  content: "f";
}

.presentation {
  margin-bottom: 27px;
  color: #707070;
}

input[type="email"],
input[type="password"] {
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
  margin-bottom: 20px;
  background: linear-gradient(to bottom right, #7a4442, #b11d46);
  font: inherit;
  cursor: pointer;
  margin-top: 30px;
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
