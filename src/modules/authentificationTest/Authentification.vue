<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 d-flex justify-content-center align-items-center">
        <div class="col-lg-8">
          <div>
            <span class="project-name">
              <img width="77" alt="Viticia" src="@/assets/logos/Logo.png" />
            </span>
          </div>
          <Login v-if="auth" />
          <Register v-else />
          <div class="col-lg-12 d-flex justify-content-center">
            <div class="submit">
              <button type="submit" @click="changeAuth(true)">Connexion</button>
            </div>
            <div class="submit">
              <button type="submit" @click="changeAuth(false)">S'inscrire</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xs-12 col-md-12 container-image"></div>
    </div>
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

import Login from "@/components/Authentification/login.vue";
import Register from "@/components/Authentification/register.vue";

const featureModule = namespace("features");
@Component({
  components: {
    Login,
    Register
  }
})
export default class Authentification extends Vue {
  private auth: boolean = false;

  private changeAuth(b: boolean) {
    this.auth = b;
  }
}
</script>

<style>
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