import { RouteConfig } from "vue-router";
const profile = (resolve: any) => require(['@/modules/profile/Profile.vue'], (m: any) => resolve(m.default));


const module: RouteConfig = {
  path: '/',
  component: profile,
  children: [
  ]
};

export default module;
