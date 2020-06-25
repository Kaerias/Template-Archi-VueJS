import Login from "./authentification/module.routes";
const auth = (resolve: any) => require(['@/modules/authentificationTest/Authentification.vue'], (m: any) => resolve(m.default));

export default [
    Login,
    {
        path: 'authentification',
        component: auth
    }
];
