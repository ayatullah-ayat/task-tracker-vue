import { createRouter, createWebHistory } from "vue-router";

import PageAbout from '../pages/PageAbout.vue'
import PageHome from '../pages/PageHome.vue'

const routes = [
    {
        path: '/about',
        name: 'PageAbout',
        component: PageAbout,
    },
    {
        path: '/home',
        name: 'PageHome',
        component: PageHome
    }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;