const Root = (resolve: any) => require(['@/layout/Root.vue'], (m: any) => resolve(m.default));
const home = (resolve: any) => require(['@/modules/workFlow/home.vue'], (m: any) => resolve(m.default));
import Profile from "@/modules/profile/module.routes";

import modules from "@/modules/module.routes";

import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
    {
        path: "/",
        component: Root,
        children: [
            ...modules,
            {
                path: '/',
                component: home,
                children: [
                    Profile
                ]
            }
        ]
    }
];
