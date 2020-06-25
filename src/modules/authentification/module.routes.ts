import { RouteConfig } from "vue-router";
const login = (resolve: any) => require(['@/modules/authentification/Login.vue'], (m: any) => resolve(m.default));


const module: RouteConfig = {
    path: 'login',
    component: login,
    children: [
    ]
};

export default module;
